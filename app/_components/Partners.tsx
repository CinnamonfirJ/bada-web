"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "KuCoin Ventures", logo: "/assets/24.png" },
  { name: "UOB Venture Management", logo: "/assets/24.png" },
  { name: "Mysten Labs", logo: "/assets/24.png" },
  { name: "Oak Grove Ventures", logo: "/assets/24.png" },
  { name: "Comma3", logo: "/assets/24.png" },
  { name: "Kyros Ventures", logo: "/assets/24.png" },
  { name: "Cypher Capital", logo: "/assets/24.png" },
  { name: "Blockchain Founders Fund", logo: "/assets/24.png" },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = 0.5; // Adjust speed as needed

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className='bg-[#1B4B66] py-12 relative overflow-hidden'>
      {/* Background gradient effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#00B2FF]/20 to-transparent opacity-50' />

      <div className='relative'>
        {/* Gradient overlays for seamless scrolling effect */}
        <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1B4B66] to-transparent z-10' />
        <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1B4B66] to-transparent z-10' />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className='flex overflow-x-hidden whitespace-nowrap'
        >
          {/* Original set of logos */}
          <div className='flex items-center gap-16 px-8'>
            {partners.map((partner) => (
              <div
                key={partner.name}
                className='w-96 h-12 relative flex-shrink-0'
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className='object-contain brightness-0 invert opacity-80'
                />
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless scrolling */}
          <div className='flex items-center gap-16 px-8'>
            {partners.map((partner) => (
              <div
                key={`${partner.name}-duplicate`}
                className='w-96 h-12 relative flex-shrink-0'
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className='object-contain brightness-0 invert opacity-80'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
