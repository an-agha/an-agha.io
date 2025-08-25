"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormAlertDialog } from "@/components/form-alert-dialog";
import { Form } from '@/components/ui/form';
import BaseInput from '@/components/ui/formfields/input';
import BaseTextarea from '@/components/ui/formfields/textArea';


import { useFormAlert } from "@/hooks/use-form-alert";
import { Button } from "../ui/button";



const submitBooking = async (formData: z.infer<typeof formSchema>, reset: (...args: any[]) => void) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY?.toString(),
                name: formData?.fullname,
                email: formData?.email,
                message: formData?.description,
                website: formData?.website,
            }),
        });
       

        if (response.status === 200) {
            reset();
            return true
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

//  from schema
const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "Please enter your full name",
    }).max(100, "Full Name should be less than 100 charachters"),
    email: z.string().email().max(100, "Email should be less than 100 charachters"),
    description: z.string().min(5, {
        message: "Please enter a valid messagae"
    }).max(200, "Description should be less than 100 charachters"),
    website: z.string()?.min(1, {
        message: "Please select a slot"
    }).max(50, "Please select a valid timeslot")
});

//  from default values
const defaultValues = {
    fullname: "",
    email: "",
    website: "",
    description: "",

}


function BookingForm() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues
    });
    const { alertState, showSuccess, showError, closeAlert } = useFormAlert()

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const result = await submitBooking(values, () => {
                form.reset();
            });
            if (result) {
                showSuccess("Booking Successful", "Thank you for contacting us. Our team will review your message and get back to you shortly.")
            } else {
                showError("Booking Unsuccessful!!", "Your booking has failed, Please try again.")
            }
        } catch (e) {
            showError("Booking Unsuccessful!!", "Your booking has failed, Please try again.");
            console.error(e);
        }
    }



    return (
        <div className='pb-10 pt-4 w-full flex justify-center'>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex justify-center">
                    <div className="flex flex-col gap-4 w-full">

                        <BaseInput name="fullname" placeholder='Full Name *' />

                        <BaseInput name="email" placeholder='Email Address' />
                        <BaseInput name="website" placeholder='Website' />
                        <BaseTextarea name="description" placeholder='Description' />

                        <Button>Submit</Button>


                    </div>

                    <FormAlertDialog alertState={alertState} onClose={closeAlert} />
                </form>
            </Form>
        </div>
    )
}

export default BookingForm