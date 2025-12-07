import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import VideoPlayer from '@/components/VideoPlayer';
import ChatPanel from '@/components/ChatPanel';
import RoomsList from '@/components/RoomsList';
import VideoRecommendations from '@/components/VideoRecommendations';
import UserProfile from '@/components/UserProfile';
import SnowEffect from '@/components/SnowEffect';

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [isWatchingRoom, setIsWatchingRoom] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  const handleJoinRoom = (roomId: string) => {
    setCurrentRoom(roomId);
    setIsWatchingRoom(true);
  };

  const handleLeaveRoom = () => {
    setIsWatchingRoom(false);
    setCurrentRoom(null);
  };

  if (isWatchingRoom) {
    return (
      <div className="min-h-screen bg-background">
        <SnowEffect />
        
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎬</div>
              <div>
                <h1 className="text-xl font-bold">WatchTogether</h1>
                <p className="text-xs text-muted-foreground">Зимний сезон 2024 ❄️</p>
              </div>
            </div>

            <Button variant="outline" onClick={handleLeaveRoom}>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Покинуть комнату
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <VideoPlayer
                videoUrl=""
                title="Новогодняя Классика 🎄"
                onClose={handleLeaveRoom}
              />
            </div>
            <div className="lg:col-span-1 h-[600px]">
              <ChatPanel />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SnowEffect />

      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl sparkle">🎬</div>
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-12">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Icon name="Home" size={18} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="rooms" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              <span className="hidden sm:inline">Комнаты</span>
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <Icon name="Sparkles" size={18} />
              <span className="hidden sm:inline">Рекомендации</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8 animate-fade-in">
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
                    onClick={() => setActiveTab('rooms')}
                  >
                    <Icon name="Plus" size={20} className="mr-2" />
                    Создать комнату
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setActiveTab('rooms')}
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
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    onClick={() => handleJoinRoom(i.toString())}
                    className="cursor-pointer bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-5xl mb-3">
                      {['🎅', '🎄', '⛄'][i - 1]}
                    </div>
                    <h4 className="font-semibold mb-1">
                      {['Новогодняя Классика', 'Зимние Сказки', 'Уютный Вечер'][i - 1]}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Eye" size={14} />
                      <span>{[24, 15, 8][i - 1]} зрителей</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="rooms" className="animate-fade-in">
            <RoomsList onJoinRoom={handleJoinRoom} />
          </TabsContent>

          <TabsContent value="recommendations" className="animate-fade-in">
            <VideoRecommendations />
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <UserProfile />
          </TabsContent>
        </Tabs>
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
