import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
}

export default function VideoRecommendations() {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Один Дома',
      duration: '1:43:20',
      views: '2.3М',
      thumbnail: '🎅',
      category: 'Комедия'
    },
    {
      id: '2',
      title: 'Ирония Судьбы',
      duration: '3:04:15',
      views: '5.1М',
      thumbnail: '🎄',
      category: 'Классика'
    },
    {
      id: '3',
      title: 'Морозко',
      duration: '1:24:30',
      views: '1.8М',
      thumbnail: '⛄',
      category: 'Сказка'
    },
    {
      id: '4',
      title: 'Реальная Любовь',
      duration: '2:15:45',
      views: '3.2М',
      thumbnail: '❤️',
      category: 'Романтика'
    },
    {
      id: '5',
      title: 'Снежная Королева',
      duration: '1:10:20',
      views: '890К',
      thumbnail: '👑',
      category: 'Мультфильм'
    },
    {
      id: '6',
      title: 'Эльф',
      duration: '1:37:50',
      views: '1.5М',
      thumbnail: '🧝',
      category: 'Семейный'
    },
    {
      id: '7',
      title: 'Гарри Поттер',
      duration: '2:32:10',
      views: '4.7М',
      thumbnail: '⚡',
      category: 'Фэнтези'
    },
    {
      id: '8',
      title: 'Чародеи',
      duration: '2:23:00',
      views: '2.1М',
      thumbnail: '🎭',
      category: 'Музыкальный'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-accent sparkle" />
            Рекомендации
          </h2>
          <p className="text-muted-foreground mt-1">Лучшие фильмы для новогоднего настроения</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Популярное
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Clock" size={16} className="mr-2" />
            Новинки
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card 
            key={video.id}
            className="bg-card border-border hover:border-secondary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
              {video.thumbnail}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                {video.duration}
              </div>
              <Badge className="absolute top-2 left-2 bg-secondary/90 text-secondary-foreground text-xs">
                {video.category}
              </Badge>
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
  );
}
