import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
           <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

             {/* left */}
               <div className='md:w-1/2 w-full'>
               <p className='text-green-500 font-semibold'>MONITOR</p>
               <h2 className='text-3xl md:text- font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>Introducing best mobile<br />carousels</h2>
   
               <p className='text-gray-600 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laborum magni quaerat? Soluta est at id, pariatur iure tempore! Eius assumenda, cumque deserunt blanditiis quo est nesciunt minus tempore  .</p>
     
               <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-400 transition-all'>
                   Explore scheduling features
                   <HiMiniArrowLongRight className='size-7'/>
               </a>
   
   
               </div>
               {/* right */}
               <div className='md:w-1/2 w-full'>
                 <img src={monitorCardImg} alt='schedule image' className='w-full h-auto' />
               </div>
   
              
           </div>
       </section>
  )
}

export default MonitorSection;
