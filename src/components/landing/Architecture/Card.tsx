import Image from 'next/image'
import React from 'react'
import ModuleCard from "@/components/landing/Modules/Card";
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  image: string
  alt: string
  title: string
  list: string[]
  className: string
}

const Card: React.FC<ModuleCardProps> = ({ image, alt, title, list, className }) => {
  return (
    <div className={cn("w-full max-w-[980px] flex flex-col items-center gap-6", className)}>
      <Image
        src={image}
        width={347}
        height={400}
        alt={alt}
        className="rounded-lg object-cover"
      />
      <ModuleCard title={title} list={list} />
    </div>
  )
}

export default Card