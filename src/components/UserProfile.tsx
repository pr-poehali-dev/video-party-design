import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface WatchHistory {
  id: string;
  title: string;
  thumbnail: string;
  watchedAt: Date;
  duration: string;
  progress: number;
}

export default function UserProfile() {
  const user = {
    name: 'Александр Иванов',
    username: '@alex_winter',
    avatar: 'АИ',
    joinedDate: 'Декабрь 2024',
    totalWatched: 45,
    hoursWatched: 127
  };

  const watchHistory: WatchHistory[] = [
    {
      id: '1',
      title: 'Один Дома',
      thumbnail: '🎅',
      watchedAt: new Date(Date.now() - 86400000),
      duration: '1:43:20',
      progress: 100
    },
    {
      id: '2',
      title: 'Ирония Судьбы',
      thumbnail: '🎄',
      watchedAt: new Date(Date.now() - 172800000),
      duration: '3:04:15',
      progress: 65
    },
    {
      id: '3',
      title: 'Морозко',
      thumbnail: '⛄',
      watchedAt: new Date(Date.now() - 259200000),
      duration: '1:24:30',
      progress: 100
    },
    {
      id: '4',
      title: 'Реальная Любовь',
      thumbnail: '❤️',
      watchedAt: new Date(Date.now() - 345600000),
      duration: '2:15:45',
      progress: 40
    }
  ];

  const favorites = [
    { id: '1', title: 'Ирония Судьбы', thumbnail: '🎄' },
    { id: '2', title: 'Один Дома', thumbnail: '🎅' },
    { id: '3', title: 'Эльф', thumbnail: '🧝' }
  ];

  const formatDate = (date: Date) => {
    const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Сегодня';
    if (days === 1) return 'Вчера';
    return `${days} дней назад`;
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border p-6">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24 border-4 border-primary/30">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
              {user.avatar}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.username}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <Icon name="Calendar" size={14} className="inline mr-1" />
                  Присоединился: {user.joinedDate}
                </p>
              </div>
              <Button variant="outline">
                <Icon name="Settings" size={18} className="mr-2" />
                Настройки
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="bg-primary/10 border-primary/20 p-4 text-center">
                <div className="text-3xl font-bold text-primary">{user.totalWatched}</div>
                <div className="text-sm text-muted-foreground mt-1">Просмотров</div>
              </Card>
              <Card className="bg-secondary/10 border-secondary/20 p-4 text-center">
                <div className="text-3xl font-bold text-secondary">{user.hoursWatched}</div>
                <div className="text-sm text-muted-foreground mt-1">Часов</div>
              </Card>
              <Card className="bg-accent/10 border-accent/20 p-4 text-center">
                <div className="text-3xl font-bold text-accent">{favorites.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Избранное</div>
              </Card>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">
            <Icon name="History" size={18} className="mr-2" />
            История просмотров
          </TabsTrigger>
          <TabsTrigger value="favorites">
            <Icon name="Heart" size={18} className="mr-2" />
            Избранное
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4 mt-4">
          {watchHistory.map((item) => (
            <Card key={item.id} className="bg-card border-border p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-3xl">
                  {item.thumbnail}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>{formatDate(item.watchedAt)}</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>Прогресс: {item.progress}%</span>
                      {item.progress === 100 && (
                        <Badge variant="outline" className="text-xs">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Просмотрено
                        </Badge>
                      )}
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="icon">
                  <Icon name="Play" size={20} />
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="favorites" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {favorites.map((item) => (
              <Card key={item.id} className="bg-card border-border hover:border-secondary/50 transition-all cursor-pointer group overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                  {item.thumbnail}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
