import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeView, setActiveView] = useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎬</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                WatchTogether
              </h1>
              <p className="text-sm text-muted-foreground">Смотрим вместе этой зимой ❄️</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={18} className="mr-2" />
              Уведомления
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 justify-center">
          <Button 
            variant={activeView === 'home' ? 'default' : 'outline'}
            onClick={() => setActiveView('home')}
          >
            <Icon name="Home" size={18} className="mr-2" />
            Главная
          </Button>
          <Button 
            variant={activeView === 'rooms' ? 'default' : 'outline'}
            onClick={() => setActiveView('rooms')}
          >
            <Icon name="Users" size={18} className="mr-2" />
            Комнаты
          </Button>
          <Button 
            variant={activeView === 'recommendations' ? 'default' : 'outline'}
            onClick={() => setActiveView('recommendations')}
          >
            <Icon name="Sparkles" size={18} className="mr-2" />
            Рекомендации
          </Button>
        </div>

        {activeView === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-6xl">🎄</div>
                <div className="absolute top-20 right-20 text-5xl">⛄</div>
                <div className="absolute bottom-10 left-1/4 text-4xl">🎁</div>
                <div className="absolute bottom-20 right-1/3 text-5xl">❄️</div>
              </div>

              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Смотрите видео <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    вместе с друзьями
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Создавайте комнаты, приглашайте друзей и наслаждайтесь совместным просмотром 
                  любимых фильмов в новогоднюю ночь! 🎅
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                    onClick={() => setActiveView('rooms')}
                  >
                    <Icon name="Plus" size={20} className="mr-2" />
                    Создать комнату
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setActiveView('rooms')}
                  >
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти комнату
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                Популярные комнаты
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { emoji: '🎅', name: 'Новогодняя Классика', viewers: 24 },
                  { emoji: '🎄', name: 'Зимние Сказки', viewers: 15 },
                  { emoji: '⛄', name: 'Уютный Вечер', viewers: 8 }
                ].map((room, i) => (
                  <Card
                    key={i}
                    className="bg-card border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-5xl mb-3">
                      {room.emoji}
                    </div>
                    <h4 className="font-semibold mb-1">{room.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Eye" size={14} />
                      <span>{room.viewers} зрителей</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeView === 'rooms' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Users" size={28} className="text-primary" />
                  Активные комнаты
                </h2>
                <p className="text-muted-foreground mt-1">Присоединяйтесь к просмотру вместе с друзьями</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={18} className="mr-2" />
                Создать комнату
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: '1', name: 'Новогодняя Классика 🎄', viewers: 24, video: 'Один Дома', emoji: '🎅', host: 'Мария' },
                { id: '2', name: 'Зимние Сказки ❄️', viewers: 15, video: 'Морозко', emoji: '⛄', host: 'Александр' },
                { id: '3', name: 'Уютный Вечер 🕯️', viewers: 8, video: 'Реальная Любовь', emoji: '🎁', host: 'Екатерина' },
                { id: '4', name: 'Семейный Просмотр 👨‍👩‍👧‍👦', viewers: 32, video: 'Ирония Судьбы', emoji: '🎄', host: 'Дмитрий' },
                { id: '5', name: 'Мультики для всех 🎬', viewers: 19, video: 'Снежная Королева', emoji: '👑', host: 'Анна' },
                { id: '6', name: 'Ночной Сеанс 🌙', viewers: 6, video: 'Гарри Поттер', emoji: '⚡', host: 'Иван' }
              ].map((room) => (
                <Card key={room.id} className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                    {room.emoji}
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold animate-pulse">
                      LIVE
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{room.video}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{room.host}</span>
                      <div className="flex items-center gap-1 text-secondary">
                        <Icon name="Eye" size={16} />
                        <span className="text-sm font-medium">{room.viewers}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="LogIn" size={18} className="mr-2" />
                      Присоединиться
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeView === 'recommendations' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Sparkles" size={28} className="text-accent" />
                  Рекомендации
                </h2>
                <p className="text-muted-foreground mt-1">Лучшие фильмы для новогоднего настроения</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: 'Один Дома', duration: '1:43:20', views: '2.3М', emoji: '🎅', category: 'Комедия' },
                { title: 'Ирония Судьбы', duration: '3:04:15', views: '5.1М', emoji: '🎄', category: 'Классика' },
                { title: 'Морозко', duration: '1:24:30', views: '1.8М', emoji: '⛄', category: 'Сказка' },
                { title: 'Реальная Любовь', duration: '2:15:45', views: '3.2М', emoji: '❤️', category: 'Романтика' },
                { title: 'Снежная Королева', duration: '1:10:20', views: '890К', emoji: '👑', category: 'Мультфильм' },
                { title: 'Эльф', duration: '1:37:50', views: '1.5М', emoji: '🧝', category: 'Семейный' },
                { title: 'Гарри Поттер', duration: '2:32:10', views: '4.7М', emoji: '⚡', category: 'Фэнтези' },
                { title: 'Чародеи', duration: '2:23:00', views: '2.1М', emoji: '🎭', category: 'Музыкальный' }
              ].map((video, i) => (
                <Card key={i} className="bg-card border-border hover:border-secondary/50 transition-all cursor-pointer group">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-7xl">
                    {video.emoji}
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-secondary/90 text-secondary-foreground px-2 py-1 rounded text-xs font-semibold">
                      {video.category}
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        <span>{video.views}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Icon name="Heart" size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🎄</span>
              <span className="text-sm">© 2024 WatchTogether. Счастливого Нового Года!</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Помощь</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
