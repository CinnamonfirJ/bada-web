"use client";
import React, { useState } from "react";
import { ChevronDown, Filter, Search, MoreHorizontal } from "lucide-react";

// Types
interface Lead {
  name: string;
  topic: string;
  status: string;
  createdOn: string;
}

const mockData: Lead[] = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "4/02/2024 12:00 PM",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "3/30/2024 7:45 AM",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "3/28/2024 3:30 PM",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdOn: "3/25/2024 11:05 AM",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdOn: "3/23/2024 4:50 PM",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    createdOn: "3/21/2024 10:20 AM",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdOn: "3/19/2024 1:15 PM",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdOn: "3/17/2024 8:00 AM",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdOn: "3/13/2024 2:45 PM",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdOn: "3/10/2024 9:30 AM",
  },
];

// Components
const TopToolbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded shadow-md'>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center bg-gray-100 px-3 py-2 rounded text-gray-800 hover:bg-gray-200 cursor-pointer'>
          <span className='font-medium'>My open leads</span>
          <ChevronDown size={18} className='ml-1' />
        </div>
        <div className='flex items-center bg-gray-100 px-3 py-2 rounded w-80'>
          <Search size={18} className='text-gray-500' />
          <input
            type='text'
            placeholder='Sort, filter, and search with Copilot'
            className='ml-2 bg-transparent focus:outline-none w-full'
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <button className='flex items-center space-x-1 text-gray-700 hover:text-blue-600'>
          <Filter size={18} />
          <span className='font-medium'>Filter</span>
        </button>
        <button className='flex items-center space-x-1 text-gray-700 hover:text-blue-600'>
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

const SearchBar: React.FC<{
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}> = ({ searchTerm, setSearchTerm }) => (
  <div className='mb-4'>
    <input
      type='text'
      placeholder='Search by name'
      className='w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

const DataTable: React.FC<{
  data: Lead[];
  selectedRows: string[];
  toggleRowSelection: (name: string) => void;
  toggleAllRows: (isChecked: boolean) => void;
}> = ({ data, selectedRows, toggleRowSelection, toggleAllRows }) => {
  const allSelected = selectedRows.length === data.length;

  return (
    <table className='w-full border-collapse text-left'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='p-2 border border-gray-300 w-12'>
            <input
              type='checkbox'
              onChange={(e) => toggleAllRows(e.target.checked)}
              checked={allSelected}
            />
          </th>
          <th className='p-2 border border-gray-300'>Name</th>
          <th className='p-2 border border-gray-300'>Topic</th>
          <th className='p-2 border border-gray-300'>Status</th>
          <th className='p-2 border border-gray-300'>Created On</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.name}
            className={`${
              selectedRows.includes(item.name) ? "bg-blue-50" : ""
            } hover:bg-gray-50`}
          >
            <td className='p-2 border border-gray-300 text-center'>
              <input
                type='checkbox'
                checked={selectedRows.includes(item.name)}
                onChange={() => toggleRowSelection(item.name)}
              />
            </td>
            <td className='p-2 border border-gray-300'>{item.name}</td>
            <td className='p-2 border border-gray-300'>{item.topic}</td>
            <td className='p-2 border border-gray-300'>{item.status}</td>
            <td className='p-2 border border-gray-300'>{item.createdOn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SalesHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRowSelection = (name: string) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((row) => row !== name)
        : [...prevSelected, name]
    );
  };

  const toggleAllRows = (isChecked: boolean) => {
    setSelectedRows(isChecked ? filteredData.map((item) => item.name) : []);
  };

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <TopToolbar />
      <div className='p-4 bg-white shadow-md rounded'>
        <h2 className='text-xl font-semibold'>Hi Mona,</h2>
        <p className='text-gray-700'>
          68% of goal achieved and rest can be achieved by focusing on 20 top
          leads.
        </p>
      </div>
      <div className='mt-4 p-4 bg-white shadow-md rounded border'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DataTable
          data={filteredData}
          selectedRows={selectedRows}
          toggleRowSelection={toggleRowSelection}
          toggleAllRows={toggleAllRows}
        />
      </div>
    </div>
  );
};

export default SalesHub;
