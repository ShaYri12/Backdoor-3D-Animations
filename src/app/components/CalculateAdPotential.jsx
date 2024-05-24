import Image from 'next/image'
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";


const CalculateAdPotential = () => {
  return (
    <div class=" bg-custom-background1 bg-cover bg-center min-h-[1080px] border border-x-0 border-y-[#71717A] text-white flex items-center justify-center">
      <div class="max-w-[1080px] w-full mx-auto text-center px-[10px] md:px-10">
        <div class="mb-8 flex items-center justify-center flex-col">
          <div class="flex items-center gap-[16px] mb-[32px]">
            <Image src="/backdoor.svg" alt='Logo' width={101} height={16} className=' ' />
            <RxCross1 className='w-[20px] h-[20px] text-[#FAFAFA]' />
            <Image src="/immobiliare-logo 1.svg" alt='Logo' width={98.46} height={16} className=' ' />
          </div>
          <p class="text-[28px] leading-[32.81px] font-normal text-white mb-[32px] ">Calcola il potenziale di ogni <span className='text-[#FB7185]'>annuncio</span>.</p>
          <p class=" text-white text-[12px] leading-[14.4px] font-normal">
            Pre-analizziamo tutti gli annunci per te, cosí non devi farlo tu.<br />
            Scopri il miglior prezzo, la migliore crescita, il miglior rendimento.<br />
            Ricerca per BTL, HMO, ristrutturazione, patrimonio netto negativo, ROI, BMV, condizione e molto altro.<br />
          </p>
        </div>
        <div class="border-[#6B7280] border bg-[#27272A] h-[48px] rounded-full flex items-center w-full max-w-[600px] mx-auto focus-within:border-red-400">
          <input
            type="text"
            placeholder="Incolla qui il link di Immobiliare.it"
            class="bg-transparent h-full outline-none pl-[16px] placeholder:text-[#F1F5F9] w-full max-w-[552px]"
          />
          <button class="w-[48px] pl-[14px]">
            <TbSearch className='text-[#FB7185] w-[20px] h-[20px] font-bold'/>
          </button>
        </div>
      </div>
    </div>

  )
}

export default CalculateAdPotential