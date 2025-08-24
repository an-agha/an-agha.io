import React from 'react'

function page() {

    const content = [
        'Nomik Legal, PLLC is committed to protecting your privacy. We may collect personal information that you voluntarily provide through our website—such as your name, email, phone number, or message content—when you fill out a contact form, sign up for updates, or communicate with us. We use this information only to respond to inquiries, send occasional legal updates or newsletters if you opt in, and manage our professional relationship. We do not sell, rent, or share your personal information with unaffiliated third parties for marketing purposes.',
        'Our website may use cookies and third-party tools, such as Google Analytics or advertising services, to collect non-identifiable usage data, including IP address, browser type, pages visited, and time spent on the site. These tools help us understand how visitors use the site and may serve tailored ads on other platforms. You can disable cookies in your browser settings. If you provide a phone number, we may send SMS messages related to legal services, deadlines, or document requests. Message and data rates may apply. You may reply STOP at any time to opt out. We take reasonable steps to protect your data, but cannot guarantee absolute security. By using this website, you consent to this policy. We may revise it periodically, and updated versions will be posted on this page.',
    ]

  return (
     <main className="main-container pt-[60px] lg:pt-[100px]">
          <section className='w-full max-w-[580px] min-h-screen flex flex-col gap-y-6 py-10 lg:py-[100px]'>
            <h1 className='text-3xl lg:text-[48px] font-bold text-primary-textclr'>
              Privacy Policy
            </h1>
            <div className='w-full flex flex-col gap-y-4'>
             {
              content.map((paragraph,index) => (
                <p className='text-sm lg:text-base text-secondary-textclr'>
                  {paragraph}
                </p>
              ))
             }
            </div>
          </section>
        </main>
  )
}

export default page