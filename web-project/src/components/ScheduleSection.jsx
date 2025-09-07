import React from 'react'
import scheduleImage from "../assets/stats.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/* left */}
            <div className='md:w-1/2 w-full'>
              <img src={scheduleImage} alt='schedule image' className='w-full h-auto' />
            </div>

            {/* right */}
            <div className='md:w-1/2 w-full'>
            <p className='text-orange-500 font-semibold'>SCHEDULE</p>
            <h2 className='text-3xl md:text- font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business<br />With Smart Scheduling Solutions</h2>

            <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availiability, and deliver exceptional customer experience through seamless calender management.</p>
  
            <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-400 transition-all'>
                Explore scheduling features
                <HiMiniArrowLongRight className='size-7'/>
            </a>


            </div>
        </div>
    </section>
  )
}


export default ScheduleSection;
