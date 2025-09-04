import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const currentCompetitions = [
    {
      id: 1,
      title: "Математическая олимпиада",
      description: "Всероссийская олимпиада по математике для 9-11 классов",
      participants: 2847,
      deadline: "15 октября 2025",
      status: "active",
      category: "математика"
    },
    {
      id: 2,
      title: "Конкурс по физике",
      description: "Региональный конкурс по физике с экспериментальными заданиями",
      participants: 1234,
      deadline: "22 октября 2025",
      status: "registration",
      category: "физика"
    },
    {
      id: 3,
      title: "Литературный конкурс",
      description: "Творческий конкурс эссе и стихотворений для старшеклассников",
      participants: 892,
      deadline: "30 октября 2025",
      status: "upcoming",
      category: "литература"
    }
  ];

  const topStudents = [
    { name: "Анна Петрова", school: "Гимназия №1", points: 2847, trend: "up" },
    { name: "Дмитрий Сидоров", school: "Лицей №15", points: 2756, trend: "up" },
    { name: "Елена Иванова", school: "СОШ №42", points: 2689, trend: "down" },
    { name: "Максим Козлов", school: "Гимназия №7", points: 2634, trend: "up" },
    { name: "София Николаева", school: "Лицей №3", points: 2598, trend: "up" }
  ];

  const topSchools = [
    { name: "Гимназия №1", city: "Москва", avgPoints: 2456, students: 156 },
    { name: "Лицей №15", city: "СПб", avgPoints: 2389, students: 143 },
    { name: "СОШ №42", city: "Казань", avgPoints: 2234, students: 187 },
    { name: "Гимназия №7", city: "Новосибирск", avgPoints: 2198, students: 134 }
  ];

  const recentResults = [
    { competition: "Химическая олимпиада", winner: "Игорь Семенов", school: "Лицей №8", points: 98.5 },
    { competition: "Биологический конкурс", winner: "Мария Попова", school: "Гимназия №12", points: 97.2 },
    { competition: "Историческая викторина", winner: "Артем Волков", school: "СОШ №25", points: 96.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-academic" size={28} />
              <span className="text-xl font-bold text-gray-900">Академик</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-academic transition-colors">Главная</a>
              <a href="#competitions" className="text-gray-700 hover:text-academic transition-colors">Конкурсы</a>
              <a href="#olympiads" className="text-gray-700 hover:text-academic transition-colors">Олимпиады</a>
              <a href="#results" className="text-gray-700 hover:text-academic transition-colors">Результаты</a>
              <a href="#ratings" className="text-gray-700 hover:text-academic transition-colors">Рейтинги</a>
              <a href="#archive" className="text-gray-700 hover:text-academic transition-colors">Архив</a>
              <a href="#contacts" className="text-gray-700 hover:text-academic transition-colors">Контакты</a>
            </div>

            <Button className="bg-academic hover:bg-academic-dark">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Регистрация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Платформа для образовательных
            <span className="text-academic block mt-2">конкурсов и олимпиад</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Участвуйте в олимпиадах, следите за рейтингами, получайте признание за академические достижения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-academic hover:bg-academic-dark">
              <Icon name="Trophy" size={20} className="mr-2" />
              Участвовать в конкурсе
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Посмотреть рейтинги
            </Button>
          </div>
        </div>
      </section>

      {/* Current Competitions */}
      <section id="competitions" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Текущие конкурсы</h2>
            <p className="text-gray-600">Примите участие в активных образовательных соревнованиях</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCompetitions.map((comp) => (
              <Card key={comp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{comp.title}</CardTitle>
                      <Badge 
                        variant={comp.status === 'active' ? 'default' : comp.status === 'registration' ? 'secondary' : 'outline'}
                        className="mt-2"
                      >
                        {comp.status === 'active' ? 'Активен' : comp.status === 'registration' ? 'Регистрация' : 'Скоро'}
                      </Badge>
                    </div>
                    <Icon name="BookOpen" className="text-academic" />
                  </div>
                  <CardDescription className="mt-2">{comp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Участников:</span>
                      <span className="font-medium">{comp.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Дедлайн:</span>
                      <span className="font-medium">{comp.deadline}</span>
                    </div>
                    <Button className="w-full mt-4" variant={comp.status === 'active' ? 'default' : 'outline'}>
                      {comp.status === 'active' ? 'Участвовать' : comp.status === 'registration' ? 'Зарегистрироваться' : 'Уведомить'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Dashboard */}
      <section id="ratings" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Рейтинги и достижения</h2>
            <p className="text-gray-600">Система рейтингов с динамикой развития участников и школ</p>
          </div>

          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="students">Участники</TabsTrigger>
              <TabsTrigger value="schools">Школы</TabsTrigger>
              <TabsTrigger value="results">Результаты</TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" className="mr-2" />
                    Топ участников
                  </CardTitle>
                  <CardDescription>Рейтинг лучших участников по накопленным баллам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topStudents.map((student, index) => (
                      <div key={student.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                              ${index === 0 ? 'bg-yellow-100 text-yellow-800' : 
                                index === 1 ? 'bg-gray-100 text-gray-800' : 
                                index === 2 ? 'bg-orange-100 text-orange-800' : 
                                'bg-blue-100 text-blue-800'}`}>
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.school}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-academic">{student.points}</span>
                          <Icon 
                            name={student.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                            className={student.trend === 'up' ? 'text-success' : 'text-warning'} 
                            size={16}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schools" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="School" className="mr-2" />
                    Рейтинг школ
                  </CardTitle>
                  <CardDescription>Образовательные учреждения по среднему баллу участников</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSchools.map((school, index) => (
                      <div key={school.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                            ${index === 0 ? 'bg-yellow-100 text-yellow-800' : 
                              index === 1 ? 'bg-gray-100 text-gray-800' : 
                              index === 2 ? 'bg-orange-100 text-orange-800' : 
                              'bg-blue-100 text-blue-800'}`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{school.name}</p>
                            <p className="text-sm text-gray-500">{school.city} • {school.students} участников</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-academic">{school.avgPoints}</p>
                          <p className="text-sm text-gray-500">средний балл</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="mr-2" />
                    Последние результаты
                  </CardTitle>
                  <CardDescription>Победители недавно завершившихся конкурсов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Icon name="Trophy" className="text-yellow-500" />
                          <div>
                            <p className="font-medium text-gray-900">{result.competition}</p>
                            <p className="text-sm text-gray-500">{result.winner} • {result.school}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{result.points} баллов</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-academic text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Icon name="Users" className="mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">15,847</div>
              <div className="text-blue-100">Участников</div>
            </div>
            <div>
              <Icon name="School" className="mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">1,247</div>
              <div className="text-blue-100">Школ</div>
            </div>
            <div>
              <Icon name="Trophy" className="mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">342</div>
              <div className="text-blue-100">Конкурсов</div>
            </div>
            <div>
              <Icon name="Award" className="mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold mb-2">23,156</div>
              <div className="text-blue-100">Наград</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} />
                <span className="text-lg font-bold">Академик</span>
              </div>
              <p className="text-gray-400">Платформа для образовательных конкурсов и олимпиад</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Конкурсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Олимпиады</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Результаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Архив</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Участникам</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Регистрация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@academic-platform.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Академик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;