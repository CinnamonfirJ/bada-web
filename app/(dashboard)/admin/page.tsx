import { Bookmark, Heart, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div>
      {/* Main section */}
      <div className='flex flex-col w-full md:w-2/3 p-4'>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <div className='flex items-center space-x-4'>
            <Image
              src='/path-to-avatar.jpg'
              alt='User Avatar'
              width={40}
              height={40}
              className=' rounded-full'
            />
            <div>
              <h2 className='font-bold text-lg flex items-center space-x-2'>
                <span>DESMOND.sui</span>
                <span className='text-blue-500'>
                  <svg className='inline-block h-4 w-4'>
                    <circle cx='12' cy='12' r='10' fill='currentColor' />
                  </svg>
                </span>
              </h2>
              <p className='text-sm text-gray-500'>@defi_funds1</p>
            </div>
          </div>
          <p className='mt-4'>
            BADA is finally LIVE! Check out amazing features on bada.fun. Thanks
            to @swill.eke and @lorem_ipsum for supporting this.
          </p>
          <div className='flex items-center justify-between mt-4'>
            <div className='flex space-x-4'>
              <button className='flex items-center space-x-1 text-gray-600 hover:text-black'>
                <Heart />
                <span>574k</span>
              </button>
              <button className='flex items-center space-x-1 text-gray-600 hover:text-black'>
                <MessageSquare />
                <span>76k</span>
              </button>
              <button className='flex items-center space-x-1 text-gray-600 hover:text-black'>
                <Share2 />
                <span>5k</span>
              </button>
            </div>
            <Bookmark className='text-gray-600 hover:text-black' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
