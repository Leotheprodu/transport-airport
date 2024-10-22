import Link from 'next/link';
import { Palmtree } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Palmtree size={32} />
          <span className="text-2xl font-bold">Costa Rica Travel</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#destinations" className="hover:underline">
                Destinations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
