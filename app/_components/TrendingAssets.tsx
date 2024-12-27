import { Tag } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export function TrendingAssets() {
  return (
    <div className='mb-8'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-center justify-between mb-4 gap-2'>
        <div className='flex items-center gap-2'>
          <h2 className='font-semibold text-lg md:text-xl'>Trending Assets</h2>
          <span className='text-lg'>🔥</span>
        </div>
        <a href='#' className='text-sm text-blue-400 hover:text-blue-300'>
          See more
        </a>
      </div>

      {/* Card */}
      <div className='bg-[#E2E2E2] p-4 sm:p-6 border border-foreground rounded-2xl overflow-hidden'>
        {/* Image */}
        <div className='relative'>
          <Image
            src='/assets/trending-assets.png'
            alt='SuiPlay0x1'
            layout='responsive'
            width={400}
            height={300}
            className='w-full aspect-[4/3] object-cover bg-black rounded-2xl'
          />
          <button className='absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg hover:bg-white'>
            <Tag className='w-4 h-4' />
          </button>
        </div>

        {/* Content */}
        <div className='p-4 space-y-4'>
          {/* Title and Price */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 text-lg'>
                SuiPlay0x1
              </h3>
              <p className='text-sm text-gray-500'>Portable gaming device</p>
            </div>
            <div className='text-right'>
              <p className='font-semibold text-gray-900 text-lg'>$599.99</p>
              <p className='text-xs text-red-500'>Few stocks left</p>
            </div>
          </div>

          {/* Description */}
          <p className='text-sm text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-2'>
            <Button variant='light' className='flex-1'>
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
            <Button variant='primary' className='flex-1'>
              <span>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.7'>
                    <path
                      d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z'
                      stroke='white'
                      strokeWidth='1.5'
                    />
                    <path
                      d='M11 5V17M14 8.5C14 7.12 12.657 6 11 6C9.343 6 8 7.12 8 8.5C8 9.88 9.343 11 11 11C12.657 11 14 12.12 14 13.5C14 14.88 12.657 16 11 16C9.343 16 8 14.88 8 13.5'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>
              </span>
              Make a bid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
