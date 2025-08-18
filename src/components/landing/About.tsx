import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className='main-container py-10'>
        <div className="max-container flex flex-col gap-10 md:flex-row justify-between items-center">
            <div className='flex flex-col max-w-[640px] gap-6'>
                <h2 className='text-4xl lg:text-5xl leading-14 font-bold text-primary-textclr'>
                    Empowering 
                    <span className='text-primary'> Sustainable</span>  <br />
                    Transformation
                </h2>
                <span className='text-secondary-textclr'>
                    The CITECH Platform revolutionizes how the entire construction industry ecosystem approaches sustainability. From initial design through end-of-life asset recovery, our blockchain-powered technology empowers every stakeholder to make informed decisions, optimize resources, and generate tangible value from sustainable practices.
                </span>
            </div>
            <Image src="/images/about-image.png"
            width={450}
            height={450}
            alt='CI tech about section image' 
            />
        </div>
    </section>
  )
}

export default About