'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useMediaQuery } from 'react-responsive';

export default function NavBarTab({ name, link }) {

  const router = useRouter();
  const pathname = usePathname();

  const isCompact = useMediaQuery({ maxWidth: 599 });
    const isMedium = useMediaQuery({ minWidth: 600, maxWidth: 839 });

  return (
    <div className='group relative inline-block cursor-pointer whitespace-nowrap' onClick={() => router.push(link)}>
        <div className={`${isCompact || isMedium ? 'text-md' : 'text-lg'} text-surface-foreground`}>
            {name}
        </div>
        <span className={`absolute left-0 bottom-0 h-0.5 ${pathname === link ? 'w-full' : 'w-0'} bg-primary transition-all duration-500 group-hover:w-full`}></span>
    </div>
  )
}
