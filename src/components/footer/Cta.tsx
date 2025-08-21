import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {
  return (
    <section className="main-container bg-[#1A1A1A] px-10 lg:px-[100px]">
        <div className="max-container flex flex-col items-center border-b-2 py-9 border-white/30">
            <div className='w-full flex justify-between items-center'>
               <Image src="/images/logos/citech-logo.svg" alt='logo' width={50} height={60} draggable={false} />
               <div className='flex flex-col items-start md:flex-row gap-[30px]'>
                <Link href="/" className='text-white font-Manrope'>
                    Privacy Policy
                </Link>
                <Link href="/" className='text-white font-Manrope'>
                    Terms
                </Link>
               </div>
            </div>
        </div>
        <div className="max-container flex flex-col items-center gap-2 py-5">
            <span className='text-white text-center'>
                © 2025 CI Tech Sdn Bhd. Generating authenticated carbon credits from construction activities worldwide.
            </span>
            <span className='text-[#9CACA2] text-center'>
                Blockchain-powered carbon credit authentication for the global construction industry.
            </span>
        </div>
    </section>
  )
}

export default Cta