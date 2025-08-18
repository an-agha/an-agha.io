import { Icon } from "@iconify/react";
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
    <section className='main-container px-10 lg:px-[100px] py-[56px]'>
        <div 
        className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
            {
                features.map((item,index) => (
                    <div className="flex items-center gap-6" key={index}>
                        <Icon icon={item.icon} color="#10B981" className="text-xl" />
                        <span className="w-[calc(100%-20px)] text-secondary">
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