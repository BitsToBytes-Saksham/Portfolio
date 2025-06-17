// Navbar.jsx
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50",
        "transition-all duration-300",
        isScrolled ? "scale-95" : "scale-100"
      )}
    >
      <div className="relative">
        {/* Glowing aura tightly around navbar */}
        <div className="absolute -inset-1 rounded-full blur-2xl opacity-25 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 animate-pulse z-[-1]" />

        {/* Nav container */}
        <div
          className={cn(
            "px-10 py-4 rounded-full bg-[#0d0d0d]/90 border border-white/10 backdrop-blur-md shadow-2xl",
            "flex justify-center space-x-8 text-white font-medium",
            "transition-transform duration-1000 animate-float"
          )}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-purple-400 transition-colors duration-300 relative"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Removed earlier bottom light beam */}
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center text-white space-y-8 text-xl transition-all duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-purple-400 transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

// Tailwind CSS animations (add to global.css or tailwind.config.js)
/*
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
*/