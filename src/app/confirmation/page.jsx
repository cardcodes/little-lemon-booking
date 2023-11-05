import Layout from '../shared/layout';
import { Markazi_Text } from 'next/font/google';
import Image from 'next/image';

const Markazi = Markazi_Text({ weight: '500', subsets: ['latin'], display: 'swap' });

export default function Confirmation() {
  return (
    <div className="h-screen">
      <div className="bg-[url('/restaurant.png')] bg-center bg-cover h-1/4 flex items-center justify-center">
        <p className={`${Markazi.className} leading-none text-white text-6xl`}>Chicago, IL</p>
      </div>
      <Layout>
        <div className="">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <h1 className={`${Markazi.className} leading-none text-[#495E57] text-6xl`}>
                Reservation Confirmed!
              </h1>
              <Image src="/check.svg" height={32} width={32} alt="check" />
            </div>
            <p className="text-xl">Please check your email and text messages.</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
