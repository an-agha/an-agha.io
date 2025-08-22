"use client"

import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function Form() {
    
    const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div>
                <Label htmlFor="user_name">Name</Label>
                <Input id="user_name" name="user_name" placeholder="Your Name" />
            </div>

            <div>
                <Label htmlFor="user_email">Email</Label>
                <Input id="user_email" type="email" name="user_email" placeholder="Your Email" />
            </div>

            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your Message" />
            </div>

            <Button type="submit" className="mt-2">
                Send
            </Button>
        </form>

    )
}

export default Form