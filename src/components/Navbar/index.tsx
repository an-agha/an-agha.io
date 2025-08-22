"use client"

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Mobile from './Mobile';
import { Icon } from '@iconify/react/dist/iconify.js';
import { MobileMenu } from './mobile-menu';

type NavPathTypes = {
  title: string,
  path: string
}

const NavPaths: NavPathTypes[] = [
  {
    title: "Carbon Credits",
    path: "/"
  },
  {
    title: "Platform",
    path: "/"
  }, {
    title: "Technology",
    path: "/"
  }
];


function Navbar() {
  const [scrolled, setScrolled] = useState(false); // ✅ state for scroll status

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={cn(
        "w-screen h-[60px] md:h-[100px] z-100 fixed  px-7 flex flex-1 items-center bg-transparent duration-300",
        scrolled ? "bg-background h-[80px]" : "bg-background md:bg-transparent h-[60px] md:h-[100px]"
      )}
    // className='w-screen z-100 fixed  px-7 flex flex-1 items-center h-[100px] bg-transparent'
    >
      <div className="md:flex flex-1 items-center justify-between ">
        <Link href="/">
          <Image 
        src="/images/logos/citech-logo.svg" 
        alt='logo' 
        width={50} 
        height={60} 
        draggable={false} 
        className='h-[40px] md:h-[60px]'
        />
        </Link>

        {/* <div className="flex flex-1" /> */}
        <div className="hidden lg:flex h-[60px] gap-[45px] items-center justify-end ">
          {
            NavPaths?.map((path, index) => (
              <Link href={path?.path} key={index} className={cn("!w-full text-nowrap", scrolled ? 'text-foreground' : 'text-white')}>
                {path?.title}
              </Link>
            ))
          }
         <Link href="/contact">
          <Button className='min-w-[182px] w-full px-6 py-2 rounded-full text-white font-medium shadow-lg
         bg-gradient-to-r from-secondary to-primary
         hover:from-secondary-hover hover:to-primary-hover
         transition-all duration-300'>Contact</Button>
         </Link>
        </div>


      </div>

      <MobileMenu logo={
        <Link href="/">
          <Image
            src="/images/logos/citech-logo.svg"
            alt="nomic legal pllc logo"
            width={40}
            height={40}
            priority
          />
        </Link>
      } />
    </nav>
  )
}

export default Navbar