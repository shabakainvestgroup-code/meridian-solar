"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Calculator } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/simulateur", label: "Simulateur", highlight: true },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Meridian Solar"
              width={200}
              height={76}
              className="h-16 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1.5"
                  style={
                    isActive(link.href)
                      ? { background: "#f59e0b", color: "#fff" }
                      : { background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }
                  }
                >
                  <Calculator className="w-3.5 h-3.5" />
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                  style={
                    isActive(link.href)
                      ? { background: "#1e3494", color: "#fff" }
                      : { color: "#374151" }
                  }
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/devis" className="btn-gold text-sm py-2.5 px-6">
              Devis Gratuit
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl font-medium transition-all"
                style={
                  isActive(link.href)
                    ? { background: "#1e3494", color: "#fff" }
                    : { color: "#374151" }
                }
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/devis"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full justify-center"
              >
                Devis Gratuit
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
