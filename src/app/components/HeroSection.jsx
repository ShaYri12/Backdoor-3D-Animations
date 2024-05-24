"use client";

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = document.getElementById('splineIframe');
    const handleLoad = () => setLoading(false);

    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <section className="text-gray-600 body-font bg-custom-background3 bg-cover bg-center md:pt-20 pt-0 relative h-screen w-full">
      <div className="relative h-full w-full bg-stone-900 pb-20 overflow-hidden">
        {loading && <div className="absolute inset-0 flex items-center justify-center text-white">Loading...</div>}
        <iframe
          id="splineIframe"
          src='https://my.spline.design/reededglass2copy-724fec001fe05e557cd8c124c959b652/'
          frameBorder='0'
          width='100%'
          height='100%'
          className='absolute inset-0 '
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
      <div className='h-24 w-full mb-6 mt-10'>
        <img className=' absolute top-20 left-7 transform -translate-y-1/2 object-cover h-20 w-full' width="100%" height="100%" src='/logo_rose 2.png' alt="Logo" />
      </div>
      <div className="absolute inset-0 text-white flex items-center justify-start p-8 lg:ps-20 md:ps-10 ps-7">
        <div className="md:w-1/7 lg:pr-24 md:pr-16 flex flex-col items-start text-left p-4">
          <p className="mb-8 leading-relaxed text-3xl block">
            Il tuo accesso ai <span className="text-[#F43F5E]">segreti</span>
            <br /> del mercato immobiliare.
          </p>
          <div className="flex justify-start">
            <button
              className="relative bg-transparent border-2 border-[#F43F5E] text-white px-2 py-2 rounded-full font-bold flex items-center space-x-2 hover:bg-[#F43F5E] hover:text-white transition-colors duration-300"
            >
              <span className='md:px-10 px-2 text-lg'>Supporta Ora</span>
              <span className="flex items-center justify-center bg-[#F43F5E] text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-7 w-4 md:h-7 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
