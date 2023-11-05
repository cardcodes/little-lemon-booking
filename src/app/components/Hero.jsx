import Layout from '../shared/layout';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { Markazi_Text } from 'next/font/google';
const Markazi = Markazi_Text({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Hero() {
  return (
    <div className="relative w-full ">
      <div className="bg-[#495e57] h-full md:h-4/5 w-full absolute -z-10"></div>
      <Layout>
        <div className="flex justify-center sm:justify-between px-4">
          <div className="text-white max-w-xs md:pr-0">
            <h1
              className={`${Markazi.className} text-4xl md:text-[3.5rem] text-yellow-500 leading-9`}
            >
              Little Lemon
            </h1>
            <h2 className={`${Markazi.className} text-2xl md:text-4xl`}>Chicago</h2>
            <p className="text-xs md:text-[1rem] pt-2 font-normal">
              We are a family owned
              <br /> Mediterranean restaurant,
              <br /> focused on traditional
              <br /> recipes served with a modern
              <br /> twist.
            </p>
            <div className="pt-4">
              <Link href="/reservations">
                <Button className="bg-[#F4CE14] text-black hover:bg-yellow-500 font-bold rounded-2xl">
                  Reserve a Table
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-80 w-72 rounded-lg relative overflow-hidden hidden sm:block">
            <Image src="/hero-img.jpg" alt="" objectFit="cover" fill />
          </div>
        </div>
      </Layout>
    </div>
  );
}
