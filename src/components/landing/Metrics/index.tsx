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
                    listIcon: 'ri:leaf-line',
                    subTitle: 'Empower proper disposal of construction waste'
                },
                {
                    listIcon: 'ri:leaf-line',
                    subTitle: 'Decrease in carbon footprint across project lifecycles'
                },
                {
                    listIcon: 'ri:leaf-line',
                    subTitle: 'Verified waste recycling economy contribution with measurable impact'
                },
                {
                    listIcon: 'ri:leaf-line',
                    subTitle: 'Alignment with UN Sustainable Development Goals'
                },
            ]
        },
         {
            title: 'Economic Impact',
            icon: 'fa:dollar',
            bgColor: 'bg-[#059669]',
            textClr: 'text-[#059669]',
            cardItem: [
                {
                    listIcon: 'mdi:dollar',
                    subTitle: 'Carbon credit revenue generation'
                },
                 {
                    listIcon: 'mdi:dollar',
                    subTitle: 'Enhanced property values through sustainability premiums'
                },
                 {
                    listIcon: 'mdi:dollar',
                    subTitle: 'Access to green financing at preferential rates'
                },
                 {
                    listIcon: 'mdi:dollar',
                    subTitle: 'Reduced insurance and operational risk premiums'
                },
            ]
        },
         {
            title: 'Innovation Empowerment',
            icon: 'fa7-solid:lightbulb',
            bgColor: 'bg-[#10B981]',
            textClr: 'text-[#10B981]',
            cardItem: [
                {
                    listIcon: 'mage:light-bulb',
                    subTitle: 'Real-time decision-making with actionable insights'
                },
                {
                    listIcon: 'mage:light-bulb',
                    subTitle: 'Automated optimization recommendations and implementation'
                },
                {
                    listIcon: 'mage:light-bulb',
                    subTitle: 'Streamlined multi-stakeholder collaboration'
                },
                {
                    listIcon: 'mage:light-bulb',
                    subTitle: 'Accelerated adoption of emerging sustainability technologies'
                },

            ]
        },
    ]


  return (
   <section className='main-container px-10 lg:px-[100px] bg-[#E7F0EB] py-10 lg:py-20'
   id="metrics"
   >
    <div className='max-container flex flex-col items-center gap-16'>
        <h3 className='text-3xl lg:text-4xl text-primary-textclr font-bold'
        >
            Empowerment Impact Metrics
        </h3>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1216px]'>
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