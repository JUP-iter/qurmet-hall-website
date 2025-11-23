import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "О нас", href: "/" },
    { label: "Меню", href: "/menu" },
    { label: "Галерея", href: "/gallery" },
    { label: "Контакты", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location === href;
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary font-serif hover:opacity-80 cursor-pointer">
            Qurmet Hall
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span
                className={`nav-link cursor-pointer ${
                  isActive(link.href) ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="bg-primary hover:bg-opacity-90">
              Забронировать
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span
                  className="nav-link block py-2 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                className="w-full bg-primary hover:bg-opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Забронировать
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
