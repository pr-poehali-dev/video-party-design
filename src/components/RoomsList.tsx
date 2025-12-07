import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Room {
  id: string;
  name: string;
  viewers: number;
  videoTitle: string;
  thumbnail: string;
  isLive: boolean;
  host: string;
}

interface RoomsListProps {
  onJoinRoom: (roomId: string) => void;
}

export default function RoomsList({ onJoinRoom }: RoomsListProps) {
  const rooms: Room[] = [
    {
      id: '1',
      name: 'Новогодняя Классика 🎄',
      viewers: 24,
      videoTitle: 'Один Дома',
      thumbnail: '🎅',
      isLive: true,
      host: 'Мария'
    },
    {
      id: '2',
      name: 'Зимние Сказки ❄️',
      viewers: 15,
      videoTitle: 'Морозко',
      thumbnail: '⛄',
      isLive: true,
      host: 'Александр'
    },
    {
      id: '3',
      name: 'Уютный Вечер 🕯️',
      viewers: 8,
      videoTitle: 'Реальная Любовь',
      thumbnail: '🎁',
      isLive: true,
      host: 'Екатерина'
    },
    {
      id: '4',
      name: 'Семейный Просмотр 👨‍👩‍👧‍👦',
      viewers: 32,
      videoTitle: 'Ирония Судьбы',
      thumbnail: '🎄',
      isLive: true,
      host: 'Дмитрий'
    },
    {
      id: '5',
      name: 'Мультики для всех 🎬',
      viewers: 19,
      videoTitle: 'Снежная Королева',
      thumbnail: '👑',
      isLive: true,
      host: 'Анна'
    },
    {
      id: '6',
      name: 'Ночной Сеанс 🌙',
      viewers: 6,
      videoTitle: 'Гарри Поттер',
      thumbnail: '⚡',
      isLive: true,
      host: 'Иван'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
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
        {rooms.map((room) => (
          <Card 
            key={room.id} 
            className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
            onClick={() => onJoinRoom(room.id)}
          >
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
              {room.thumbnail}
              {room.isLive && (
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground animate-pulse">
                  <Icon name="Radio" size={12} className="mr-1" />
                  LIVE
                </Badge>
              )}
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{room.videoTitle}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6 border border-primary/30">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {room.host[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{room.host}</span>
                </div>

                <div className="flex items-center gap-1 text-secondary">
                  <Icon name="Eye" size={16} />
                  <span className="text-sm font-medium">{room.viewers}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all"
                onClick={() => onJoinRoom(room.id)}
              >
                <Icon name="LogIn" size={18} className="mr-2" />
                Присоединиться
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
