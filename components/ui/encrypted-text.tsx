"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  /** Time in ms between revealing each subsequent real character. */
  revealDelayMs?: number;
  /** Optional custom character set to use for the gibberish effect. */
  charset?: string;
  /** Time in ms between gibberish flips for unrevealed characters. */
  flipDelayMs?: number;
  /** CSS class for styling the encrypted/scrambled characters */
  encryptedClassName?: string;
  /** CSS class for styling the revealed characters */
  revealedClassName?: string;
  /**
   * Seed to generate deterministic initial scrambled output on the server.
   * If omitted, a default fixed seed is used so SSR and first client render match.
   */
  seed?: number;
  /**
   * If true, skip SSR entirely and only render after mount (client-only) to avoid hydration issues.
   */
  clientOnly?: boolean;
  /**
   * If true, render plain readable text on the server and first client render,
   * then start the scramble animation only after mount. Best for SEO.
   */
  ssrPlain?: boolean;
  /**
   * When used with ssrPlain, make the initial plain SSR text visually hidden via transparency
   * but still present in the DOM for SEO. After mount, animation shows normal styling.
   */
  ssrPlainInvisible?: boolean;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

// Simple Mulberry32 PRNG for deterministic sequence from a seed.
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function generateRandomCharacter(charset: string, rand: () => number): string {
  const index = Math.floor(rand() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string,
  rand: () => number,
): string {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset, rand);
  }
  return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
  seed = 123456789, // fixed default seed ensures deterministic SSR string
  clientOnly = false,
  ssrPlain = true,
  ssrPlainInvisible = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState<number>(0);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastFlipTimeRef = useRef<number>(0);
  // Deterministic initial scramble using seeded PRNG so server & first client render match.
  const initialRandRef = useRef<() => number>(mulberry32(seed));
  const scrambleCharsRef = useRef<string[]>(
    text
      ? generateGibberishPreservingSpaces(
          text,
          charset,
          initialRandRef.current,
        ).split("")
      : [],
  );

  // Track mount to optionally render nothing on server when clientOnly is set.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (clientOnly && !hasMounted) return; // ensure we only animate after mount in clientOnly mode
    if (ssrPlain && !hasMounted) return; // don't animate until after mount in SSR-plain mode

    // Reset state for a fresh animation whenever dependencies change
    const initial = text
      ? generateGibberishPreservingSpaces(text, charset, initialRandRef.current)
      : "";
    scrambleCharsRef.current = initial.split("");
    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);

    let isCancelled = false;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) {
        return;
      }

      // Re-randomize unrevealed scramble characters on an interval
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              scrambleCharsRef.current[index] = generateRandomCharacter(
                charset,
                Math.random, // post-hydration randomization is fine
              );
            } else {
              scrambleCharsRef.current[index] = " ";
            }
          }
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isInView,
    text,
    revealDelayMs,
    charset,
    flipDelayMs,
    clientOnly,
    hasMounted,
    ssrPlain,
  ]);

  if (!text) return null;
  // In clientOnly mode, render nothing on server to avoid mismatch, then real component after mount.
  if (clientOnly && !hasMounted) {
    return <span aria-hidden="true" />;
  }

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {ssrPlain && !hasMounted ? (
        <span
          className={cn(
            ssrPlainInvisible ? "opacity-0" : undefined,
            revealedClassName,
          )}
        >
          {text}
        </span>
      ) : (
        text.split("").map((char, index) => {
          const isRevealed = index < revealCount;
          const displayChar = isRevealed
            ? char
            : char === " "
              ? " "
              : (scrambleCharsRef.current[index] ??
                generateRandomCharacter(charset, initialRandRef.current));

          return (
            <span
              key={index}
              className={cn(
                isRevealed ? revealedClassName : encryptedClassName,
              )}
            >
              {displayChar}
            </span>
          );
        })
      )}
    </motion.span>
  );
};
