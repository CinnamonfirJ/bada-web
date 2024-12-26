"use client";

import Aside from "@/app/_components/Aside";
import Filter from "@/app/_components/Filter";
import { SearchBar } from "@/app/_components/SearchBar";
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

  return (
    <div className='flex justify-between w-full max-[900px]:flex-col max-[900px]:flex-col-reverse'>
      <main className='w-full'>
        <div className='flex w-full justify-center mx-auto px-4'>
          <div className='py-4'>
            <SearchBar />
          </div>
        </div>

        {/* Tab Headers */}
        <Filter
          tabs={tabs}
          onFilterChange={(value) => setFilter(value)} // Update filter when a tab is clicked
        />
      </main>

      <Aside />
    </div>
  );
};

export default MarketplacePage;
