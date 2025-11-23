import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

export default function Menu() {
  const [, navigate] = useLocation();

  const menuCategories = [
    {
      name: "Закуски",
      description: "Разнообразные закуски из казахской и европейской кухни",
      items: [
        "Казахский плов с мясом",
        "Бешбармак (традиционное блюдо)",
        "Манты (мясные пельмени)",
        "Салат из овощей с йогуртом",
        "Копченая рыба с травами",
      ],
    },
    {
      name: "Основные Блюда",
      description: "Изысканные основные блюда для вашего торжества",
      items: [
        "Шашлык из говядины и баранины",
        "Куриное филе с овощами",
        "Стейк из мраморной говядины",
        "Рыба на гриле с лимоном",
        "Ягненок с розмарином и картофелем",
      ],
    },
    {
      name: "Гарниры и Салаты",
      description: "Свежие гарниры и салаты к основным блюдам",
      items: [
        "Картофель по-деревенски",
        "Рис с овощами",
        "Греческий салат",
        "Цезарь с курицей",
        "Овощное ассорти на гриле",
      ],
    },
    {
      name: "Десерты",
      description: "Сладкие завершения вашего праздника",
      items: [
        "Шоколадный торт с ягодами",
        "Панна-котта с фруктами",
        "Эклеры с кремом",
        "Фруктовый салат со сливками",
        "Традиционные казахские сладости",
      ],
    },
    {
      name: "Напитки",
      description: "Выбор напитков для вашего мероприятия",
      items: [
        "Вино (красное и белое)",
        "Пиво (местное и импортное)",
        "Шампанское",
        "Коктейли на заказ",
        "Безалкогольные напитки",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Стандартный",
      price: "5,000₸",
      perPerson: "за человека",
      features: [
        "3 закуски",
        "2 основных блюда",
        "1 гарнир",
        "1 салат",
        "1 напиток",
      ],
    },
    {
      name: "Премиум",
      price: "8,500₸",
      perPerson: "за человека",
      features: [
        "5 закусок",
        "3 основных блюда",
        "2 гарнира",
        "2 салата",
        "2 напитка",
        "Десерт",
      ],
      highlighted: true,
    },
    {
      name: "Люкс",
      price: "12,000₸",
      perPerson: "за человека",
      features: [
        "7 закусок",
        "4 основных блюда",
        "3 гарнира",
        "3 салата",
        "3 напитка",
        "2 десерта",
        "Фруктовое ассорти",
      ],
    },
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
          <h1 className="hero-title">Наше Меню</h1>
          <p className="hero-subtitle">
            Изысканные блюда для вашего торжества
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title text-center mb-12">Категории Блюд</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category) => (
              <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2 text-primary">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-foreground text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-12">Пакеты Обслуживания</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-2 border-primary shadow-lg scale-105"
                    : "hover:shadow-lg transition-shadow"
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4 text-center font-semibold text-sm">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <p className="text-muted-foreground text-sm">{tier.perPerson}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate("/contact")}
                  className={`w-full ${
                    tier.highlighted
                      ? "bg-primary hover:bg-opacity-90"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  Выбрать Пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="section-title mb-4">Индивидуальное Меню</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы можем создать индивидуальное меню в соответствии с вашими предпочтениями и
            бюджетом. Свяжитесь с нами для консультации.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            size="lg"
            className="bg-primary hover:bg-opacity-90"
          >
            Связаться с Нами
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
