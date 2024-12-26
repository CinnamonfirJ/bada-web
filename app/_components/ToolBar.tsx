"use client";
import React from "react";
import {
  ChevronDown,
  Plus,
  RefreshCcw,
  Users,
  Filter,
  Columns,
  //   Search,
} from "lucide-react";

const TopToolbar = () => {
  return (
    <div className='flex justify-between items-center bg-white p-4 border-b border-gray-200 shadow-sm'>
      {/* Left Section */}
      <div className='flex items-center space-x-4'>
        {/* Dropdown */}
        <div className='flex items-center bg-gray-100 px-4 py-2 rounded text-gray-800 hover:bg-gray-200 cursor-pointer'>
          <span className='font-medium'>My open leads</span>
          <ChevronDown size={18} className='ml-2' />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center space-x-4'>
        {/* Show Chart */}
        <button className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
          <Users size={18} />
          <span className='font-medium'>Show chart</span>
        </button>

        {/* Focused View */}
        <button className='text-gray-700 hover:text-blue-600'>
          Focused view
        </button>

        {/* New */}
        <button className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
          <Plus size={18} />
          <span className='font-medium'>New</span>
        </button>

        {/* Refresh */}
        <button className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
          <RefreshCcw size={18} />
          <span className='font-medium'>Refresh</span>
        </button>

        {/* Collaborate */}
        <button className='text-gray-700 hover:text-blue-600'>
          Collaborate
        </button>

        {/* Delete */}
        <button className='text-gray-700 hover:text-blue-600'>Delete</button>

        {/* Smart Data */}
        <button className='text-gray-700 hover:text-blue-600'>
          Smart data
        </button>

        {/* Edit Filters */}
        <button className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
          <Filter size={18} />
          <span className='font-medium'>Edit filters</span>
        </button>

        {/* Edit Columns */}
        <button className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
          <Columns size={18} />
          <span className='font-medium'>Edit columns</span>
        </button>
      </div>
    </div>
  );
};

export default TopToolbar;
