"use client";

import React, { useState } from "react";
import { Reply, Heart, Bell, User } from "lucide-react";
import Image from "next/image";
import Aside from "@/app/_components/Aside";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("socials");

  const tabs = [
    { label: "Socials", value: "socials" },
    { label: "Marketplace", value: "marketplace" },
  ];

  const socials = [
    {
      icon: (
        <svg
          width='35'
          height='30'
          viewBox='0 0 35 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.6111 7.77778V0L0 13.6111L13.6111 27.2222V19.25C23.3333 19.25 30.1389 22.3611 35 29.1667C33.0556 19.4444 27.2222 9.72222 13.6111 7.77778Z'
            fill='#1A4962'
          />
        </svg>
      ), // Rotated for reply
      user: "Eke.sui",
      username: "@swill_eke",
      time: "2 mins ago",
      action: "Replied to your post",
      mention: "@suinetwork",
      avatar: "/assets/img1.png",
      postText:
        "That's rookie numbers. @suinetwork had way better numbers in their first month.",
    },
    {
      icon: (
        <svg
          width='35'
          height='33'
          viewBox='0 0 35 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 32.1125L14.9625 29.8025C5.95 21.63 0 16.2225 0 9.625C0 4.2175 4.235 0 9.625 0C12.67 0 15.5925 1.4175 17.5 3.64C19.4075 1.4175 22.33 0 25.375 0C30.765 0 35 4.2175 35 9.625C35 16.2225 29.05 21.63 20.0375 29.8025L17.5 32.1125Z'
            fill='#1A4962'
          />
        </svg>
      ), // Heart icon for likes
      user: "Ikram.sui",
      username: "@ikram_lukman",
      time: "12 mins ago",
      action: "Liked your post",
      avatar: "/assets/img5.png",
      postText: "I liked your post",
    },
    {
      icon: (
        <svg
          width='35'
          height='30'
          viewBox='0 0 35 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.6111 7.77778V0L0 13.6111L13.6111 27.2222V19.25C23.3333 19.25 30.1389 22.3611 35 29.1667C33.0556 19.4444 27.2222 9.72222 13.6111 7.77778Z'
            fill='#1A4962'
          />
        </svg>
      ), // Rotated for reply
      user: "Sugarcho.sui",
      username: "@Lois_choj.",
      time: "17 mins ago",
      action: "Replied to your post",
      mention: "@FanTV",
      avatar: "/assets/img2.png",
      postText: "Wow, this is amazing! @FanTV",
    },
    {
      icon: (
        <svg
          width='35'
          height='43'
          viewBox='0 0 35 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.6631 41.6209L18.6396 41.6249L18.5006 41.6934L18.4615 41.7012L18.434 41.6934L18.295 41.6229C18.2741 41.6177 18.2585 41.6216 18.248 41.6346L18.2402 41.6542L18.2069 42.4922L18.2167 42.5314L18.2363 42.5568L18.4399 42.7017L18.4693 42.7095L18.4928 42.7017L18.6964 42.5568L18.7199 42.5255L18.7277 42.4922L18.6944 41.6562C18.6892 41.6353 18.6788 41.6236 18.6631 41.6209ZM19.18 41.3997L19.1526 41.4036L18.7923 41.5857L18.7728 41.6053L18.7669 41.6268L18.8021 42.4687L18.8119 42.4922L18.8276 42.5079L19.2211 42.688C19.2459 42.6945 19.2648 42.6893 19.2779 42.6723L19.2857 42.6449L19.2192 41.4428C19.2126 41.418 19.1996 41.4036 19.18 41.3997ZM17.7801 41.4036C17.7715 41.3984 17.7612 41.3967 17.7513 41.3989C17.7415 41.4011 17.7328 41.407 17.7272 41.4154L17.7155 41.4428L17.6489 42.6449C17.6502 42.6684 17.6613 42.6841 17.6822 42.6919L17.7116 42.688L18.1051 42.5059L18.1247 42.4903L18.1306 42.4687L18.1658 41.6268L18.1599 41.6033L18.1404 41.5837L17.7801 41.4036Z'
            fill='#1A4962'
          />
          <path
            d='M17.5 0C13.8651 0 10.3791 1.44394 7.80891 4.01418C5.23867 6.58442 3.79472 10.0704 3.79472 13.7053V20.6127C3.79501 20.9165 3.72462 21.2161 3.58914 21.4879L0.227435 28.2094C0.063219 28.5378 -0.0143223 28.9027 0.00217579 29.2694C0.0186739 29.6362 0.128663 29.9927 0.321698 30.305C0.514732 30.6173 0.784402 30.8751 1.1051 31.0538C1.42579 31.2326 1.78686 31.3264 2.15401 31.3263H32.846C33.2131 31.3264 33.5742 31.2326 33.8949 31.0538C34.2156 30.8751 34.4853 30.6173 34.6783 30.305C34.8713 29.9927 34.9813 29.6362 34.9978 29.2694C35.0143 28.9027 34.9368 28.5378 34.7726 28.2094L31.4128 21.4879C31.2767 21.2162 31.2056 20.9166 31.2053 20.6127V13.7053C31.2053 10.0704 29.7613 6.58442 27.1911 4.01418C24.6209 1.44394 21.1349 0 17.5 0ZM17.5 37.2C16.2848 37.2007 15.0994 36.8244 14.107 36.1231C13.1146 35.4218 12.3642 34.4299 11.9592 33.2842H23.0408C22.6358 34.4299 21.8854 35.4218 20.893 36.1231C19.9006 36.8244 18.7152 37.2007 17.5 37.2Z'
            fill='#1A4962'
          />
        </svg>
      ), // Bell icon for new follow
      user: "Matteo.sui",
      username: "@mattgoodatsui",
      time: "52 mins ago",
      action: "Followed you",
      avatar: "/assets/img3.png",
      postText: "",
    },
    {
      icon: (
        <svg
          width='35'
          height='33'
          viewBox='0 0 35 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 32.1125L14.9625 29.8025C5.95 21.63 0 16.2225 0 9.625C0 4.2175 4.235 0 9.625 0C12.67 0 15.5925 1.4175 17.5 3.64C19.4075 1.4175 22.33 0 25.375 0C30.765 0 35 4.2175 35 9.625C35 16.2225 29.05 21.63 20.0375 29.8025L17.5 32.1125Z'
            fill='#1A4962'
          />
        </svg>
      ),
      user: "Sugarcho.sui",
      username: "@Lois_choj.",
      time: "59 mins ago",
      action: "Liked your post",
      avatar: "/assets/img6.png",
      postText: "I liked your post",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.75 0C26.8994 0 29.9199 1.25111 32.1469 3.47811C34.3739 5.7051 35.625 8.72555 35.625 11.875C35.625 15.0244 34.3739 18.0449 32.1469 20.2719C29.9199 22.4989 26.8994 23.75 23.75 23.75C20.6006 23.75 17.5801 22.4989 15.3531 20.2719C13.1261 18.0449 11.875 15.0244 11.875 11.875C11.875 8.72555 13.1261 5.7051 15.3531 3.47811C17.5801 1.25111 20.6006 0 23.75 0ZM23.75 29.6875C36.8719 29.6875 47.5 35.0016 47.5 41.5625V47.5H0V41.5625C0 35.0016 10.6281 29.6875 23.75 29.6875Z'
            fill='#1A4962'
          />
        </svg>
      ), // User icon for new follow
      user: "ruru_arcade",
      action: "Started following you",
      time: "1 hr ago",
      avatar: "/assets/img2.png",
      postText: "",
    },
  ];

  const marketplace = [
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.75 0C26.8994 0 29.9199 1.25111 32.1469 3.47811C34.3739 5.7051 35.625 8.72555 35.625 11.875C35.625 15.0244 34.3739 18.0449 32.1469 20.2719C29.9199 22.4989 26.8994 23.75 23.75 23.75C20.6006 23.75 17.5801 22.4989 15.3531 20.2719C13.1261 18.0449 11.875 15.0244 11.875 11.875C11.875 8.72555 13.1261 5.7051 15.3531 3.47811C17.5801 1.25111 20.6006 0 23.75 0ZM23.75 29.6875C36.8719 29.6875 47.5 35.0016 47.5 41.5625V47.5H0V41.5625C0 35.0016 10.6281 29.6875 23.75 29.6875Z'
            fill='#1A4962'
          />
        </svg>
      ),
      user: "Eke.sui",
      username: "@swill_eke",
      time: "2 mins ago",
      title: "Product Listed #7391 (Kiara Reads, Black)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      action: "Respond",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.75 0C26.8994 0 29.9199 1.25111 32.1469 3.47811C34.3739 5.7051 35.625 8.72555 35.625 11.875C35.625 15.0244 34.3739 18.0449 32.1469 20.2719C29.9199 22.4989 26.8994 23.75 23.75 23.75C20.6006 23.75 17.5801 22.4989 15.3531 20.2719C13.1261 18.0449 11.875 15.0244 11.875 11.875C11.875 8.72555 13.1261 5.7051 15.3531 3.47811C17.5801 1.25111 20.6006 0 23.75 0ZM23.75 29.6875C36.8719 29.6875 47.5 35.0016 47.5 41.5625V47.5H0V41.5625C0 35.0016 10.6281 29.6875 23.75 29.6875Z'
            fill='#1A4962'
          />
        </svg>
      ),
      user: "sugarcho.sui",
      username: "@Lois_choji",
      time: "30 mins ago",
      title: "Product Listed #7391 (Kiara Reads, Blue)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      action: "View Details",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='24' cy='24' r='20' stroke='#22C55E' stroke-width='2' />
          <path
            d='M16 24L22 30L32 18'
            stroke='#22C55E'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ),
      title: "Transaction Successful!",
      description: "Your transaction has been completed successfully",
      time: "30 mins ago",
      action: "View Details",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='24' cy='24' r='20' stroke='#EF4444' stroke-width='2' />
          <path
            d='M16 16L32 32M32 16L16 32'
            stroke='#EF4444'
            stroke-width='2'
            stroke-linecap='round'
          />
        </svg>
      ),
      title: "Transaction Failed!",
      description:
        "Transaction Id #736516723 failed, insufficient funds from client end",
      time: "30 mins ago",
      action: "View Details",
      error: true,
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24 4C14 4 5.46 10.22 2 19C5.46 27.78 14 34 24 34C34 34 42.54 27.78 46 19C42.54 10.22 34 4 24 4ZM24 29C18.48 29 14 24.52 14 19C14 13.48 18.48 9 24 9C29.52 9 34 13.48 34 19C34 24.52 29.52 29 24 29ZM24 13C20.68 13 18 15.68 18 19C18 22.32 20.68 25 24 25C27.32 25 30 22.32 30 19C30 15.68 27.32 13 24 13Z'
            fill='#1A4962'
          />
        </svg>
      ),
      title: "10,000 people have now viewed your product",
      time: "1 hr ago",
      action: "Analytics",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.75 0C26.8994 0 29.9199 1.25111 32.1469 3.47811C34.3739 5.7051 35.625 8.72555 35.625 11.875C35.625 15.0244 34.3739 18.0449 32.1469 20.2719C29.9199 22.4989 26.8994 23.75 23.75 23.75C20.6006 23.75 17.5801 22.4989 15.3531 20.2719C13.1261 18.0449 11.875 15.0244 11.875 11.875C11.875 8.72555 13.1261 5.7051 15.3531 3.47811C17.5801 1.25111 20.6006 0 23.75 0ZM23.75 29.6875C36.8719 29.6875 47.5 35.0016 47.5 41.5625V47.5H0V41.5625C0 35.0016 10.6281 29.6875 23.75 29.6875Z'
            fill='#1A4962'
          />
        </svg>
      ),
      user: "Eke.sui",
      username: "@swill_eke",
      time: "2 mins ago",
      title: "Product Listed #7391 (Kiara Reads, Black)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      action: "Respond",
    },
    {
      icon: (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.75 0C26.8994 0 29.9199 1.25111 32.1469 3.47811C34.3739 5.7051 35.625 8.72555 35.625 11.875C35.625 15.0244 34.3739 18.0449 32.1469 20.2719C29.9199 22.4989 26.8994 23.75 23.75 23.75C20.6006 23.75 17.5801 22.4989 15.3531 20.2719C13.1261 18.0449 11.875 15.0244 11.875 11.875C11.875 8.72555 13.1261 5.7051 15.3531 3.47811C17.5801 1.25111 20.6006 0 23.75 0ZM23.75 29.6875C36.8719 29.6875 47.5 35.0016 47.5 41.5625V47.5H0V41.5625C0 35.0016 10.6281 29.6875 23.75 29.6875Z'
            fill='#1A4962'
          />
        </svg>
      ),
      user: "sugarcho.sui",
      username: "@Lois_choji",
      time: "30 mins ago",
      title: "Product Listed #7391 (Kiara Reads, Blue)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      action: "View Details",
    },
  ];

  return (
    <div className='flex justify-between w-full max-[900px]:flex-col'>
      <main className='w-full mx-auto'>
        {/* Header */}
        <h3 className='text-xl font-semibold p-5'>Notifications</h3>

        {/* Tabs */}
        <div className='flex justify-between items-center gap-8 pb-8 px-4 border-b border-gray-300'>
          {tabs.map((tab) => (
            <div key={tab.value} className='relative mx-8 sm:mx-32'>
              <button
                onClick={() => setActiveTab(tab.value)}
                className={`text-lg font-medium ${
                  activeTab === tab.value
                    ? "text-black"
                    : "text-ai-text hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
              {activeTab === tab.value && (
                <div>
                  {/* Red dot at top-right edge of the text */}
                  <span className='absolute top-[-6px] -right-2 w-2 h-2 bg-red-500 rounded-full'></span>
                  <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-[10px] bg-black'></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Socials Section */}
        {activeTab === "socials" && (
          <div className='space-y-6'>
            {socials.map((social, index) => (
              <div
                key={index}
                className='flex items-start gap-8 p-4 transition-colors duration-200 border-b border-gray-300'
              >
                {/* Icon */}
                <div className='flex-shrink-0 text-[#1A4962] mr-6'>
                  {social.icon}
                </div>

                <div className='flex max-md:flex-col gap-4 items-start'>
                  {/* Avatar */}
                  <div className='flex-shrink-0'>
                    <Image
                      src={social.avatar}
                      alt={social.user}
                      width={36}
                      height={36}
                      // className='rounded-full max-md:w-36 max-md:h-36'
                    />
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <div className='flex max-md:hidden items-center gap-2 text-sm'>
                      <span className='font-medium text-[#1A4962]'>
                        {social.user}
                      </span>
                      <span className='text-[#1A4962] text-sm'>
                        {social.time}
                      </span>
                    </div>
                    <p className='text-[#1A4962] text-sm'>
                      {social.action}{" "}
                      {social.mention && (
                        <span className='text-[#1A4962]'>{social.mention}</span>
                      )}
                    </p>
                    {social.postText && (
                      <p className='text-sm mt-2 rounded-lg text-gray-600'>
                        {social.postText}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Marketplace Section */}
        {activeTab === "marketplace" && (
          <div className='space-y-6 p-4'>
            {marketplace.map((item, index) => (
              <div
                key={index}
                className='flex items-start gap-4 p-4 transition-colors duration-200 border-b border-gray-300'
              >
                {/* Icon */}
                <div className='flex-shrink-0'>{item.icon}</div>

                {/* Content */}
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div className='flex max-sm:flex-col items-center gap-2'>
                      {item.user && (
                        <>
                          <span className='font-medium text-[#1A4962]'>
                            {item.user}
                          </span>
                          {item.username && (
                            <span className='text-[#1A4962]'>
                              {item.username}
                            </span>
                          )}
                        </>
                      )}
                      <span className='text-[#1A4962] text-sm'>
                        · {item.time}
                      </span>
                    </div>
                  </div>
                  <h4
                    className={`font-medium mt-1 ${
                      item.error ? "text-red-600" : "text-[#1A4962]"
                    }`}
                  >
                    {item.title}
                  </h4>
                  {item.description && (
                    <div className='flex justify-between  items-start max-md:flex-col'>
                      <p className='text-sm text-gray-500 max-w-lg mt-1'>
                        {item.description}
                      </p>
                      <button className='px-8 py-2 rounded-3xl text-sm text-nowrap font-medium bg-[#1A4962] text-white'>
                        View Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Aside />
    </div>
  );
};

export default NotificationsPage;
