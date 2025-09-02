"use client"

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function Hero() {

    const router = useRouter()
    const handleBookConsultation = () => {
        router.push("/contact");
    };

    return (
        <section className='relative main-conatiner h-screen bg-[url(/images/banner.webp)] bg-no-repeat bg-left md:bg-left bg-cover px-10 lg:px-[100px]'>
            <div className='flex h-full items-center justify-end'>
                <div
                    className='relative flex flex-col w-full md:w-[35%] lg:w-[50%] xl:w-[60%] gap-y-[38px] pr-6 lg:pr-10 xl:pr-14 z-50'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className='block text-white text-3xl  lg:text-6xl font-semibold'>
                        Construction Industry <br />
                        <span className='block text-primary-light !font-Epilogue'>
                            Sustainability
                        </span>
                        <span className='block xl:inline text-primary-light'>
                            Empowerment&nbsp;
                        </span>
                        Platform
                    </h1>
                    <span className='lg:text-xl text-white'>
                        Blockchain-powered technology that empowers the entire construction industry to achieve sustainability excellence while unlocking carbon credit revenue streams across every project lifecycle
                    </span>
                    <div className='flex flex-col gap-6 lg:flex-row'>
                        <Button onClick={handleBookConsultation}>
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero