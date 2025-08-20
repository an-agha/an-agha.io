import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <section className='relative main-conatiner h-screen bg-[url(/images/bg-vector.png)] bg-no-repeat bg-right md:bg-left bg-cover px-10 lg:px-[100px]'>
        <div className='flex h-full items-center justify-end'>
            <div className='relative flex flex-col w-full md:w-[50%] lg:w-[60%] gap-y-[38px] pr-6 lg:pr-10 xl:pr-14 z-50'>
                <h1 className=' block text-white text-3xl  lg:text-6xl font-semibold'>
                    Construction Industry <br />
                    <span className='text-primary-light !font-Epilogue'>
                        Sustainability
                    </span> <br />
                    <span className='text-primary-light'>
                        Empowerment&nbsp;   
                    </span>
                     Platform
                </h1>
                <span className='lg:text-xl text-white'>
                    Blockchain-powered technology that empowers the entire construction industry to achieve sustainability excellence while unlocking carbon credit revenue streams across every project lifecycle
                </span>
                <div className='flex flex-col gap-6 md:flex-row'>
                    <Button>
                        Discover More
                    </Button>
                    <Button variant={'outline'}>
                        Schedule Demo
                    </Button>
                </div>
            </div>
            <div className='absolute hidden lg:flex items-center gap-4 bottom-[70px] bg-white left-[100px] lg:left-[20%] p-4 rounded-xl'>
                <div className='w-3 h-3 rounded-full bg-[#10B981]' />
                <span className='text-black font-medium'>
                    Real-time monitoring active
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero