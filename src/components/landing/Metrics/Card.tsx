import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

interface CardItem {
  subTitle: string
  listIcon: string
}

interface CardProps {
  icon: string
  bgColor: string
  textClr: string
  title: string
  list: CardItem[]
}

const Card: React.FC<CardProps> = ({ icon, title, bgColor, textClr, list = [] }) => {
  return (
    <div className='bg-white shadow-md p-8 rounded-2xl flex flex-col gap-4'
    data-aos="fade-up"
          data-aos-duration="2000"
    >
      {/* Top section */}
      <div className='flex flex-col items-center gap-6'>
        <div className={cn('w-[64px] h-[64px] rounded-full flex items-center justify-center', bgColor)}
        >
          <Icon icon={icon} className='text-white text-2xl' />
        </div>
        <h4 className='text-xl lg:text-2xl font-bold text-primary-textclr'
        >
          {title}
        </h4>
      </div>

      {/* List section */}
      <div className='w-full flex flex-col gap-4'>
        {list.map((item, index) => (
          <div
            className='w-full flex items-center gap-x-4'
            key={index}
          >
            <Icon icon={item.listIcon} className='text-primary-light text-2xl min-w-6' />
            <span className='text-secondary-textclr'>
              {item.subTitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card