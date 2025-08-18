import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <section className='main-container px-10 lg:px-[100px] py-20'>
        <div className="max-container flex flex-col items-center py-[100px] gap-4">
            <h2 className='text-4xl lg:text-5xl text-center leading-[50px] font-bold text-primary-textclr'>
                Core 
                <span className='text-4xl lg:text-5xl text-primary'> Empowerment</span> 
                <br />
                Modules
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div>

                </div>
                <Image 
                src="/images/module-img.jpg" 
                width={333}
                height={458}
                alt="module section image"
                className='w-[333px] h-[458px] rounded-full object-cover'
                />
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default index