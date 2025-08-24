import Image from 'next/image'
import React from 'react'
import Card from "@/components/landing/Modules/Card";

function index() {

    const moduleLeft = [
        {
            title: 'Supply Chain Empowerment Hub',
            icon: '',
            list: [
                {
                    icon: 'tabler:brand-shopee',
                    content: 'Verified sustainable supplier marketplace and scoring',
                },
                {
                    icon: 'tabler:truck-delivery',
                    content: 'Real-time material tracking with blockchain transparency',
                },
                {
                    icon: 'tabler:device-analytics',
                    content: 'Circular economy monitoring engine (waste-to-resource)',
                },
                {
                    icon: 'tabler:graph',
                    content: 'Supplier sustainability performance benchmarking',
                },
            ]
        },
        {
            title: 'Carbon Revenue Empowerment',
            icon: '',
            list: [
                {
                    icon: 'akar-icons:leaf',
                    content: 'Comprehensive carbon accounting across all operations',
                },
                {
                    icon: 'proicons:calculator',
                    content: 'Automated carbon credit calculation and verification',
                },
                {
                    icon: 'carbon:settings-check',
                    content: 'Strategic carbon portfolio management and optimization',
                },
                {
                    icon: 'octicon:graph-16',
                    content: 'Integration with global carbon trading platforms',
                },
                {
                    icon: 'tabler:chart-treemap',
                    content: 'ROI maximization for every sustainability initiative',
                },
            ]
        },
    ]

    const moduleRight = [
        {
            title: 'Operational Excellence Empowerment',
            list: [
                {
                    icon: 'tabler:device-desktop',
                    content: 'Real-time material utilization monitoring',
                },
                {
                    icon: 'tabler:chart-line',
                    content: 'Energy and water monitoring with insights',
                },
                {
                    icon: 'tabler:chart-dots',
                    content: 'Health, safety, and environmental performance integration',
                },
                {
                    icon: 'tabler:chart-pie-3',
                    content: 'Continuous improvement through data-driven insights',
                },
            ]
        },
        {
            title: 'Compliance Empowerment Engine',
            list: [
                {
                    icon: 'tabler:file-horizontal',
                    content: 'Automated certification pathway management',
                },
                {
                    icon: 'pepicons-pop:file',
                    content: 'Audit-ready documentation with blockchain verification',
                },
                {
                    icon: 'tabler:file-stack',
                    content: 'Proactive policy change notifications and adaptation',
                },
            ]
        },
    ]

    return (
        <section className='main-container px-10 lg:px-[100px] py-20'
        >
            <div className="max-container flex flex-col items-center py-[100px] gap-8">
                <h2 className='text-4xl lg:text-5xl text-center leading-[50px] font-bold text-primary-textclr'
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                    Core
                    <span className='text-4xl lg:text-5xl text-primary'> Empowerment</span>
                    <br />
                    Modules
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
                    <div className='grid grid-cols-1 gap-10'>
                        {
                            moduleLeft.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={item.title}
                                        list={item.list}
                                    />
                                )
                            })
                        }
                    </div>
                    <Image
                        src="/images/module-img.png"
                        width={333}
                        height={458}
                        alt="module section image"
                        className='w-[333px] h-[458px] rounded-full object-cover'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />
                    <div>
                        <div className='grid grid-cols-1 gap-10'>
                        {
                            moduleRight.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={item.title}
                                        list={item.list}
                                    />
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index