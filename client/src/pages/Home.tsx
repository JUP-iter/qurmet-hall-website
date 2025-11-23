import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    eventType: "wedding",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    setSubmitted(true);
    setTimeout(() => {
      setBookingData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        eventType: "wedding",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/84YfQn6zyX1f.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Qurmet Hall</h1>
          <p className="hero-subtitle">
            Искусство Вашего Торжества
          </p>
          <p className="text-lg mb-8 font-light">
            Банкетный зал вместимостью до 500 гостей в Актобе
          </p>
          <a href="#booking">
            <Button size="lg" className="bg-primary hover:bg-opacity-90">
              Забронировать Дату
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">О Qurmet Hall</h2>
              <p className="text-lg text-foreground mb-4">
                Qurmet Hall — это не просто ресторан, это архитектурный шедевр
                и главный банкетный комплекс Актобе, созданный для воплощения
                самых грандиозных торжеств.
              </p>
              <p className="text-lg text-foreground mb-6">
                Наша миссия — превратить каждое событие, будь то роскошная
                свадьба, юбилей или масштабный корпоратив, в незабываемую
                историю, наполненную изыском и вниманием к деталям.
              </p>
              <a href="#halls">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Узнать больше о нас <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/AHrr2fii4Rfy.jpg"
                alt="Qurmet Hall Exterior"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Halls Section */}
      <section id="halls" className="py-16 bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-12">Наши Залы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <img
                src="/72lsdc39kBlk.jpg"
                alt="Main Hall"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Главный Зал</h3>
              <p className="text-muted-foreground mb-4">
                Вместимость до 500 гостей
              </p>
              <p className="text-foreground">
                Роскошный зал с хрустальными люстрами, золотыми акцентами и
                современным техническим оснащением.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <img
                src="/75lXucDFP4PO.jpg"
                alt="VIP Hall"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">VIP Зал</h3>
              <p className="text-muted-foreground mb-4">
                Вместимость до 150 гостей
              </p>
              <p className="text-foreground">
                Интимный зал для небольших торжеств с персональным сервисом и
                элегантным оформлением.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <img
                src="/trM2N1yi52h0.jpg"
                alt="Photo Zone"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Фото Зона</h3>
              <p className="text-muted-foreground mb-4">
                Специальное пространство
              </p>
              <p className="text-foreground">
                Красивое пространство для фотографирования с профессиональным
                освещением и декорацией.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Моменты Роскоши</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/84YfQn6zyX1f.jpg"
                alt="Event 1"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/72lsdc39kBlk.jpg"
                alt="Event 2"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/75lXucDFP4PO.jpg"
                alt="Event 3"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/AHrr2fii4Rfy.jpg"
                alt="Event 4"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/trM2N1yi52h0.jpg"
                alt="Event 5"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/84YfQn6zyX1f.jpg"
                alt="Event 6"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-12">
            Забронируйте Ваше Торжество
          </h2>
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Ваше Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                  placeholder="+7 (700) XXX-XX-XX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Дата Мероприятия *</label>
                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Время *</label>
                <input
                  type="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Количество Гостей *</label>
                <input
                  type="number"
                  name="guests"
                  value={bookingData.guests}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                  placeholder="100"
                  min="10"
                  max="500"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Тип Мероприятия *</label>
                <select
                  name="eventType"
                  value={bookingData.eventType}
                  onChange={handleBookingChange}
                  className="form-input"
                  required
                >
                  <option value="wedding">Свадьба</option>
                  <option value="birthday">День Рождения</option>
                  <option value="corporate">Корпоратив</option>
                  <option value="anniversary">Юбилей</option>
                  <option value="other">Другое</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-opacity-90"
              >
                {submitted ? "Спасибо за заявку!" : "Отправить Заявку"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Свяжитесь с Нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-foreground">
                ул. Братьев Жубановых, 276/1
                <br />
                Актобе, Казахстан
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-foreground">
                <a href="tel:+77001234567" className="hover:text-primary">
                  +7 (700) 123-45-67
                </a>
                <br />
                Ежедневно, 10:00 - 02:00
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-foreground">
                <a href="mailto:info@qurmet-hall.kz" className="hover:text-primary">
                  info@qurmet-hall.kz
                </a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
