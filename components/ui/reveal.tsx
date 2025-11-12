"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode, ComponentProps } from "react";

const variants: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

type MotionDivProps = ComponentProps<typeof motion.div>;

interface RevealProps extends MotionDivProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0.2,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
