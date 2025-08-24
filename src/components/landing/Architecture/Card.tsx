import Image from 'next/image'
import React from 'react'
import ModuleCard from "@/components/landing/Card";
import { cn } from '@/lib/utils';
import { ListItem } from './types'


interface CardProps {
  title: string
  list: ListItem[]
  image: string
  alt: string
  className?: string
}

const Card: React.FC<CardProps> = ({ title, list, image, alt, className }) => {
  return (
    <div className={cn("w-full max-w-[980px] flex flex-col items-center gap-6", className)}>
      <Image
        src={image}
        alt={alt}
        width={347}
        height={400}
        className="rounded-lg object-cover"
      />
      <ModuleCard title={title} list={list} />
    </div>
  )
}

export default Card