"use client"

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Mobile from './Mobile';
import { Icon } from '@iconify/react/dist/iconify.js';

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
        "w-screen z-100 fixed  px-7 flex flex-1 items-center h-[100px] bg-transparent duration-300",
        scrolled ? "bg-background h-[80px]" : "bg-background md:bg-transparent h-[100px]"
      )}
    // className='w-screen z-100 fixed  px-7 flex flex-1 items-center h-[100px] bg-transparent'
    >
      <div className="hidden h-[60px] md:flex flex-1 items-center justify-between ">
        <Image src="/images/logos/citech-logo.svg" alt='logo' width={50} height={60} draggable={false} />
        <Icon 
        icon='ci:hamburger-md' 
        className='md:hidden text-primary text-4xl cursor-pointer'
         />
        {/* <div className="flex flex-1" /> */}
        <div className="h-[60px] flex gap-[45px] items-center justify-end">
          {
            NavPaths?.map((path,index) => (
              <Link href={path?.path} key={index} className={cn("!w-full text-nowrap", scrolled ? 'text-foreground' : 'text-white')}>
                {path?.title}
              </Link>
            ))
          }
          <Button className='max-w-[182px] w-full px-6 py-2 rounded-full text-white font-medium shadow-lg
         bg-gradient-to-r from-secondary to-primary
         hover:from-secondary-hover hover:to-primary-hover
         transition-all duration-300'>Contact</Button>
        </div>


      </div>
      <Mobile />
    </nav>
  )
}

export default Navbar