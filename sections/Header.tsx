import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import MobileNav from "@/components/MobileNav";

export default function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

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

  return (
    <nav className="text-primary border-primary fixed top-0 z-50 w-full border-b bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 px-6 py-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-primary w-24 rounded-full py-2 text-center font-medium transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-4 md:flex">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary rounded-full p-2 transition-colors hover:text-white"
                title={social.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="z-50 flex justify-end md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
