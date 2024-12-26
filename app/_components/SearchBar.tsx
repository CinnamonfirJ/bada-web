import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
      <input
        type='text'
        placeholder='What are you looking for today?'
        className='w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-300'
      />
    </div>
  );
}
