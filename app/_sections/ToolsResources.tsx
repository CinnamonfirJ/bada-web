"use client";

import Image from "next/image";

export default function ToolsResources() {
  const images = [
    "/assets/google.png",
    "/assets/mastercard.png",
    "/assets/cashapp.png",
  ];

  return (
    <section className='container mx-auto px-4 py-16 bg-[#CACACA] rounded-lg'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-primary mb-4'>
          All the tools and resources to elevate
          <br />
          your business success.
        </h2>
        <p className='text-[#585858] max-w-3xl mx-auto'>
          Explore our incredible perks, thoughtfully designed to provide an
          unparalleled experience for our users. Each benefit is carefully
          crafted to ensure you enjoy the very best we have to offer.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {["Google", "Mastercard", "Dollar"].map((icon, index) => (
          <div key={icon} className='bg-[#E6E6E6] p-6 rounded-lg text-center'>
            <div className='w-12 h-12 mx-auto mb-4'>
              <Image
                src={images[index]}
                alt={`${icon} icon`}
                width={48}
                height={48}
                className='w-full h-full'
              />
            </div>
            <h3 className='text-gray-900 text-xl font-semibold mb-4'>
              Text {index + 1}
            </h3>
            <p className='text-gray-600'>
              Explore our incredible perks, thoughtfully designed to provide an
              unparalleled experience for our users. Each benefit is carefully
              crafted to ensure you enjoy the very best we have to offer.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
