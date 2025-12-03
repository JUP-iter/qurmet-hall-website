import { Card } from "@/components/ui/card";
import { Phone, MapPin, Mail, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const testimonials = [
    {
      name: "Мағжан Ахат",
      text: "Ұлттық нақышта безендірілген, тағамдары керемет дәмді. Өте әдемі жер",
      rating: 5,
      date: "16 ноября 2025",
    },
    {
      name: "Айымхан Утеулиева",
      text: "Өте керемет 🔥🔥👍👍",
      rating: 5,
      date: "22 октября 2025",
    },
    {
      name: "Gulmeiram Serikkali",
      text: "Лучшие",
      rating: 5,
      date: "18 октября 2025",
    },
    {
      name: "Irina Irina",
      text: "Концерт Акмаля был лучший, очень хочется ещё побывать на таком концерте!",
      rating: 5,
      date: "15 октября 2025",
    },
    {
      name: "Apple User",
      text: "Сервис на высшем уровне. Администраторы, официанты молодцы. Кухня очень вкусная",
      rating: 5,
      date: "14 октября 2025",
    },
    {
      name: "Мейіржан Тел",
      text: "Өттте жақсы, ұнады",
      rating: 5,
      date: "7 октября 2025",
    },
    {
      name: "Нурболат Баудияров",
      text: "Официант Фарида жаксы кызмет кылды",
      rating: 5,
      date: "27 сентября 2025",
    },
    {
      name: "Ерлан Ногайбеков",
      text: "Класссс",
      rating: 5,
      date: "23 сентября 2025",
    },
    {
      name: "_Sanzhar _Akarysovvich_",
      text: "Бундай обслужканынын денгейин Елегантта, Уайт Хилл, Диана Палас жане тагыда баска тойханалрда кормедим. Оте керемет жане сыпайы",
      rating: 5,
      date: "20 сентября 2025",
    },
    {
      name: "Жансая Кенжебаева",
      text: "10 август үйлену тойын жасадық. Сервис на высшем уровне. Администраторы, официанты молодцы",
      rating: 5,
      date: "11 сентября 2025",
    },
    {
      name: "Serik Nurzhauov",
      text: "хорошая кухня. климатических настроена хорошо",
      rating: 5,
      date: "6 сентября 2025",
    },
    {
      name: "Алибек Акбалиев",
      text: "Ресторан супер👍👍👍",
      rating: 5,
      date: "4 сентября 2025",
    },
    {
      name: "Жаке Бриллиант",
      text: "Хороший ресторан шикарный зал",
      rating: 5,
      date: "1 сентября 2025",
    },
    {
      name: "Сагынтай Кабылов",
      text: "Отл",
      rating: 5,
      date: "21 августа 2025",
    },
    {
      name: "Zhasik 273",
      text: "Очень чисто",
      rating: 5,
      date: "18 августа 2025",
    },
    {
      name: "Анонимный гость",
      text: "Мне очень понравилась меню блюд, очень вкусно изысканно все чисто. Официантка очень хорошо обслуживает",
      rating: 5,
      date: "11 августа 2025",
    },
    {
      name: "Asema Smetova",
      text: "Ресторан өте әдемі, бәріі ұнады. Столда бір салфетка калдырмады таза өте",
      rating: 5,
      date: "2 июня 2025",
    },
    {
      name: "Акмаржан Абияда",
      text: "Өте керемет ресторан. Особенно администратор Гүлім деген қызға алғыс айтам өте керемет қыз",
      rating: 5,
      date: "20 апреля 2025",
    },
    {
      name: "Akzhol Izbasov",
      text: "Ресторан супер",
      rating: 5,
      date: "12 апреля 2025",
    },
    {
      name: "Zhanibek",
      text: "Құрметті ресторан Курмет Холл! Спасибо Вам за Ваше гостеприимство и организованность",
      rating: 5,
      date: "11 апреля 2025",
    },
    {
      name: "Тоғжан Әділқызы",
      text: "😍😍😍😍😍😍",
      rating: 5,
      date: "31 марта 2025",
    },
    {
      name: "Каженова амина",
      text: "Недавно провели здесь свадьбу брата и остались в полном восторге! Атмосфера уютная, интерьер элегантный",
      rating: 5,
      date: "28 марта 2025",
    },
    {
      name: "Канатбай Юртубаев",
      text: "Впечатляет зал, наблюдал как обслуживают официанты, молодцы, все быстро и без суеты",
      rating: 5,
      date: "20 марта 2025",
    },
    {
      name: "Асхат Тулеуов",
      text: "Мейрамхана администратора Мейіржанға алғысымыз шексіз. Той ұйымдастыруы өте керемет",
      rating: 5,
      date: "8 марта 2025",
    },
    {
      name: "Saule Bissengaliyeva",
      text: "🫶🏻",
      rating: 5,
      date: "29 июля 2025",
    },
    {
      name: "elvirosh",
      text: "тамактары теемаа официанттар жаксы жумыс стит🔥🔥🔥",
      rating: 5,
      date: "27 июля 2025",
    },
  ];

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
              <h3 className="text-2xl font-bold mb-2">Большой Зал</h3>
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
              <h3 className="text-2xl font-bold mb-2">Малый Зал</h3>
              <p className="text-muted-foreground mb-4">
                Вместимость до 180 гостей
              </p>
              <p className="text-foreground">
                Банкетный зал для небольших торжеств с персональным сервисом и
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

      {/* Testimonials Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-12">Отзывы Наших Гостей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-96 overflow-y-auto pr-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic line-clamp-3">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-foreground mb-4">
              ⭐ Средняя оценка: <strong>4.9 из 5</strong> (610 оценок на 2GIS)
            </p>
            <a
              href="https://2gis.kz/aktobe/firm/70000001045465548/tab/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Читать все отзывы на 2GIS
            </a>
          </div>
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
                <a href="tel:+77011155151" className="hover:text-primary">
                  +7 (701) 115-51-51
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
