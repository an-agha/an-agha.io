"use client"

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { useFormContext } from 'react-hook-form';
import { Input } from '../input';
import { cn } from '@/lib/utils';

interface InputProps {
    name: string;
    desc?: string;
    placeholder?: string;
    className?: string;
    label?: string;
}

const RHFInput: React.FC<InputProps> = ({ name, desc, placeholder, className, label }) => {
    const { control } = useFormContext();

    return (
        <>
            <FormField
                control={control}

                name={name}
                render={({ field, fieldState: { error } }) => (
                    <FormItem className={cn(['relative w-full', error && 'mb-4'])}>
                        {label && <FormLabel>{label}</FormLabel>}
                        <FormControl>
                            <Input className={`p-7 rounded-lg ${className}`} placeholder={placeholder} {...field} />
                        </FormControl>
                        {
                            desc &&
                            <FormDescription>
                                {desc}
                            </FormDescription>
                        }
                        <FormMessage className='absolute top-full pt-[2px]' />
                    </FormItem>
                )}
            />
        </>
    )
}

export default RHFInput