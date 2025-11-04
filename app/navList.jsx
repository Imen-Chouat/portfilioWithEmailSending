'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();
    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'CONTACT', path: '/contact' },
    ];
    return (
        <ul className="mt-10">
            {navItems.map((item)=>(
                <li key={item.name} className={`relative  mb-4 text-lg font-medium `}>
                    <Link href={item.path} className={`relative inline-block transition-all duration-100 ease-initial ${pathname === item.path ? 'text-white font-bold' : 'text-gray-300 hover:text-white'} `}>
                    <span className="z-1 self-center" >{item.name}</span>
                    {pathname === item.path && (
                        <span className="absolute -left-1 self-center w-[calc(100%+8px)] h-1.5 bg-gradient-to-r from-purple-500 to-orange-500 -z-1"></span>
                    )}
                    </Link>

                </li>
            ))}
        </ul>

    );
}