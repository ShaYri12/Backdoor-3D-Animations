import React from 'react';

import { IoMdArrowForward } from "react-icons/io";

const RealEstateInsight = () => {
  return (

    <section className="relative h-screen w-full pt-20 bg-zinc-900">
      <div className='relative h-full w-full  overflow-visible'>
        <iframe
          src='https://my.spline.design/particlescopycopy-2ecc3348c8e1b507f0f8fc8832f8356a/'
          frameBorder='0'
          width='100%'
          height='110%'
          className='absolute inset-0 md:scale-75 scale-95'
        ></iframe>
        <div className='h-24 w-full mb-6'>
          <img className=' absolute top-20 left-7 transform -translate-y-1/2 object-cover h-20 w-full' width="100%" height="100%" src='/logo_rose 2.png' alt="Logo" />
        </div>
        <h1 className='absolute text-white text-7xl font-bold top-1/2 left-0 transform -translate-y-1/2 lg:ps-20 md:ps-10 ps-7'>
          Real Estate Insight
        </h1>

        <div className="flex justify-center w-full absolute bottom-0">
          <button className="border-[2px] border-[#F43F5E] w-[244px] h-[56px] rounded-[50px] flex items-center gap-[10px] text-white text-[18px] font-bold leading-[21.6px] text-center hover:bg-[#F43F5E] hover:text-white transition-colors duration-300">
            <span className='w-[180px]'>Prova Gratis</span>
            <span className='bg-[#F43F5E] h-[40px] w-[40px] rounded-full flex items-center justify-center mr-[8px]'><IoMdArrowForward className="w-[24px] h-[24px] text-white" /></span>
          </button>
        </div>
      </div>
      <div className='h-20 bg-zinc-900'></div>
    </section>
  );
};

export default RealEstateInsight;
