import React from 'react'
import Card from '../Architecture/Card'
import Image from 'next/image'

function index() {

const visionDetails = [
    {
      image: '/images/vision/block-chain.png',
      alt: 'Blockchain Empowerment Network',
      title: 'Blockchain Empowerment Network',
      list: [
        { content: 'Immutable sustainability credential for authentication' },
        { content: 'Automated carbon credit transactions' },
        { content: 'Transparent multi-party collaboration protocols' },
        { content: 'Secure data sharing across ecosystem participants' },
      ],
      className: 'flex flex-col md:flex-row  md:justify-between'
    },
    {
      image: '/images/vision/iot.png',
      alt: 'IoT Empowerment Layer',
      title: 'IoT Empowerment Layer',
      list: [
        { content: 'Real-time environmental and resource monitoring' },
        { content: 'Equipment efficiency tracking and optimization alerts' },
        { content: 'Automated data collection from construction sites' },
        { content: 'Remote monitoring and control capabilities' },
      ],
      className: 'flex flex-col md:flex-row-reverse  md:justify-between'
    },
     {
      image: '/images/vision/network.png',
      alt: 'Blockchain Empowerment Network',
      title: 'Blockchain Empowerment Network',
      list: [
        { content: 'Immutable sustainability credential for authentication' },
        { content: 'Automated carbon credit transactions' },
        { content: 'Transparent multi-party collaboration protocols' },
        { content: 'Secure data sharing across ecosystem participants' },
      ],
      className: 'flex flex-col md:flex-row  md:justify-between'
    },
  ]

  return (
    <section className='relative main-container px-10 lg:px-[100px] py-[100px]'>
        <div className='max-container flex flex-col items-center gap-5'>
            <h2 className='text-3xl lg:text-[48px] text-primary-textclr font-bold text-center'>
                <span className='text-primary'>
                    Vision:&nbsp;
                </span> 
                 Industry-Wide <br /> Empowerment
            </h2>
            <div className='w-full flex flex-col items-center gap-20'>
          {
            visionDetails.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                alt={item.alt}
                title={item.title}
                list={item.list}
                className={item.className}
              />
            ))
          }
        </div>
        </div>
        <Image 
              src="/images/architecture/bg-vector.png"
              width={237}
              height={216}
              alt='decorative image'
              className='absolute w-[100px] lg:w-[200px] right-0 top-[25px]' />
    </section>
  )
}

export default index