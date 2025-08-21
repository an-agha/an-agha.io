import Image from 'next/image'
import React from 'react'

function WhyUs() {

    const features = [
        {
            image: '/images/why-us/img1.svg',
            alt: 'Beyond Monitoring image',
            title: 'Beyond Monitoring',
            content: 'Active optimization and intelligent recommendations',
        },
         {
            image: '/images/why-us/img2.svg',
            alt: 'Beyond Compliance image',
            title: 'Beyond Compliance',
            content: 'Strategic sustainability advantage and market differentiation',
        },
         {
            image: '/images/why-us/img3.svg',
            alt: 'Beyond Cost image',
            title: 'Beyond Cost',
            content: 'Revenue generation through carbon credit monetization',
        },
         {
            image: '/images/why-us/img4.svg',
            alt: 'Beyond Individual Orgs image',
            title: 'Beyond Individual Orgs',
            content: 'Ecosystem-wide transformation and collaboration',
        },

    ]

  return (
    <section className='main-container relative px-10 lg:px-[100px]'>
        <div className="max-container flex flex-col items-center gap-10 lg:gap-y-[66px]">
            <h3 className='w-full text-3xl lg:text-4xl font-bold text-primary-textclr max-w-[833px]'>
                Why Empowerment Matters
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[833px] gap-6 lg:gap-10'>
                {
                    features.map((item,index) => (
                        <div 
                        className='flex gap-5 items-start'
                        key={index}
                        >
                            <Image 
                            src={item.image}
                            width={90}
                            height={90}
                            alt={item.alt}
                            className='w-[90px] h-[90px] object-cover rounded-full'
                             />
                             <div className='flex flex-col gap-1'>
                                <h4 className='text-lg text-primary-textclr font-bold'>
                                    {item.title}
                                </h4>
                                <span className='text-secondary-textclr leading-[20px]'>
                                    {item.content}
                                </span>
                             </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Image 
        src="/images/about-vector.png"
        width={274}
        height={274}
        alt='decorative image'
        className='absolute left-0 max-h-[274px] object-contain object-left bottom-0'
         />
    </section>
  )
}

export default WhyUs