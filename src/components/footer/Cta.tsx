"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {


  return (
    <section className='main-container px-10 lg:px-[100px] bg-[#EAF8EF]'>
        <div className="max-container flex flex-col items-center border-b-2 py-9 border-[#B5D0C0]">
            <div className='w-full flex justify-between items-center'>
               <Image src="/images/logos/citech-logo.svg" alt='logo' width={50} height={60} draggable={false} />
               <div className='flex flex-col items-start md:flex-row gap-[30px]'>
                <Link href="/" className='text-[#062412] font-Manrope'>
                    Privacy Policy
                </Link>
                <Link href="/" className='text-[#062412] font-Manrope'>
                    Terms
                </Link>
               </div>
            </div>
        </div>
        <div className="max-container flex flex-col items-center gap-2 py-5">
            <span className='text-[#062412] text-center'>
                © 2025 CI Tech Sdn Bhd. Generating authenticated carbon credits from construction activities worldwide.
            </span>
            <span className='text-[#0A3E1F] text-center'>
                Blockchain-powered carbon credit authentication for the global construction industry.
            </span>
        </div>
    </section>
  )
}

export default Cta