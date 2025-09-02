import React from 'react'
import Card from './Card'
import Image from 'next/image'

function Architecture() {

   const CardDetails = [
    {
      image: '/images/architecture/block-chain.png',
      alt: 'building image',
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
      image: '/images/architecture/iot.png',
      alt: 'building image',
      title: 'IoT Empowerment Layer',
      list: [
        { content: 'Real-time environmental and resource monitoring' },
        { content: 'Equipment efficiency tracking and optimization alerts' },
        { content: 'Automated data collection from construction sites' },
        { content: 'Remote monitoring and control capabilities' },
      ],
      className: 'flex flex-col md:flex-row-reverse  md:justify-between'
    }
  ]


  return (
    <section className='relative main-container  px-10 lg:px-[100px] pt-10 lg:pt-[160px]'
    id="technology"
    >
      <div className="max-container w-full flex flex-col items-center gap-10">
        <h2 className='text-3xl lg:text-4xl text-primary-textclr font-bold text-center'
          data-aos="fade-up"
          data-aos-duration="1000"
          >
          Technology Empowerment <br />
          Architecture
        </h2>
        <div className='w-full flex flex-col items-center gap-20' 
        >
          {
            CardDetails.map((item, index) => (
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
      className='absolute w-[100px] lg:w-[200px] right-0 top-[-80px]'
      data-aos="fade-up"
      data-aos-duration="1000"
       />
    </section>
  )
}

export default Architecture