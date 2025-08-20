import React from 'react'
import Card from './Card'

function index() {

    const metrics = [
        {
            title: 'Environmental Impact',
            icon: 'bxs:leaf',
            bgColor: 'bg-[#10B981]',
            textClr: 'text-[#10B981]',
            cardItem: [
                {
                    content: '85%',
                    subTitle: 'Waste reduction'
                },
                 {
                    content: '70%',
                    subTitle: 'Carbon footprint decrease'
                },
            ]
        },
         {
            title: 'Economic Impact',
            icon: 'bxs--dollar-circle',
            bgColor: 'bg-[#059669]',
            textClr: 'text-[#059669]',
            cardItem: [
                {
                    content: '$2.5M',
                    subTitle: 'Carbon credit revenue'
                },
                 {
                    content: '25%',
                    subTitle: 'Property value increase'
                },
            ]
        },
         {
            title: 'Innovation Impact',
            icon: 'bxs:leaf',
            bgColor: 'bg-[#10B981]',
            textClr: 'text-[#10B981]',
            cardItem: [
                {
                    content: '90%',
                    subTitle: 'Faster decision-making'
                },
                 {
                    content: '60%',
                    subTitle: 'Collaboration improvement'
                },
            ]
        },
    ]


  return (
   <section className='main-container px-10 lg:px-[100px] bg-[#F9FAFB] py-10 lg:py-20'>
    <div className='max-container flex flex-col items-center gap-16'>
        <h3 className='text-3xl lg:text-4xl text-primary-textclr font-bold'>
            Empowerment Impact Metrics
        </h3>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-[1216px]'>
            {
                metrics.map((item, index) => (
                    <Card 
                    title={item.title}
                    icon={item.icon}
                    bgColor={item.bgColor}
                    textClr={item.textClr}
                    list={item.cardItem} 
                    key={index}
                      />
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default index