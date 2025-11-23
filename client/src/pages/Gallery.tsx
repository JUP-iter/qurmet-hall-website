import { useState } from "react";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: "/84YfQn6zyX1f.jpg", alt: "Банкетный зал с гостями" },
    { id: 2, src: "/72lsdc39kBlk.jpg", alt: "Интерьер главного зала" },
    { id: 3, src: "/75lXucDFP4PO.jpg", alt: "Украшенный зал для свадьбы" },
    { id: 4, src: "/AHrr2fii4Rfy.jpg", alt: "Фасад здания" },
    { id: 5, src: "/trM2N1yi52h0.jpg", alt: "Вид на здание" },
    { id: 6, src: "/84YfQn6zyX1f.jpg", alt: "Праздничное мероприятие" },
    { id: 7, src: "/72lsdc39kBlk.jpg", alt: "Люстры и декорации" },
    { id: 8, src: "/75lXucDFP4PO.jpg", alt: "Столы и сервировка" },
    { id: 9, src: "/AHrr2fii4Rfy.jpg", alt: "Архитектурные детали" },
    { id: 10, src: "/trM2N1yi52h0.jpg", alt: "Вечерний вид" },
    { id: 11, src: "/84YfQn6zyX1f.jpg", alt: "Торжество в залу" },
    { id: 12, src: "/72lsdc39kBlk.jpg", alt: "Танцевальная площадка" },
  ];

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
          <h1 className="hero-title">Галерея</h1>
          <p className="hero-subtitle">
            Моменты роскоши и торжества
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Наши Мероприятия</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ваше Торжество Будет Незабываемо</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждое мероприятие в Qurmet Hall — это уникальная история, наполненная
            изыском, вниманием к деталям и безупречным сервисом. Посмотрите нашу
            галерею и убедитесь в качестве наших услуг.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
