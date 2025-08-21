import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Mobile() {
  return (
    <nav className='w-screen h-screen flex flex-col px-10 py-10 gap-20 fixed top-0 left-0 bg-white z-[100] md:none'>
        <div className='flex justify-between items-center'>
            <Image src="/images/logos/citech-logo.svg" alt='logo' width={50} height={60} draggable={false} />
            <Icon icon='ci:hamburger-md' className='text-primary text-4xl cursor-pointer' />
        </div>
        <div className='w-full flex flex-col items-center gap-10'>
            <Link href="" className='text-primary-textclr'>
                Carbon Credits
            </Link>
            <Link href="" className='text-primary-textclr'>
                Platform
            </Link>
            <Link href="" className='text-primary-textclr'>
                Technology
            </Link>
        </div>
    </nav>
  )
}

export default Mobile