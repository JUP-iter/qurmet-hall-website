import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    id: 1,
    name: "Закуски",
    items: [
      { name: "Крем-суп из грибов", price: "2,500 ₸" },
      { name: "Салат Цезарь", price: "3,000 ₸" },
      { name: "Тартар из лосося", price: "4,500 ₸" }
    ]
  },
  {
    id: 2,
    name: "Основные блюда",
    items: [
      { name: "Стейк Рибай", price: "8,500 ₸" },
      { name: "Филе миньон", price: "9,500 ₸" },
      { name: "Лосось на гриле", price: "7,500 ₸" }
    ]
  },
  {
    id: 3,
    name: "Гарниры",
    items: [
      { name: "Картофель фри", price: "1,500 ₸" },
      { name: "Овощи гриль", price: "2,000 ₸" },
      { name: "Рис басмати", price: "1,800 ₸" }
    ]
  },
  {
    id: 4,
    name: "Десерты",
    items: [
      { name: "Шоколадный фондан", price: "2,500 ₸" },
      { name: "Панна-котта", price: "2,000 ₸" },
      { name: "Торт Наполеон", price: "2,800 ₸" }
    ]
  },
  {
    id: 5,
    name: "Напитки",
    items: [
      { name: "Красное вино", price: "от 5,000 ₸" },
      { name: "Шампанское", price: "от 8,000 ₸" },
      { name: "Коктейли", price: "от 3,000 ₸" }
    ]
  }
];

const dishesWithPhotos = [
  { name: "Стейк Рибай", description: "Премиум качество мяса" },
  { name: "Лосось на гриле", description: "Свежий лосось с овощами" },
  { name: "Салат Цезарь", description: "Классический рецепт" },
  { name: "Шоколадный фондан", description: "Нежный шоколадный десерт" },
  { name: "Панна-котта", description: "Итальянский десерт" },
  { name: "Коктейли", description: "Авторские коктейли" }
];

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#800020] to-[#600018] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 font-serif">Наше Меню</h1>
            <p className="text-xl opacity-90">Изысканные блюда для ваших торжественных мероприятий</p>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-[#800020]">Наши Блюда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dishesWithPhotos.map((dish, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Photo Placeholder */}
                  <div className="w-full h-64 bg-gradient-to-br from-[#C8A25C] to-[#800020] flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="text-2xl mb-2">📸</p>
                      <p className="text-lg font-semibold">Фото блюда</p>
                      <p className="text-sm opacity-75 mt-2">(Вставьте изображение)</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#800020] mb-2 font-serif">{dish.name}</h3>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Categories Section */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-[#800020]">Меню по Категориям</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold text-[#800020] mb-6 font-serif border-b-2 border-[#C8A25C] pb-3">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{item.name}</p>
                        </div>
                        <p className="text-[#C8A25C] font-bold ml-4">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#800020] to-[#600018] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif">Заинтересованы?</h2>
            <p className="text-xl mb-8 opacity-90">Свяжитесь с нами для обсуждения вашего мероприятия</p>
            <a href="tel:+77001155151" className="inline-block bg-[#C8A25C] text-[#800020] font-bold py-3 px-8 rounded-lg hover:bg-[#B8922C] transition-colors">
              Позвонить
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
