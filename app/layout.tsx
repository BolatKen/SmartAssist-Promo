import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Веб-студия | Сайты и боты для бизнеса',
  description: 'Создаем быстрые и недорогие сайты, чат-боты и GPT-интеграции для бизнеса. От 50 000 тенге.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}