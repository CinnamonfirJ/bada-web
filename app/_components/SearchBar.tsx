import { PlusCircle, Search } from "lucide-react";
import Image from "next/image";

export function SearchBar() {
  return (
    <div className='flex justify-between items-center gap-3'>
      <div className='relative w-full max-w-2xl mx-auto'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        <input
          type='text'
          placeholder='What are you looking for today?'
          className='w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-300'
        />
      </div>

      <div className='max-sm:flex hidden items-center gap-4'>
        {/* Create Post Button */}
        <div>
          <button className='flex items-center justify-center w-full py-2 px-2 bg-[#1A6E8F] text-white rounded-lg hover:bg-[#184E6B] transition'>
            <PlusCircle size={20} className='text-black mr-2 max-sm:mr-0' />
          </button>
        </div>

        {/* Profile Section */}
        <div className='flex justify-center items-center'>
          <Image
            src='/assets/profile-pic.png' // Replace with the actual path to your avatar image
            alt='Profile'
            width={50}
            height={50}
            className=' rounded-full mr-2'
          />
        </div>
      </div>
    </div>
  );
}
