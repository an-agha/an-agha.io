import Image from 'next/image'
import React from 'react'
import Card from "@/components/landing/Modules/Card";

function index() {

    const moduleLeft = [
        {
            title: 'Supply Chain Empowerment Hub',
            list: [
                'Verified sustainable supplier marketplace and scoring',
                'Real-time material tracking with blockchain transparency',
                'Circular economy monitoring engine (waste-to-resource)',
                'Supplier sustainability performance benchmarking'
            ]
        },
        {
            title: 'Carbon Revenue Empowerment',
            list: [
                'Comprehensive carbon accounting across all operations',
                'Automated carbon credit calculation and verification',
                'Strategic carbon portfolio management and optimization',
                'Integration with global carbon trading platforms',
                'ROI maximization for every sustainability initiative'
            ]
        },
    ]

    const moduleRight = [
        {
            title: 'Operational Excellence Empowerment',
            list: [
                'Real-time material utilization monitoring',
                'Energy and water monitoring with insights',
                'Health, safety, and environmental performance integration',
                'Continuous improvement through data-driven insights'
            ]
        },
        {
            title: 'Compliance Empowerment Engine',
            list: [
                'Automated certification pathway management',
                'Audit-ready documentation with blockchain verification',
                'Proactive policy change notifications and adaptation',
            ]
        },
    ]

    return (
        <section className='main-container px-10 lg:px-[100px] py-20'>
            <div className="max-container flex flex-col items-center py-[100px] gap-8">
                <h2 className='text-4xl lg:text-5xl text-center leading-[50px] font-bold text-primary-textclr'>
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
                        src="/images/module-img.jpg"
                        width={333}
                        height={458}
                        alt="module section image"
                        className='w-[333px] h-[458px] rounded-full object-cover'
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