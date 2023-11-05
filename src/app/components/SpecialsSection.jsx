import Layout from '../shared/layout';
import { Button } from './ui/button';
import { Markazi_Text } from 'next/font/google';
const Markazi = Markazi_Text({ weight: '400', subsets: ['latin'], display: 'swap' });
import SpecialsCard from './ui/SpecialsCard';

export default function SpecialsSection() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className={`${Markazi.className} pb-4 text-4xl sm:text-[3.5rem]`}>
            This Weeks Specials!
          </p>
          <Button className="bg-[#F4CE14] text-black hover:bg-yellow-500 h-14 w-48 font-bold rounded-2xl">
            Online Menu
          </Button>
        </div>
        <div className="flex justify-center sm:justify-between pt-8 flex-wrap px-4">
          <SpecialsCard
            img="greek-salad.jpg"
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta
            cheese, garnished with crunchy garlic and rosemary crutons."
          />
          <SpecialsCard
            img="bruchetta.svg"
            title="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned 
            with salt and olive oil."
          />
          <SpecialsCard
            img="lemon-dessert.jpg"
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced 
            and is as authentic as can be imagined."
          />
        </div>
      </div>
    </Layout>
  );
}
