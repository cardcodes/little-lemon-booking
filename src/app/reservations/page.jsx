import Image from 'next/image';
import Layout from '../shared/layout';
import { Markazi_Text } from 'next/font/google';
import ReservationForm from '../components/ReservationForm';
const Markazi = Markazi_Text({ weight: '500', subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Little Lemon - Reservations',
  description: '',
};

export default function Reservations() {
  return (
    <div className="h-screen">
      <div className="bg-[url('/restaurant.png')] bg-center bg-cover h-1/4 flex items-center justify-center">
        <p className={`${Markazi.className} leading-none text-white text-6xl`}>Chicago, IL</p>
      </div>
      <Layout>
        <div className="flex flex-col items-center">
          <h1 className={`${Markazi.className} leading-none text-[#495E57] text-5xl`}>
            Reserve A Table
          </h1>
          <div className="">
            <ReservationForm />
          </div>
        </div>
      </Layout>
    </div>
  );
}
