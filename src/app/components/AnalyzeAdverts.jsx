import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const AnalyzeAdverts = () => {
  return (
    <section className="relative text-gray-600 bg-[#27272A] border-x-0 border border-[#71717A]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative w-full max-w-[1080px] mx-auto py-[64px] px-[10px] md:px-[32px] flex gap-[60px] lg:flex-row flex-col items-center">
        <div className="md:w-[360px] h-[360px]">
          <Image src="./Thumbnail.svg" width={360} height={360} alt="hero" />
        </div>
        <div className="md:w-[547px] text-center flex flex-col gap-[32px]">
          <h1 className="text-[28px] leading-[33.6px] font-normal text-white">
            Settimane di ricerca ridotte a un <span className='text-[#FB7185]'> istante</span>.
          </h1>
          <p className="text-white text-[12px] leading-[14.4px] font-normal">
            Analizziamo migliaia di annunci ogni giorno per scoprire le migliori offerte.<br />
            Con i nostri potenti indici puoi scoprire il miglior prezzo, la migliore crescita, il miglior rendimento.<br />
            Ricerca per BTL, HMO, ristrutturazione, patrimonio netto negativo, ROI, BMV, condizione e molto altro.<br />
          </p>
          <div className="flex relative justify-center w-full">
            <button className="border-[2px] border-[#F43F5E] w-[244px] h-[56px] rounded-[50px] flex items-center gap-[10px] text-white text-[18px] font-bold leading-[21.6px] text-center hover:bg-[#F43F5E] hover:text-white transition-colors duration-300">
              <span className='w-[180px]'>Scopri</span>
              <span className='bg-[#F43F5E] h-[40px] w-[40px] rounded-full flex items-center justify-center mr-[8px]'><IoMdArrowForward className="w-[24px] h-[24px] text-white" /></span>
            </button>
          </div>
          <p className="text-[12px] leading-[14.4px] text-white font-normal">Trova subito offerte immobiliari. Nessun rischio, cancella in qualsiasi momento.</p>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeAdverts;
