import type { Metadata } from 'next';
import { Inter, Montserrat, Forum } from 'next/font/google'; // Importando as fontes corretamente
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const forum = Forum({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-forum',
});

export const metadata: Metadata = {
  title: 'Grifo Hub - Transformação Digital',
  description: 'Hub de inovação e transformação digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${montserrat.variable} ${forum.variable}`}>
        {children}
      </body>
    </html>
  );
}
