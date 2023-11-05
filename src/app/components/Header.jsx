import Layout from '../shared/layout';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-between px-4 md:px-0 md:flex-wrap ">
          <MobileNav />
          <Link href="/">
            <Image src="/Logo.svg" width={200} height={200} alt="logo" />
          </Link>
          <Nav />
          <div className="lg:hidden">
            <Image src="/Basket.svg" width={32} height={32} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
}
