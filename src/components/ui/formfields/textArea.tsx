"use client"

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { useFormContext } from 'react-hook-form';
import { Textarea } from '../textarea';

interface InputProps {
    name: string;
    label?: string;
    desc?: string;
    placeholder?: string;
    className?: string;
}

const RHFInput: React.FC<InputProps> = ({ name,label, desc, placeholder, className }) => {
    const { control } = useFormContext();

    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Textarea className={`p-7 rounded ${className}`} placeholder={placeholder} {...field} />
                        </FormControl>
                        {
                            desc &&
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                        }
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default RHFInput