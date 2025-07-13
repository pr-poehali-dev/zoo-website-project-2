import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const animals = [
    {
      id: 1,
      name: "Африканские львы",
      description: "Царь зверей в нашем просторном вольере",
      image: "/img/a142d12b-141f-452e-969c-04d136ed452e.jpg",
      zone: "Зона хищников",
      feedingTime: "14:00",
    },
    {
      id: 2,
      name: "Слоны",
      description: "Умные гиганты из Африки",
      image:
        "https://v3.fal.media/files/elephant/t3nqzebR0IOm8Iy8V5Loh_output.png",
      zone: "Зона гигантов",
      feedingTime: "12:00",
    },
    {
      id: 3,
      name: "Пингвины",
      description: "Забавные птицы из Антарктики",
      image: "/placeholder.svg",
      zone: "Северная зона",
      feedingTime: "16:00",
    },
    {
      id: 4,
      name: "Жирафы",
      description: "Самые высокие животные планеты",
      image: "/placeholder.svg",
      zone: "Зона Африки",
      feedingTime: "11:00",
    },
  ];

  const mapZones = [
    { id: 1, name: "Зона хищников", x: "20%", y: "30%", color: "bg-red-400" },
    { id: 2, name: "Зона гигантов", x: "60%", y: "25%", color: "bg-blue-400" },
    { id: 3, name: "Северная зона", x: "40%", y: "60%", color: "bg-cyan-400" },
    { id: 4, name: "Зона Африки", x: "70%", y: "70%", color: "bg-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 font-open-sans">
      {/* Навигация */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🦁</div>
              <h1 className="text-2xl font-bold font-rubik text-primary">
                Zoo Park
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#animals"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Наши животные
              </a>
              <a
                href="#map"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Карта
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Ticket" size={16} className="mr-2" />
              Билеты
            </Button>
          </div>
        </div>
      </nav>

      {/* Героическая секция */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-bold font-rubik text-gray-900 mb-6">
                Добро пожаловать в
                <span className="text-primary block">Zoo Park</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Откройте для себя удивительный мир дикой природы! Более 200
                видов животных ждут встречи с вами в нашем современном зоопарке.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                >
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Интерактивная карта
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Расписание
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/img/a142d12b-141f-452e-969c-04d136ed452e.jpg"
                  alt="Львы в зоопарке"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm">Видов животных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Zap", number: "200+", label: "Видов животных" },
              { icon: "Users", number: "500K+", label: "Посетителей в год" },
              { icon: "Award", number: "15", label: "Лет работы" },
              { icon: "Heart", number: "50+", label: "Программ защиты" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold font-rubik text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел животных */}
      <section
        id="animals"
        className="py-20 bg-gradient-to-br from-orange-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold font-rubik text-gray-900 mb-6">
              Наши удивительные животные
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Познакомьтесь с нашими обитателями и узнайте их увлекательные
              истории
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {animals.map((animal) => (
              <Card
                key={animal.id}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {animal.feedingTime}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold font-rubik text-gray-900 mb-2">
                    {animal.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{animal.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {animal.zone}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80"
                    >
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Интерактивная карта */}
      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold font-rubik text-gray-900 mb-6">
              Интерактивная карта зоопарка
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Нажмите на зоны, чтобы узнать больше о наших обитателях
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 h-96 overflow-hidden">
                <img
                  src="/img/c2853fa2-7c4e-489b-a95a-c3ee99fb9e60.jpg"
                  alt="Карта зоопарка"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80"
                />
                {mapZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`absolute w-6 h-6 ${zone.color} rounded-full cursor-pointer transform hover:scale-150 transition-all duration-300 shadow-lg animate-pulse hover:animate-none`}
                    style={{ left: zone.x, top: zone.y }}
                    title={zone.name}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                      {zone.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-rubik text-gray-900 mb-6">
                Зоны зоопарка
              </h4>
              {mapZones.map((zone) => (
                <div
                  key={zone.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className={`w-4 h-4 ${zone.color} rounded-full`}></div>
                  <span className="font-medium text-gray-900">{zone.name}</span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-gray-400 ml-auto"
                  />
                </div>
              ))}

              <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Info" size={20} className="text-primary" />
                  <h5 className="font-bold text-primary">
                    Полезная информация
                  </h5>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Кормление животных: каждые 2 часа</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>Экскурсии начинаются у главного входа</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Camera" size={16} className="text-primary" />
                    <span>Фотосессии разрешены во всех зонах</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🦁</div>
                <h6 className="text-xl font-bold font-rubik">Zoo Park</h6>
              </div>
              <p className="text-gray-400">
                Современный зоопарк, где каждое животное чувствует себя как дома
              </p>
            </div>

            <div>
              <h6 className="font-bold mb-4">Информация</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Животные
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    События
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Образование
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold mb-4">Посещение</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Билеты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Часы работы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как добраться
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Правила посещения
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-bold mb-4">Контакты</h6>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@zoopark.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Зоологическая, 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zoo Park. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
