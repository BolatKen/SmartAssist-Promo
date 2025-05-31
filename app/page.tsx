"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  Mail,
  Phone,
  CheckCircle2,
  Clock,
  Zap,
  Menu,
  X,
  ChevronDown,
  Star,
  Timer,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 45, seconds: 22 }; // Reset timer
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleContactClick = (platform: string) => {
    switch (platform) {
      case 'telegram':
        window.open('https://t.me/yourusername', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/77XXXXXXXXX', '_blank');
        break;
      case 'email':
        window.open('mailto:your@email.com', '_blank');
        break;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Анна Петрова",
      company: "Кафе «Уютное»",
      text: "Сделали отличный сайт для нашего кафе всего за 3 дня. Теперь у нас в 2 раза больше онлайн-заказов!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
    },
    {
      name: "Марат Сулейменов",
      company: "Автосервис «Профи»",
      text: "GPT-бот помогает отвечать на вопросы клиентов 24/7. Очень доволен результатом и ценой.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150"
    },
    {
      name: "Елена Ким",
      company: "Салон красоты «Элегант»",
      text: "Спасибо за красивый сайт и бота для записи! Клиенты в восторге от простоты использования.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150"
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">WebStudio</div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground/80 hover:text-primary transition">Портфолио</button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-primary transition">Цены</button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition">Контакты</button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => handleContactClick('telegram')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Связаться
              </Button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition">Услуги</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-foreground/80 hover:text-primary transition">Портфолио</button>
                <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-primary transition">Цены</button>
                <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition">Контакты</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Быстрые и недорогие сайты и ИИ-боты для бизнеса
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Простые решения для малого бизнеса — от 50 000₸
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => handleContactClick('telegram')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Заказать в Telegram
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection('portfolio')}
                  >
                    Смотреть портфолио
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                {/* Countdown Timer */}
                <div className="mt-8 p-4 bg-accent/10 rounded-lg inline-block">
                  <p className="text-accent font-semibold mb-2">🔥 Скидка 20% действует еще:</p>
                  <div className="text-2xl font-mono">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Презентация WebStudio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Почему мы?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                  <Zap className="h-10 w-10 mb-4 mx-auto text-primary" />
                  <h3 className="font-semibold mb-2">Быстро</h3>
                  <p className="text-muted-foreground">Создаем проекты за 2-5 дней</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/10">
                  <CheckCircle2 className="h-10 w-10 mb-4 mx-auto text-accent" />
                  <h3 className="font-semibold mb-2">Качественно</h3>
                  <p className="text-muted-foreground">Современные технологии и дизайн</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                  <Clock className="h-10 w-10 mb-4 mx-auto text-primary" />
                  <h3 className="font-semibold mb-2">Доступно</h3>
                  <p className="text-muted-foreground">Честные цены без переплат</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-secondary/30">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="websites">Сайты</TabsTrigger>
                <TabsTrigger value="bots">Боты</TabsTrigger>
              </TabsList>
              <TabsContent value="websites" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                    <h3 className="font-semibold mb-4">Сайт-визитка</h3>
                    <p className="text-2xl font-bold text-primary mb-4">от 50 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />До 5 страниц</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Адаптивный дизайн</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Базовое SEO</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent">
                    <h3 className="font-semibold mb-4">Лендинг</h3>
                    <p className="text-2xl font-bold text-accent mb-4">от 80 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />Продающая страница</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />Формы захвата</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />Аналитика</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                    <h3 className="font-semibold mb-4">Интернет-магазин</h3>
                    <p className="text-2xl font-bold text-primary mb-4">от 150 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Каталог товаров</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Корзина и оплата</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />CRM-интеграция</li>
                    </ul>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="bots" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                    <h3 className="font-semibold mb-4">Telegram бот</h3>
                    <p className="text-2xl font-bold text-primary mb-4">от 60 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Автоответчик</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Меню и команды</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Уведомления</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent">
                    <h3 className="font-semibold mb-4">GPT-бот</h3>
                    <p className="text-2xl font-bold text-accent mb-4">от 100 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />AI-ассистент</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />Обучение на данных</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" />Интеграция API</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                    <h3 className="font-semibold mb-4">WhatsApp бот</h3>
                    <p className="text-2xl font-bold text-primary mb-4">от 80 000₸</p>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Бизнес-аккаунт</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />Рассылки</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" />CRM-интеграция</li>
                    </ul>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Заявка</h3>
                <p className="text-muted-foreground">Вы оставляете заявку через Telegram или WhatsApp</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Обсуждение</h3>
                <p className="text-muted-foreground">Уточняем детали и согласовываем техзадание</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Разработка</h3>
                <p className="text-muted-foreground">Создаем проект за 2-5 дней</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Запуск</h3>
                <p className="text-muted-foreground">Тестируем и запускаем готовый проект</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800"
                    alt="Проект 1"
                    className="w-full h-48 object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <p className="text-white">Подробнее</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Сайт ресторана</h3>
                  <p className="text-muted-foreground">Лендинг для локального ресторана с меню и онлайн-бронированием</p>
                </div>
              </Card>
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
                    alt="Проект 2"
                    className="w-full h-48 object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <p className="text-white">Подробнее</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">AI-бот для клиники</h3>
                  <p className="text-muted-foreground">Чат-бот для записи на прием и консультаций</p>
                </div>
              </Card>
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800"
                    alt="Проект 3"
                    className="w-full h-48 object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <p className="text-white">Подробнее</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Магазин одежды</h3>
                  <p className="text-muted-foreground">Интернет-магазин с каталогом и системой заказов</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Сколько времени занимает создание сайта/бота?</AccordionTrigger>
                  <AccordionContent>
                    Обычно мы создаем проекты за 2-5 рабочих дней. Точные сроки зависят от сложности проекта и согласовываются индивидуально.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какая примерная стоимость?</AccordionTrigger>
                  <AccordionContent>
                    Цены начинаются от 50 000₸ за сайт-визитку и от 60 000₸ за бота. Финальная стоимость зависит от функционала и сложности проекта.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Можно ли сделать индивидуальный дизайн?</AccordionTrigger>
                  <AccordionContent>
                    Да, мы создаем уникальный дизайн под ваш бренд и пожелания. Также у нас есть готовые шаблоны, которые можно адаптировать.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Как происходит оплата и поддержка?</AccordionTrigger>
                  <AccordionContent>
                    Работаем по предоплате 50%. После запуска проекта предоставляем бесплатную поддержку в течение месяца и помогаем с размещением.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/30">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleContactClick('telegram')}
                className="bg-white hover:bg-primary/5"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleContactClick('whatsapp')}
                className="bg-white hover:bg-primary/5"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleContactClick('email')}
                className="bg-white hover:bg-primary/5"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">WebStudio</h3>
                <p className="text-primary-foreground/80">
                  Создаем современные сайты и чат-боты для вашего бизнеса
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-white/80">Сайты</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-white/80">Боты</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-white/80">GPT-интеграции</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Информация</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white/80">О нас</a></li>
                  <li><a href="#" className="hover:text-white/80">Портфолио</a></li>
                  <li><a href="#" className="hover:text-white/80">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleContactClick('telegram')}
                      className="hover:text-white/80 flex items-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Telegram
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleContactClick('whatsapp')}
                      className="hover:text-white/80 flex items-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleContactClick('email')}
                      className="hover:text-white/80 flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
              <p>© 2024 WebStudio. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}