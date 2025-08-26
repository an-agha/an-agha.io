import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import ContactForm from "./form";

function Hero() {
  const contact = [
    {
      icon: 'mi:call',
      content: '+603 2011 7991',
      path: 'tel:+603 2011 7991',
    },
    {
      icon: 'mdi:internet',
      content: 'https://citech.my',
      path: 'https://citech.my',
    },
    {
      icon: 'material-symbols:mail-outline-rounded',
      content: 'info@citech.my ',
      path: 'mailto:info@citech.my ',
    },
    {
      icon: 'tdesign:location',
      content:
        'CI TECH Sdn. Bhd. 202501009538 (1610952-K) 138 B, Jalan Kasah, Medan Damansara, 50490 Kuala Lumpur, MALAYSIA',
      path: '',
    }
  ]

  return (
    <section className='max-container min-h-screen flex flex-col md:flex-row md:justify-between py-20'>
      <div className='w-full md:w-1/2 flex flex-col gap-10 lg:gap-[50px] max-w-[470px]'>
        <div className='w-full flex flex-col gap-[18px]'>
          <h1 className='text-3xl lg:text-[48px] font-bold text-primary-textclr'>
            Contact Us
          </h1>
          <span className='text-base lg:text-xl text-primary-textclr'>
            We are committed to processing the information in order to contact you and talk about your project.
          </span>
        </div>
        <div className="flex flex-col gap-x-2 gap-y-5">
          {contact.map((item, index) => (
            <Link href={item?.path} key={index} className="flex gap-2 items-center">
              {item.icon && <Icon icon={item.icon} className='text-primary-light text-2xl w-[24px]' />}
              <span className="w-[calc(100%-24px)] break-words text-xl text-primary-textclr">
                {item.content}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Hero