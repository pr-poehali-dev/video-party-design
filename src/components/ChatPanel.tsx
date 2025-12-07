import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: Date;
  avatar: string;
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'Анна',
      text: 'Какой уютный фильм! ❄️',
      timestamp: new Date(Date.now() - 300000),
      avatar: 'АН'
    },
    {
      id: '2',
      user: 'Дмитрий',
      text: 'Согласен! Идеально для новогоднего настроения 🎄',
      timestamp: new Date(Date.now() - 180000),
      avatar: 'ДМ'
    },
    {
      id: '3',
      user: 'Елена',
      text: 'Кто-нибудь принес мандарины? 🍊',
      timestamp: new Date(Date.now() - 60000),
      avatar: 'ЕЛ'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [viewers, setViewers] = useState(12);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: 'Вы',
        text: newMessage,
        timestamp: new Date(),
        avatar: 'ВЫ'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className="bg-card border-border h-full flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="MessageCircle" size={20} className="text-primary" />
          <h3 className="font-semibold">Чат комнаты</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <span>{viewers} зрителей</span>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3 animate-fade-in">
              <Avatar className="w-8 h-8 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                  {message.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">{message.user}</span>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-sm mt-1">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Напишите сообщение..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="icon" className="bg-primary hover:bg-primary/90">
            <Icon name="Send" size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
