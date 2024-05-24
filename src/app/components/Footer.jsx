import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


const Footer = () => {
  return (
    <footer class="text-white bg-[#18181B]">
      <div className='flex py-[64px] px-[15px] md:px-[64px]'>
        <div className='w-full max-w-[1440px] mx-auto'>
          <div className='w-full flex xl:flex-row flex-col xl:justify-between justify-center xl:items-start gap-[100px]'>
            {/* Links */}
            <div className='flex items-start flex-wrap justify-between gap-[40px]'>
              <div className='w-[141px]'>
                <Image src='./logo-footer.svg' alt='' width={101.25} height={16} />
              </div>
              <ul className='flex flex-col gap-[16px]'>
                <h3 className='text-[16px] font-semibold leading-[24px]'>Esplora</h3>
                <li className='text-[14px] font-normal leading-[21px] text-[#FAFAFA]'><Link href='/'>Link One</Link></li>
                <li><Link href='/'>Link Two</Link></li>
                <li><Link href='/'>Link Three</Link></li>
                <li><Link href='/'>Link Four</Link></li>
              </ul>
              <ul className='flex flex-col gap-[16px]'>
                <h3 className='text-[16px] font-semibold leading-[24px]'>Scopri</h3>
                <li><Link href='/'>Link One</Link></li>
                <li><Link href='/'>Link Two</Link></li>
                <li><Link href='/'>Link Three</Link></li>
                <li><Link href='/'>Link Four</Link></li>
              </ul>
              <ul className='flex flex-col gap-[16px]'>
                <h3 className='text-[16px] font-semibold leading-[24px]'>Analizza</h3>
                <li><Link href='/'>Link One</Link></li>
                <li><Link href='/'>Link Two</Link></li>
                <li><Link href='/'>Link Three</Link></li>
                <li><Link href='/'>Link Four</Link></li>
              </ul>
            </div>
            {/* Content */}
            <div className='sm:w-[500px] w-full'>
              <h3 className='mb-[16px] text-[16px] font-semibold leading-[24px]'>Iscriviti</h3>
              <p className='mb-[24px] text-[16px] font-normal leading-[24px]'>Iscriviti alla nostra newsletter e ricevi tutti gli aggiornamenti per primo.</p>
              <div class="border-[#6B7280] border bg-[#27272A] h-[48px] rounded-full flex items-center w-full max-w-[600px] mx-auto focus-within:border-red-400">
                <input
                  type="text"
                  placeholder="Inserisci qui la tua mail."
                  class="bg-transparent h-full outline-none pl-[16px] placeholder:text-[#F1F5F9] w-full max-w-[552px]"
                />
                <button class="w-[48px] pl-[14px]">
                  <IoMdArrowForward className='text-white w-[20px] h-[20px] font-bold' />
                </button>
              </div>
              <p className='mt-[16px] text-[12px] font-normal leading-[18px]'>By subscribing you agree to with our <Link href='/'>Privacy Policy</Link> and provide consent to receive updates from our company.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#18181B]">
        <div className=' px-[15px] md:px-[64px] mb-[33px]'>
          <div className='max-w-[1440px] w-full h-[2px] mx-auto bg-[#6B7280]'></div>
        </div>
        <div class="max-w-[1440px] w-full mx-auto flex md:flex-row flex-col items-center pb-[80px] px-[15px] md:px-[64px]">
          <p class=" text-sm text-white">© 2024 backdoor. All rights reserved.
            <a href="#" rel="noopener noreferrer" class="text-white underline mx-3" target="_blank">Privacy Policy</a>
            <a href="#" rel="noopener noreferrer" class="text-white underline mx-3" target="_blank">Terms of Services</a>
            <a href="#" rel="noopener noreferrer" class="text-white underline mx-3" target="_blank">Cookies Settings</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-white">
              <img src="/Facebook.svg" />
            </a>
            <a class="ml-3 text-white">
              <img src="/Instagram.svg" />
            </a>
            <a class="ml-3 text-white">
              <img src="/X.svg" />
            </a>
            <a class="ml-3 text-white">
              <img src="/LinkedIn.svg" />
            </a>
            <a class="ml-3 text-white">
              <img src="/Youtube.svg" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer