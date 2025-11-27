import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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

  const [showContactModal, setShowContactModal] = useState(false);
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
    
    // Validate form
    if (!bookingData.name || !bookingData.phone || !bookingData.date || 
        !bookingData.time || !bookingData.guests) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    // Show contact modal
    setShowContactModal(true);
  };

  const formatBookingMessage = () => {
    const eventTypeMap: { [key: string]: string } = {
      wedding: "Свадьба",
      birthday: "День Рождения",
      corporate: "Корпоратив",
      anniversary: "Юбилей",
      other: "Другое",
    };

    return `Привет! Я хочу забронировать зал.

Мои данные:
📝 Имя: ${bookingData.name}
📱 Телефон: ${bookingData.phone}
📅 Дата: ${bookingData.date}
⏰ Время: ${bookingData.time}
👥 Количество гостей: ${bookingData.guests}
🎉 Тип мероприятия: ${eventTypeMap[bookingData.eventType]}

Прошу связаться со мной для уточнения деталей.`;
  };

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(formatBookingMessage());
    const whatsappNumber = "77011155151"; // Номер WhatsApp ресторана
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setShowContactModal(false);
    // Reset form
    setBookingData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      eventType: "wedding",
    });
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
                className="w-full bg-primary hover:bg-opacity-90 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Отправить Заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Выберите способ связи
            </h3>
            
            <div className="space-y-4">
              <Button
                onClick={sendToWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg flex items-center justify-center gap-3"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.623-2.504 4.472 0 2.662 2.164 4.811 5.044 4.811.842 0 1.643-.154 2.404-.457l2.325 1.039c.953.487 2.26.03 2.486-1.025.112-.527.632-3.129 1.195-4.458.275-.671.26-1.25.084-1.543-.281-.505-.722-.893-1.35-1.232-.288-.16-.745-.347-1.651-.347-1.268 0-2.504.requisites-1.268 0-2.504.requisites"/>
                </svg>
                Написать в WhatsApp
              </Button>

              <Button
                onClick={() => setShowContactModal(false)}
                variant="outline"
                className="w-full py-6 text-lg"
              >
                Отмена
              </Button>
            </div>

            <p className="text-sm text-gray-600 text-center mt-6">
              Ваши данные будут отправлены в WhatsApp с готовым текстом
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
