"use client";

import Image from "next/image";

type Testimonial = {
  id: number;
  avatar: string;
  username: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: "/assets/img1.png",
    username: "Swill_eke",
    role: "Sui Ambassador",
    quote:
      "Using their platform has been a game-changer for me! The perks they offer are not just extras—they truly enhance the entire experience. From seamless navigation to exclusive benefits, every feature feels tailored to meet my needs. I've tried other services, but none come close to the value and care this team provides. It's clear they prioritize their users, and it shows in every detail. I couldn't recommend them more for anyone looking for quality and convenience!",
  },
  {
    id: 2,
    avatar: "/assets/profile-pic.png",
    username: "Defi_funds1",
    role: "Sui Ambassador",
    quote:
      "An exceptional platform with thoughtful perks that truly elevate the user experience—reliable, convenient, and highly recommended!",
  },
  {
    id: 3,
    avatar: "/assets/img2.png",
    username: "Lois_choji",
    role: "Sui Ambassador",
    quote:
      "Using their platform has been a game-changer for me! The perks they offer are not just extras—they truly enhance the entire experience. From seamless navigation to exclusive benefits, every feature feels tailored to meet my needs. I've tried other services, but none come close to the value and care this team provides. It's clear they prioritize their users, and it shows in every detail. I couldn't recommend them more for anyone looking for quality and convenience!",
  },
  {
    id: 4,
    avatar: "/assets/profile-pic.png",
    username: "Defi_funds1",
    role: "Sui Ambassador",
    quote:
      "An exceptional platform with thoughtful perks that truly elevate the user experience—reliable, convenient, and highly recommended!",
  },
  {
    id: 5,
    avatar: "/assets/img1.png",
    username: "Swill_eke",
    role: "Sui Ambassador",
    quote:
      "Using their platform has been a game-changer for me! The perks they offer are not just extras—they truly enhance the entire experience. From seamless navigation to exclusive benefits, every feature feels tailored to meet my needs. I've tried other services, but none come close to the value and care this team provides. It's clear they prioritize their users, and it shows in every detail. I couldn't recommend them more for anyone looking for quality and convenience!",
  },
  {
    id: 6,
    avatar: "/assets/img1.png",
    username: "Swill_eke",
    role: "Sui Ambassador",
    quote:
      "An exceptional platform with thoughtful perks that truly elevate the user experience—reliable, convenient, and highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-primary mb-4'>Testimonials</h2>
        <p className='text-gray-400'>
          Check out what users have to say about BADA
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-[#CACACA] rounded-lg p-6 flex flex-col'
          >
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.username}'s avatar`}
                width={65}
                height={65}
                className='rounded-full'
              />
              <div>
                <h3 className='font-semibold text-primary'>
                  {testimonial.username}
                </h3>
                <p className='text-sm text-[#585858]'>{testimonial.role}</p>
              </div>
            </div>
            <p className='text-primary text-sm leading-relaxed text-center'>
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
