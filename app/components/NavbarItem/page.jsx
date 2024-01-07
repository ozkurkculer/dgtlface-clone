"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarItem({ name, direction }) {
    const path = usePathname();
    
    return (
        <Link href={ '/' + direction}>
            <div className={((path === '/' + direction) ? "text-primary border-b-2 border-primary" : "text-secondary") + " py-3"}>
                {name}
            </div>
        </Link>
    );
};