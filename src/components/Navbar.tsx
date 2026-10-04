import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f1eb]/85 shadow-[0_16px_40px_rgba(17,17,17,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => handleNavClick("about")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to about section"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                scrolled
                  ? "border-[#111111]/10 bg-white text-[#111111]"
                  : "border-white/30 bg-white/5 text-white"
              }`}
            >
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <div
                className={`font-playfair text-xl leading-none tracking-tight ${
                  scrolled ? "text-[#111111]" : "text-white"
                }`}
              >
                Singhal &amp; Associates
              </div>
              <div
                className={`text-[9px] font-semibold uppercase tracking-[0.25em] ${
                  scrolled ? "text-[#6f6f6f]" : "text-[#e5d7b7]"
                }`}
              >
                Advocates &amp; Solicitors
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => handleNavClick("about")}
              className="nav-link text-[15px]  cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("practice")}
              className="nav-link text-[15px] cursor-pointer"
            >
              Practice Areas
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="nav-link text-[15px] cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="nav-link text-[15px] cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            className={`md:hidden ${scrolled ? "text-[#111111]" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#111111]/10 bg-[#f5f1eb] md:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-5">
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:bg-white"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("practice")}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:bg-white"
            >
              Practice Areas
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:bg-white"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:bg-white"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
