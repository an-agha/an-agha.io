import { Icon } from "@iconify/react";
import Image from "next/image";
import React from 'react'

function Features() {

    const features = [
        {
            icon: 'streamline:graph-solid',
            content: 'Transform sustainability challenges into profitable opportunities',
        },
        {
            icon: 'fa6-solid:users',
            content: 'Empower every stakeholder with intelligent monitoring',
        },
        {
            icon: 'streamline:graph-solid',
            content: 'Generate verified carbon credits from sustainable practices',
        },
        {
            icon: 'fa6-solid:users',
            content: 'Close the loop with measurable ROI on sustainability investments',
        },
    ]

  return (
    <section className='relative main-container px-10 lg:px-[100px] py-[56px]'>
        <Image 
        src="/images/side-vector.png"
        width={112}
        height={225}
        alt="decorative image"
         className="absolute hidden lg:block left-0 top-[-50px]"
         />
        <div 
        className="lg:absolute lg:top-[-50px] w-full max-w-[1034px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 "
        >
            {
                features.map((item,index) => (
                    <div className="flex flex-col items-center gap-6 shadow-md bg-white py-6 px-2.3 rounded-2xl" key={index}>
                        <Icon icon={item.icon} color="#10B981" className="text-xl" />
                        <span className="w-[calc(100%-20px)] text-secondary text-center">
                            {item.content}
                        </span>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Features