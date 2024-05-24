"use client";

import { useState } from 'react';

const FAQSection = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Da dove provengono i vostri dati?",
      answer: "Raccogliamo i dati da diverse fonti, motori di annunci immobiliari online, informazioni dall’Osservatorio del Mercato Immobiliare, dati statistici dall’ISTAT.",
    },
    {
      question: "Quanto sono accurati i vostri dati?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      question: "Posso cancellare la mia sottoscrizione?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      question: "Posso provare prima di iscrivermi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];

  return (
    <section className="bg-[#27272A] border-1 border-slate-400 border-y py-24">
      <div className="max-w-[1025px] lg:px-16 px-[10px] flex md:flex-row flex-col mx-auto">
        <div className='md:w-full lg:w-1/2' style={{ minWidth: "473px" }}>
          <h2 className="text-[28px] leading-[33.6px] font-normal text-white mb-[24px]">Domande Frequenti.</h2>
          <p className='text-[12px] leading-[14.4px] font-normal mb-[32px]'>Le risposte alle domande piú richieste su backdoor.</p>
        </div>
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#27272A] shadow rounded-lg transition-all duration-300 ease-in-out">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-2 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              >
                <span className="font-bold">{faq.question}</span>
                <span className="ml-4">
                  {openIndices.includes(index) ? (
                    <svg
                      className="w-6 h-6 transition-transform transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform transform rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndices.includes(index) ? 'max-h-screen' : 'max-h-0'
                  }`}
              >
                <div className="py-3 pb-8 border-b font-light text-sm">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
