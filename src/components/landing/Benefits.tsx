"use client"

import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';


function Benefits() {


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
                <h2 className='text-3xl lg:text-4xl text-primary-textclr text-center font-bold'
                data-aos="fade-up"
            data-aos-duration="1000"
                >
                    <span className='text-primary'>
                        Stakeholder <br />
                        Empowerment&nbsp;
                    </span>
                    Benefits
                </h2>
                <Swiper
                    direction={'vertical'}
                    autoplay={{
                        delay: 4500,
                        // disableOnInteraction: true
                    }}

                    scrollbar={{
                        hide: false,
                        enabled: true,
                        snapOnRelease: true,
                        verticalClass: "max-h-[250px]"
                    }}
                    modules={[Scrollbar, Autoplay]}
                    className="max-h-[450px] md:max-h-[500px] lg:max-h-[500px] relative"
                >
                    {benefits.map((item, index) => (
                        <SwiperSlide key={index} className=''>
                            <div className="w-full !flex flex-1 h-[450px] md:h-[500px] lg:h-[500px] flex-col md:flex-row lg:flex-row !justify-center md:justify-between gap-10 cursor-grab items-center pl-5 md:pl-0 lg:pl-0" >

                                <Image
                                    src={item.image}
                                    width={450}
                                    height={450}
                                    alt="benefits section image"
                                    className="hidden !h-[450px] md:flex lg:flex"
                                />
                                <div className='w-[50px] h-full hidden md:flex lg:flex' />
                                <div className="!w-full md:w-max lg:max-w-[670px] md:max-w-[400px] bg-primary-foreground flex flex-col gap-6 py-6 px-4 rounded-[20px]">
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
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default Benefits