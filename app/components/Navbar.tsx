"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();

    const linkStyle = (path: string) =>
        pathname === path
        ? 'text-white font-semibold text-sm'
        : 'text-gray-300 hover:text-white text-sm';

    return (
        <nav className="w-full bg-[#1a1a1a] px-12 py-6 flex items-center justify-between">
        <div className="flex justify-center items-center gap-2 text-white text-xl font-bold">
            <Image
                src="/images/logo.png"
                alt="Hero Image"
                width={30}
                height={30}
                className=""
            />
            <Image
                src="/images/noryn.png"
                alt="Hero Image"
                width={70}
                height={70}
                className=""
            />
        </div>
        <ul className="flex gap-6">
            <li className="bg-[#282828] px-8 py-2 rounded-full">
            <Link href="/work" className={linkStyle('/work')}>
                Work
            </Link>
            </li>
            <li className="bg-[#282828] px-8 py-2 rounded-full">
            <Link href="/about" className={linkStyle('/about')}>
                About
            </Link>
            </li>
            <li className="bg-[#282828] px-8 py-2 rounded-full">
            <Link href="/blog" className={linkStyle('/contact')}>
                Blog
            </Link>
            </li>
        </ul>
        </nav>
    );
}
