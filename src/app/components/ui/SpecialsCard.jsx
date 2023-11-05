import Image from 'next/image';
import { Markazi_Text } from 'next/font/google';
const Markazi = Markazi_Text({ weight: '500', subsets: ['latin'], display: 'swap' });

export default function SpecialsCard({ img, title, price, description }) {
  return (
    <div className="pt-2 px-1 md:px-0 md:pt-0">
      <div className="w-52 min-h-[26rem] h-full rounded-t-lg bg-[#EDEFEE]">
        <div className="b relative w-full h-2/5 rounded-t-lg overflow-hidden">
          <Image src={`/specials/${img}`} fill objectFit="cover" alt="" />
        </div>
        <div className="flex flex-col px-4 pt-5 gap-8">
          <div
            className={`${Markazi.className}  leading-none flex justify-between w-full items-center`}
          >
            <p className="text-xl">{title}</p>
            <p className="text-lg text-[#EE9972]">{price}</p>
          </div>
          <div className="desc min-h-[80px]">
            <p className={`${Markazi.className} leading-none text-[#495E57]`}>{description}</p>
          </div>
          <div className="footer flex items-center gap-2">
            <p className="text-xs font-bold">Order a delivery</p>
            <Image src="/moped.svg" height={20} width={20} alt="moped" />
          </div>
        </div>
      </div>
    </div>
  );
}

// className="flex flex-col px-4 pt-5 gap-8"
