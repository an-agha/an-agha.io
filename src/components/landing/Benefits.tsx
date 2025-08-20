import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'

function Benefits() {

 const list = [
    'Improvement in sustainability ratings and certifications',
    'Access to premium green financing and ESG investment opportunities',
    'Enhanced property values through verified sustainability credentials',
    'Continuous carbon credit revenue generation throughout building lifecycle',
    'Market leadership positioning in sustainable development'
  ]

  return (
    <section className='main-container py-[86px]'>
      <div className="max-container flex flex-col items-center gap-10">
        <h2 className='text-3xl lg:text-4xl text-primary-textclr text-center font-bold'>
          <span className='text-primary'>
            Stakeholder <br />
            Empowerment&nbsp;
          </span>
          Benefits
        </h2>
        <div className='flex flex-col items-center md:flex-row md:justify-between gap-10'>
          <Image
            src='/images/benefits.png'
            width={450}
            height={450}
            alt="benefits section image"
            className='w-[300px] lg:w-[450px]'
          />
          <Image
          src="/images/stick.svg"
          width={2}
          height={200}
          alt='decorative image' 
          className='hidden md:block'
          />
          <div className='w-max max-w-[670px] bg-primary-foreground flex flex-col gap-6 py-6 px-4 rounded-[20px]'>
            <h4 className='text-lg lg:text-2xl font-medium text-primary-textclr'>
              Project Developers & Owners - Strategic Empowerment
            </h4>
            <ul className='flex flex-col gap-3'>
              {list?.map((item, index) => (
                <li className='flex items-center gap-4' key={index}>
                  <Icon icon='streamline:graph-solid' color="#10B981" className="text-xl" />
                  <span className='text-[#3C4B42]'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits