import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { ListItem } from '@/components/landing/Architecture/types'


interface CardProps {
  title: string
  list: ListItem[]
}

const Card: React.FC<CardProps> = ({ title, list }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h4 className='text-lg lg:text-2xl font-medium text-primary-textclr'>
        {title}
      </h4>
      <ul className='flex flex-col gap-3'>
        {list?.map((item, index) => (
          <li className='flex items-center gap-4' key={index}>
            <Icon icon='octicon:graph-16' color="#10B981" className="text-xl" />
            <span className='text-secondary-textclr'>
              {item.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card