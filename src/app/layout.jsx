import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Little Lemon - Chicago, IL',
  description:
    'Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  openGraph: {
    title: 'Little Lemon - Chicago, IL ',
    description:
      'Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
    images: '/src/app/opengraph-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
