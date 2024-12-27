"use client";

import Aside from "@/app/_components/Aside";
import Button from "@/app/_components/Button";
import Filter from "@/app/_components/Filter";
import { SearchBar } from "@/app/_components/SearchBar";
import { Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MarketplacePage = () => {
  const [filter, setFilter] = useState("all"); // State to track the current filter

  // Define the filter options
  const tabs = [
    { label: "All", value: "all" },
    { label: "category1", value: "category1" },
    { label: "category2", value: "category2" },
    { label: "category3", value: "category3" },
  ];

  const nfts = [
    {
      id: 8392,
      tag: "8392-bird",
      name: "Bird Driver",
      description: "A stylish bird piloting a tiny car with flair.",
      image: "/assets/image.png",
    },
    {
      id: 8393,
      tag: "8393-robot",
      name: "Super Saiyan Robot",
      description:
        "An advanced robot with glowing energy in Super Saiyan mode.",
      image: "/assets/image-1.png",
    },
    {
      id: 8394,
      tag: "8394-monster",
      name: "Gray Monster",
      description:
        "A fearsome gray monster with glowing red eyes and sharp claws.",
      image: "/assets/image-2.png",
    },
    {
      id: 8395,
      tag: "8395-cat",
      name: "Blue Cat with Lollipop",
      description: "A playful blue cat enjoying a colorful lollipop.",
      image: "/assets/image-3.png",
    },
  ];

  return (
    <div className='flex justify-between w-full max-[900px]:flex-col'>
      <main>
        <div className='w-full mx-auto px-4'>
          <div className='py-4'>
            <SearchBar />
          </div>

          {/* Tab Headers */}
          <Filter
            tabs={tabs}
            onFilterChange={(value) => setFilter(value)} // Update filter when a tab is clicked
          />

          {/* NFTs */}
          <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 py-12 px-6'>
            {nfts.map((nft, i) => (
              <div
                key={i}
                className='bg-[#E2E2E2] flex flex-col gap-6 p-6 rounded-2xl overflow-hidden'
              >
                <div className='relative'>
                  <Image
                    src={nft.image}
                    alt='SuiPlay0x1'
                    width={270}
                    height={260}
                    className='w-full object-cover rounded-2xl'
                  />
                  <button className='absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg hover:bg-white'>
                    <Tag className='w-4 h-4' />
                  </button>
                </div>

                <div className=' flex flex-col justify-center gap-2'>
                  <h3 className='font-semibold'>Product #{nft.id}</h3>
                  <span className='font-light'>{nft.tag}</span>
                  <span className='text-sm font-light'>{nft.description}</span>
                </div>

                <div className='flex mt-auto'>
                  <Button variant='light'>
                    Add to cart{" "}
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.71 3.4H16.924C18.302 3.4 19.297 4.67 18.919 5.948L17.265 11.548C17.01 12.408 16.196 13 15.27 13H6.112C5.185 13 4.37 12.407 4.116 11.548L1.71 3.4ZM1.71 3.4L1 1M14.5 19C14.8978 19 15.2794 18.842 15.5607 18.5607C15.842 18.2794 16 17.8978 16 17.5C16 17.1022 15.842 16.7206 15.5607 16.4393C15.2794 16.158 14.8978 16 14.5 16C14.1022 16 13.7206 16.158 13.4393 16.4393C13.158 16.7206 13 17.1022 13 17.5C13 17.8978 13.158 18.2794 13.4393 18.5607C13.7206 18.842 14.1022 19 14.5 19ZM6.5 19C6.89782 19 7.27936 18.842 7.56066 18.5607C7.84196 18.2794 8 17.8978 8 17.5C8 17.1022 7.84196 16.7206 7.56066 16.4393C7.27936 16.158 6.89782 16 6.5 16C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19Z'
                        stroke='#585858'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Aside />
    </div>
  );
};

export default MarketplacePage;
