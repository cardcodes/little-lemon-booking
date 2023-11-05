import Layout from '../shared/layout';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-between flex-wrap">
          <Link href="/">
            <Image src="/Logo.svg" width={200} height={200} alt="logo" />
          </Link>
          <Nav />
        </div>
      </Layout>
    </>
  );
}
