'use client'

import { usePathname } from 'next/navigation';
import NavBarTab from './NavBarTab';

export default function NavBar() {
  const pathname = usePathname();

  // Check if the current path is either '/eula' or '/policy'
  if (pathname === '/eula' || pathname === '/policy') {
    return null; // Hide the NavBar by returning null
  }

  return (
    <div className='flex items-center justify-evenly w-full'>
      <NavBarTab name={"Home"} link={'/'} />
      <NavBarTab name={"About us"} link={'/about'} />
      <NavBarTab name={"Contact"} link={'/contact'} />
      <NavBarTab name={"Features"} link={'/features'} />
    </div>
  );
}
