import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <section className='relative main-conatiner h-screen bg-[url(/images/bg-vector.png)] bg-no-repeat bg-right'>
        <div className='flex h-full items-center justify-end'>
            <Image 
            src="/images/hero-image.png" 
            width={700}
            height={633}
            alt='Ci tech hero image'
            className='absolute bottom-0 left-0 z-10'
            />
            <div className='relative flex flex-col max-w-[760px] gap-y-[38px] pr-6 lg:pr-10 xl:pr-14 z-50'>
                <h1 className='text-white text-6xl'>
                    Construction Industry <br />
                    <span>
                        Sustainability
                    </span> <br />
                    <span>
                        Empowerment
                        <span>
                            Platform
                        </span>
                    </span>
                </h1>
                <span className='text-xl text-white'>
                    Blockchain-powered technology that empowers the entire construction industry to achieve sustainability excellence while unlocking carbon credit revenue streams across every project lifecycle
                </span>
                <div className='flex gap-x-6'>
                    <Button>
                        Discover More
                    </Button>
                    <Button variant={'outline'}>
                        Schedule Demo
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero