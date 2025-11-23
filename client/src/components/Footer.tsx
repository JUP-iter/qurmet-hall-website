import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary font-serif">
              Qurmet Hall
            </h3>
            <p className="text-muted-foreground text-sm">
              Роскошный банкетный комплекс в Актобе для проведения ваших самых
              важных торжеств.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые Ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">
                  О нас
                </a>
              </li>
              <li>
                <a href="#halls" className="text-muted-foreground hover:text-primary">
                  Залы
                </a>
              </li>
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-primary">
                  Меню
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary">
                  Галерея
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+77001234567" className="text-muted-foreground hover:text-primary">
                  +7 (700) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@qurmet-hall.kz" className="text-muted-foreground hover:text-primary">
                  info@qurmet-hall.kz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  ул. Братьев Жубановых, 276/1
                  <br />
                  Актобе, Казахстан
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Следите за Нами</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/qurmet_hall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Qurmet Hall. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">
                Политика Конфиденциальности
              </a>
              <a href="#" className="hover:text-primary">
                Условия Использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
