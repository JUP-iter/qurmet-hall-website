import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "О нас", href: "#about" },
    { label: "Залы", href: "#halls" },
    { label: "Меню", href: "#menu" },
    { label: "Галерея", href: "#gallery" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary font-serif">
          Qurmet Hall
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a href="#booking">
            <Button size="sm" className="bg-primary hover:bg-opacity-90">
              Забронировать
            </Button>
          </a>
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
              <a
                key={link.label}
                href={link.href}
                className="nav-link block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-opacity-90">
                Забронировать
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
