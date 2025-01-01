"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyUseBada() {
  return (
    <section className='container mx-auto px-4 py-16 text-center'>
      <h2 className='text-4xl font-bold text-primary mb-4'>Why use BADA?</h2>
      <p className='text-[#272727] text-2xl mb-12'>
        Check out the amazing perks you stand to get by using BADA.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={`px-6 py-12 rounded-lg ${
              num === 1
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } transition-transform hover:scale-105`}
          >
            <div className='mb-6'>
              <svg
                width='84'
                height='84'
                viewBox='0 0 84 84'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M41.6667 83.3333C35.9028 83.3333 30.4861 82.2389 25.4167 80.05C20.3472 77.8611 15.9375 74.8931 12.1875 71.1458C8.43751 67.3986 5.46945 62.9889 3.28334 57.9167C1.09723 52.8444 0.00278305 47.4278 5.27426e-06 41.6667C-0.0027725 35.9056 1.09167 30.4889 3.28334 25.4167C5.47501 20.3444 8.44306 15.9347 12.1875 12.1875C15.9319 8.44028 20.3417 5.47222 25.4167 3.28333C30.4917 1.09444 35.9083 0 41.6667 0C47.425 0 52.8417 1.09444 57.9167 3.28333C62.9917 5.47222 67.4014 8.44028 71.1458 12.1875C74.8903 15.9347 77.8597 20.3444 80.0542 25.4167C82.2486 30.4889 83.3417 35.9056 83.3333 41.6667C83.325 47.4278 82.2306 52.8444 80.05 57.9167C77.8694 62.9889 74.9014 67.3986 71.1458 71.1458C67.3903 74.8931 62.9806 77.8625 57.9167 80.0542C52.8528 82.2458 47.4361 83.3389 41.6667 83.3333ZM41.6667 75C50.9722 75 58.8542 71.7708 65.3125 65.3125C71.7708 58.8542 75 50.9722 75 41.6667C75 41.1806 74.9833 40.6764 74.95 40.1542C74.9167 39.6319 74.8986 39.1986 74.8958 38.8542C74.5486 40.8681 73.6111 42.5347 72.0833 43.8542C70.5556 45.1736 68.75 45.8333 66.6667 45.8333H58.3333C56.0417 45.8333 54.0806 45.0181 52.45 43.3875C50.8194 41.7569 50.0028 39.7944 50 37.5V33.3333H33.3333V25C33.3333 22.7083 34.15 20.7472 35.7833 19.1167C37.4167 17.4861 39.3778 16.6694 41.6667 16.6667H45.8333C45.8333 15.0694 46.2681 13.6639 47.1375 12.45C48.0069 11.2361 49.0653 10.2458 50.3125 9.47917C48.9236 9.13194 47.5181 8.85417 46.0958 8.64583C44.6736 8.4375 43.1972 8.33333 41.6667 8.33333C32.3611 8.33333 24.4792 11.5625 18.0208 18.0208C11.5625 24.4792 8.33334 32.3611 8.33334 41.6667H29.1667C33.75 41.6667 37.6736 43.2986 40.9375 46.5625C44.2014 49.8264 45.8333 53.75 45.8333 58.3333V62.5H33.3333V73.9583C34.7222 74.3055 36.0944 74.5667 37.45 74.7417C38.8056 74.9167 40.2111 75.0028 41.6667 75Z'
                  fill={num === 1 ? "#CACACA" : "#1A4962"}
                />
              </svg>
            </div>
            <h3 className='text-left text-4xl font-semibold mb-4'>
              Text {num}
            </h3>
            <p className='text-left text-sm max-w-64 mb-6'>
              Welcome to the cutting-edge of social interaction where you
              control your data and your network. Welcome to the cutting-edge of
              social interaction where you control your data and your network.
            </p>
            <button
              className={`inline-flex items-center px-5 py-2 rounded-xl ${
                num === 1
                  ? "bg-secondary text-primary"
                  : "bg-primary text-secondary"
              }`}
            >
              Read more <ArrowRight className='ml-2 w-4 h-4' />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
