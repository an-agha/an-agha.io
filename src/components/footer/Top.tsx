"use client"

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function Top() {

    const router = useRouter()
    const handleBookConsultation = () => {
        router.push("/contact");
    };
    return (
        <div className='main-container bg-[url(/images/Banner-vector.webp)] py-10 px-10 lg:px-[100px]'>
            <div className="max-container !max-w-[986px] flex flex-col items-center gap-5">
                <h2 className='text-3xl lg:text-[46px] text-white font-semibold text-center max-w-[711px]'>
                    Empower your organization to lead the construction industry&apos;s sustainability transformation
                </h2>
                <span className='text-white'>
                    Join the platform that turns sustainability challenges into profitable opportunities while creating measurable environmental impact
                </span>
                <div className='flex gap-x-6'>
                    <Button onClick={handleBookConsultation}>
                        Schedule Demo
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Top