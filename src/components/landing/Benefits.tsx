"use client"

import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function Benefits() {
    const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [
      Autoplay({
        delay: 2500, 
        stopOnInteraction: false, 
        stopOnMouseEnter: true,   
      }),
    ]
  )

    const benefits = [
        {
            image: '/images/benefits/developement.png',
            title: 'Project Developers & Owners - Strategic Empowerment',
            list: [
                'Improvement in sustainability ratings and certifications',
                'Access to premium green financing and ESG investment opportunities',
                'Enhanced property values through verified sustainability credentials',
                'Continuous carbon credit revenue generation throughout building lifecycle',
                'Market leadership positioning in sustainable development'
            ]
        },
        {
            image: '/images/benefits/construction.png',
            title: 'Construction Companies & Contractors - Operational Empowerment',
            list: [
                'Integrated sustainability planning from design through completion',
                'New revenue streams through carbon credit monetization',
                'Competitive differentiation in sustainable construction market',
                'Automated compliance reducing administrative burden',
            ]
        },
        {
            image: '/images/benefits/material-supplier.png',
            title: 'Material Suppliers & Manufacturers - Market Empowerment',
            list: [
                'Platform for showcasing verified sustainability credentials',
                'Direct integration with high-value sustainable construction projects',
                'Premium pricing opportunities for verified sustainable materials',
                'Access to recycling marketplace opportunities',
            ]
        },
        {
            image: '/images/benefits/waste-management.png',
            title: 'Waste Management & Recycling - Value Empowerment',
            list: [
                'Technology-enabled recycling monitoring',
                'Enhanced value extraction from waste streams',
                'Carbon credit revenue sharing opportunities',
                'Direct connection to construction demand pipeline',
            ]
        },
        {
            image: '/images/benefits/facility-management.png',
            title: 'Facility Managers & Operators - Performance Empowerment',
            list: [
                'Continuous sustainability monitoring and optimization',
                'Automated building certification renewal processes',
                'Long-term carbon credit generation from operations',
            ]
        },
    ]

    return (
        <section className='main-container py-[86px] px-10 lg:px-[100px]'>
            <div className="max-container flex flex-col items-center gap-10">
                <h2 className='text-3xl lg:text-4xl text-primary-textclr text-center font-bold'>
                    <span className='text-primary'>
                        Stakeholder <br />
                        Empowerment&nbsp;
                    </span>
                    Benefits
                </h2>
                <div className="embla w-full overflow-hidden" ref={emblaRef}>
                    <div className="w-full embla__container flex gap-10">
                        {benefits.map((item, index) => (
                            <div className="embla__slide w-full flex flex-col items-center md:flex-row md:justify-between gap-10 cursor-grab" key={index}>
                                
                                <Image
                                    src={item.image}
                                    width={450}
                                    height={450}
                                    alt="benefits section image"
                                    className="w-[300px] lg:w-[450px]"
                                />
                                <Image
                                    src="/images/stick.svg"
                                    width={2}
                                    height={200}
                                    alt="decorative image"
                                    className="hidden md:block"
                                />
                                <div className="w-full md:w-max max-w-[670px] bg-primary-foreground flex flex-col gap-6 py-6 px-4 rounded-[20px]">
                                    <h4 className="text-lg lg:text-2xl font-medium text-primary-textclr">
                                        {item.title}
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                        {item.list?.map((listItem, i) => (
                                            <li className="flex items-center gap-4" key={i}>
                                                <Icon icon="streamline:graph-solid" color="#10B981" className="text-xl" />
                                                <span className="text-[#3C4B42]">{listItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Benefits