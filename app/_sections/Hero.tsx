// import Button from "../component/Button";

import Image from "next/image";

const Hero = () => {
  //   const features = ["Fast Transactions", "Easy Sign Up", "Ease of Usage"];

  return (
    <div className='flex flex-col justify-center items-center gap-10 px-4 md:px-10'>
      {/* Heading and Description */}
      <div className='flex flex-col justify-center items-center text-center mt-10 md:mt-28 md:mx-28'>
        <h1 className='text-3xl md:text-5xl text-[#1A4962] font-medium leading-tight'>
          Dive into the Future of Decentralized Social Networking and E-commerce
          in Web3
        </h1>
        <p className='font-light text-l text-[#272727] md:text-xl mt-4'>
          The future of decentralized social networking and e-commerce in Web3
          promises unparalleled freedom and innovation. Powered by blockchain,
          it enables user ownership of data, secure peer-to-peer transactions,
          and tokenized economies.
        </p>
      </div>

      {/* Buttons */}
      {/* <div className='flex flex-wrap justify-center items-center gap-5'>
        <Button variant={"primary"} to={"/connect-wallet"}>
          Create Account
        </Button>
        <Button variant={"light"}>Watch Tutorial</Button>
      </div> */}

      {/* Features */}
      {/* <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10'>
        {features.map((feature, i) => (
          <div
            key={i}
            className='flex justify-center items-center gap-1 text-nowrap'
          >
            <svg
              width='18'
              height='14'
              viewBox='0 0 18 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 0L17.5 1.41Z'
                fill='black'
              />
            </svg>
            <span className='text-sm'>{feature}</span>
          </div>
        ))}
      </div> */}

      {/* Info Cards */}
      <div className='w-full py-8 flex justify-center'>
        <div className='flex flex-col sm:flex-row sm:items-center w-full max-w-6xl px-4 space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='flex justify-center items-center gap-8'>
            {/* <!-- Left Icon --> */}
            <div className='flex justify-center sm:justify-start'>
              <Image
                src='/assets/head1.png'
                width={100}
                height={100}
                alt='Left Icon'
                className='rounded-full'
              />
            </div>

            {/* <!-- Right Icon --> */}
            <div className='justify-center sm:hidden flex'>
              <Image
                src='/assets/head2.png'
                width={100}
                height={100}
                alt='Right Icon'
                className='rounded-full'
              />
            </div>
          </div>

          {/* <!-- Input Section --> */}
          <div className='flex items-center w-full md:w-[80%] bg-white rounded-xl shadow-md overflow-hidden'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-grow px-4 py-3 max-md:w-[60%] text-gray-800 placeholder-gray-500 focus:outline-none'
            />
            <button className='px-6 py-3 bg-[#1A6E8F] text-white font-semibold hover:bg-[#155d73]'>
              Join the Waitlist
            </button>
          </div>

          {/* <!-- Right Icon --> */}
          <div className='hidden sm:flex justify-center sm:justify-end'>
            <Image
              src='/assets/head2.png'
              width={100}
              height={100}
              alt='Right Icon'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
