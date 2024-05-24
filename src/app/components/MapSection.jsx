"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoMdArrowForward } from "react-icons/io";

const MapSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-custom-background1 bg-cover bg-center py-[64px] h-[1080px] flex xl:items-center justify-center px-[10px] xl:px-[32px]">
      <div className='w-full mx-auto max-w-[1440px]'>
        <div className="mx-auto flex xl:flex-row flex-col justify-between gap-[12px]  items-center w-full">
          {/* Content */}
          <div className="xl:w-[550px] text-center">
            <div className='flex items-center justify-center mb-[32px] lg-mt-0 mt-10'>
              <Image src='/thrid-section-logo.png' alt="Logo" loading='lazy' width={228} height={84} />
            </div>
            <h1 className="text-[28px] leading-[33.6px] text-center font-normal text-white mb-[32px]">
              Trova il migliore rendimento, <span className='text-[#F43F5E]'>subito</span>.
            </h1>
            <div className='flex flex-col text-center mb-8'>
              <p className="text-white text-[12px] font-normal text-center leading-[14.4px]">
                Usa la potenza dell'intelligenza artificiale per trovare e reperire le migliori offerte immobiliari.
              </p>
              <p className="text-white text-[12px] font-normal text-center leading-[14.4px]">
                Utilizza i nostri potenti indici per scoprire il miglior prezzo, la migliore crescita, il miglior rendimento.
              </p>
              <p className="text-white text-[12px] font-normal text-center leading-[14.4px]">
                Ricerca per BTL, HMO, ristrutturazione, patrimonio netto negativo, ROI, BMV, condizione e molto altro.
              </p>
            </div>
            <div className="flex relative justify-center w-full">
              <button className="border-[2px] border-[#F43F5E] w-[244px] h-[56px] rounded-[50px] flex items-center gap-[10px] text-white text-[18px] font-bold leading-[21.6px] text-center hover:bg-[#F43F5E] hover:text-white transition-colors duration-300">
                <span className='w-[180px]'>Prova Gratis</span>
                <span className='bg-[#F43F5E] h-[40px] w-[40px] rounded-full flex items-center justify-center mr-[8px]'><IoMdArrowForward className="w-[24px] h-[24px] text-white" /></span>
              </button>
            </div>
            <p className='text-white text-xs font-normal text-center mt-[32px]'>Trova subito offerte immobiliari. Nessun rischio, cancella in qualsiasi momento.</p>
          </div>

          {/* Maps */}
          <div className="relative w-full max-w-[729px] mb-20">
            <Image src="./Card.svg" alt="map" width={609} height={248} className="w-full max-w-[609px] absolute object-cover z-50 object-center rounded xl:top-[-260px] top-[-40px]" style={{ transform: `translateY(${scrollPosition * 0.13}px)` }} />
            <Image src="./map.svg" alt="map" width={513} height={500} className="w-full max-w-[513px] absolute right-0 xl:top-[-237px] object-cover object-center rounded" style={{ transform: `translateY(${scrollPosition * 0.05}px)` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
