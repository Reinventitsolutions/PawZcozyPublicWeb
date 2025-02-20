'use client'

import { usePathname } from 'next/navigation';

export default function Footer({ children }) {

  const pathname = usePathname();

  return (

    pathname === '/eula' || pathname === '/policy' ? (
      <div></div>
    ) : (
      <div className="w-full flex items-center justify-center bg-surface-surfaceContainerHighest">
        <div className={`${pathname === '/' ? 'w-3/5' : 'extra-large:w-3/4 large:w-4/5'} flex flex-col h-full justify-between py-8 gap-6`}>
          {children}
        </div>
      </div>
    )
  );
}


