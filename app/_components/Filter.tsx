import React, { useState } from "react";

interface FilterTab {
  label: string; // The name of the filter
  value: string; // The value associated with the filter
}

interface FilterProps {
  tabs: FilterTab[]; // Array of filters
  onFilterChange: (value: string) => void; // Callback when the filter changes
}

const Filter: React.FC<FilterProps> = ({ tabs, onFilterChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value); // Track the active filter

  const handleTabClick = (value: string) => {
    setActiveTab(value); // Update active tab
    onFilterChange(value); // Notify parent of filter change
  };

  return (
    <div className='filter-tabs w-full flex justify-between border-b border-t border-gray-300'>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 text-sm capitalize font-medium ${
            activeTab === tab.value
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
