import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-4 font-medium text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>
            <Link href="/reservations">Reservations</Link>
          </li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  );
}
