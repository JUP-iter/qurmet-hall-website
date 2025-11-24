import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MapView } from "@/components/Map";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    eventType: "wedding",
  });

  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef<any>(null);

  const handleMapReady = (map: any) => {
    mapRef.current = map;
    
    // Add marker for Qurmet Hall
    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: { lat: 50.2944, lng: 57.1471 },
      title: "Qurmet Hall",
    });

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 5px 0; color: #333;">Qurmet Hall</h3>
          <p style="margin: 0 0 5px 0; color: #666;">ул. Братьев Жубановых, 276/1</p>
          <p style="margin: 0; color: #666;">Актобе, Казахстан</p>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    // Open info window by default
    infoWindow.open(map, marker);
  };

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
        className="hero-section mt-16"
        style={{
          backgroundImage: "url('/84YfQn6zyX1f.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Контакты</h1>
          <p className="hero-subtitle">
            Свяжитесь с нами для бронирования
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-foreground text-sm">
                ул. Братьев Жубановых, 276/1
                <br />
                Актобе, Казахстан
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-foreground text-sm">
                <a href="tel:+77001234567" className="hover:text-primary">
                  +7 (700) 123-45-67
                </a>
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-foreground text-sm">
                <a href="mailto:info@qurmet-hall.kz" className="hover:text-primary">
                  info@qurmet-hall.kz
                </a>
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">График</h3>
              <p className="text-foreground text-sm">
                Ежедневно
                <br />
                10:00 - 02:00
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-8">Наше Местоположение</h2>
          <MapView
            initialCenter={{ lat: 50.2944, lng: 57.1471 }}
            initialZoom={15}
            onMapReady={handleMapReady}
            className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
          />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Забронируйте Ваше Торжество</h2>
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

      <Footer />
    </div>
  );
}
