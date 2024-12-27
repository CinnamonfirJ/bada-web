"use client";

import Aside from "@/app/_components/Aside";
import Filter from "@/app/_components/Filter";
import { SearchBar } from "@/app/_components/SearchBar";
import Image from "next/image";
import React, { useState } from "react";

const SearchPage = () => {
  const [filter, setFilter] = useState("all"); // State to track the current filter

  // Define the filter options
  const tabs = [
    { label: "All", value: "all" },
    { label: "trading", value: "trading" },
    { label: "nfts", value: "nfts" },
    { label: "gaming", value: "gaming" },
    { label: "airdrops", value: "airdrops" },
  ];

  const results = [
    {
      label: "$SEND airdrop",
      value: "9432",
    },
    {
      label: "12/12",
      value: "1743",
    },
    {
      label: "Walrus Protocol",
      value: "3732",
    },
    {
      label: "Sui at $86",
      value: "6212",
    },
    {
      label: "$DUMMY on Sui",
      value: "9432",
    },
  ];

  return (
    <div className='flex justify-between w-full max-[900px]:flex-col'>
      <main className='w-full'>
        <div className='w-full mx-auto px-4'>
          <div className='py-4'>
            <SearchBar />
          </div>

          {/* Tab Headers */}
          <Filter
            tabs={tabs}
            onFilterChange={(value) => setFilter(value)} // Update filter when a tab is clicked
          />

          {/* Hero image */}
          <div className='relative z-10 w-full max-w-[1200px] p-4'>
            <Image
              src='/assets/suiPlay0x1.png' // Place the image in your public folder
              alt='SuiPlay 0X1'
              layout='responsive'
              width={1200}
              height={500}
              className='rounded-lg'
              priority
            />
          </div>

          <div>
            {results.map((result, i) => (
              <div
                key={i}
                className='flex justify-between items-center p-6 cursor-pointer'
              >
                <div>
                  <span className='text-sm'>Trending</span>
                  <p className='font-semibold'> {result.label} </p>
                  <span className='text-sm'> {result.value} posts</span>
                </div>
                <div>...</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Aside />
    </div>
  );
};

export default SearchPage;
