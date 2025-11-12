"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const socials = [
    { icon: Github, href: "https://github.com/mansurby", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mansur-bala-b17093179",
      label: "LinkedIn",
    },
    { icon: FaXTwitter, href: "https://x.com/Mr_mansuuR", label: "X" },
    { icon: Mail, href: "mailto:mbbala36@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="active:bg-primary active:text-primary-foreground rounded-full p-6 transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  ref={sheetRef}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.28 }}
                  className="bg-background fixed top-0 right-0 z-110 flex h-full w-72 max-w-full flex-col p-6 shadow-lg outline-none"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button
                      onClick={() => setOpen(false)}
                      aria-label="Close Menu"
                      className="active:bg-primary active:text-primary-foreground text-primary rounded-full p-2 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="flex flex-col space-y-6 text-lg font-medium">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="active:bg-primary active:text-primary-foreground text-primary rounded-full px-3 py-2 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-8 flex items-center gap-4">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="active:bg-primary active:text-primary-foreground text-primary rounded-full p-2 transition-colors"
                          title={social.label}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
