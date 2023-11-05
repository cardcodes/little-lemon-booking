import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Little Lemon - Chicago, IL',
  description:
    'Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  openGraph: {
    title: 'Little Lemon - Chicago, IL ',
    description:
      'Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
