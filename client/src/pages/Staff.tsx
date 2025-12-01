import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const staffMembers = [
  {
    id: 1,
    name: "Шеф-повар",
    position: "Главный повар",
    description: "Опытный шеф-повар с 15+ годами опыта в приготовлении изысканных блюд",
    image: "/placeholder-staff.jpg"
  },
  {
    id: 2,
    name: "Су-шеф",
    position: "Заместитель шефа",
    description: "Специалист по подготовке блюд и контролю качества",
    image: "/placeholder-staff.jpg"
  },
  {
    id: 3,
    name: "Администратор",
    position: "Управляющий залом",
    description: "Координирует работу персонала и обслуживание гостей",
    image: "/placeholder-staff.jpg"
  },
  {
    id: 4,
    name: "Метрдотель",
    position: "Старший официант",
    description: "Отвечает за качество обслуживания и комфорт гостей",
    image: "/placeholder-staff.jpg"
  },
  {
    id: 5,
    name: "Повар",
    position: "Кулинар",
    description: "Подготовка и приготовление блюд согласно меню",
    image: "/placeholder-staff.jpg"
  },
  {
    id: 6,
    name: "Официант",
    position: "Обслуживающий персонал",
    description: "Профессиональное обслуживание гостей во время мероприятий",
    image: "/placeholder-staff.jpg"
  }
];

export default function Staff() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#800020] to-[#600018] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 font-serif">Наша Команда</h1>
            <p className="text-xl opacity-90">Профессионалы, создающие незабываемые мероприятия</p>
          </div>
        </section>

        {/* Staff Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Staff Photo Placeholder */}
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center border-b-4 border-[#C8A25C]">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Фото сотрудника</p>
                      <p className="text-gray-300 text-xs mt-2">(Вставьте изображение)</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#800020] mb-2 font-serif">{member.name}</h3>
                    <p className="text-[#C8A25C] font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-[#800020]">Наши Ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#C8A25C] mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-3 text-[#800020]">Профессионализм</h3>
                <p className="text-gray-600">Каждый член команды - специалист своего дела с многолетним опытом</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#C8A25C] mb-4">♥</div>
                <h3 className="text-2xl font-bold mb-3 text-[#800020]">Внимание к Деталям</h3>
                <p className="text-gray-600">Мы тщательно следим за каждой деталью вашего мероприятия</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-[#C8A25C] mb-4">★</div>
                <h3 className="text-2xl font-bold mb-3 text-[#800020]">Качество</h3>
                <p className="text-gray-600">Высочайший стандарт обслуживания на каждом мероприятии</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
