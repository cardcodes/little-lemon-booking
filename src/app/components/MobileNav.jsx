import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image src="/hamburger-icon.svg" height={32} width={32} alt="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuItem>Menu</DropdownMenuItem>
          <Link href="/reservations">
            <DropdownMenuItem>Reservations</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Order Online</DropdownMenuItem>
          <DropdownMenuItem>Login</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
