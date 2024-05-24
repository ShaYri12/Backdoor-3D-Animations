import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const HowItWorks = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative w-full max-w-[1025px] mx-auto py-[64px]">
        <h2 className="text-center text-[20px] leading-[24px] font-normal text-white pt-[48px] pb-[32px]">Come Funziona backdoor:</h2>

        {/* Boxes */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[32px] px-[10px]">
          {/* Box 1 */}
          <div className="w-full">
            <h2 className="text-[25px] leading-[33.6px] font-normal text-center pb-[32px]">
              <span className="text-[#F43F5E]">Trova</span> la migliore Zona:
            </h2>
            <div>
              <Image src="/Thumbnail.svg" alt="content" width={320} height={320} className="w-full" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full">
            <h2 className="text-[25px] leading-[33.6px] font-normal text-center pb-[32px]">
              <span className="text-[#F43F5E]">Confronta</span> le migliori offerte:
            </h2>
            <div>
              <Image src="/Thumbnail.svg" alt="content" width={320} height={320} className="w-full" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full">
            <h2 className="text-[25px] leading-[33.6px] font-normal text-center pb-[32px]">
              <span className="text-[#F43F5E]">Analizza</span> i migliori immobili:
            </h2>
            <div>
              <Image src="/Thumbnail.svg" alt="content" width={320} height={320} className="w-full" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex relative justify-center w-full my-[32px]">
          <button className="border-[2px] border-[#F43F5E] w-[244px] h-[56px] rounded-[50px] flex items-center gap-[10px] text-white text-[18px] font-bold leading-[21.6px] text-center hover:bg-[#F43F5E] hover:text-white transition-colors duration-300">
            <span className="w-[180px]">Esplora</span>
            <span className="bg-[#F43F5E] h-[40px] w-[40px] rounded-full flex items-center justify-center mr-[8px]">
              <IoMdArrowForward className="w-[24px] h-[24px] text-white" />
            </span>
          </button>
        </div>
        <p className="text-[12px] leading-[14.4px] text-white text-center px-[10px]">
          Trova subito offerte immobiliari. Nessun rischio, cancella in qualsiasi momento.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
