"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Bell,
  Search,
  ShoppingBag,
  PlusCircle,
} from "lucide-react"; // Using relevant icons
import Link from "next/link";
import Image from "next/image";

export const navItems = [
  { name: "Home", icon: Home, path: "/home" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Search", icon: Search, path: "/search" },
  { name: "Marketplace", icon: ShoppingBag, path: "/marketplace" },
];

const Menu = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className='max-sm:hidden flex sticky top-0 flex-col h-screen bg-gradient-to-b from-[rgba(33,144,195,0.1)] to-[rgba(33,144,195,0)] p-4'>
      {/* Logo Section */}
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt='logo'
          width={100}
          height={100}
          className='max-sm:hidden block'
        />
      </Link>

      {/* Navigation Items */}
      <div className='flex flex-col mt-4 gap-4'>
        {navItems.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-[#1A6E8F] transition ${
              pathname === link.path ? "bg-[#1A6E8F]" : ""
            }`}
          >
            <link.icon
              size={20} // Adjust size
              color='black' // Set color
              strokeWidth={2.5} // Adjust stroke width
              className={`${
                pathname === link.path
                  ? "text-white custom-icon"
                  : "text-[#B3E5FC]"
              }`}
            />
            <span className='max-sm:hidden block'>{link.name}</span>
          </Link>
        ))}
      </div>

      <div className='mt-auto'>
        {/* Create Post Button */}
        <div>
          <button className='flex items-center justify-center w-full py-3 bg-[#1A6E8F] text-white rounded-lg hover:bg-[#184E6B] transition'>
            <PlusCircle size={20} className='text-white mr-2 max-sm:mr-0' />
            <span className='max-sm:hidden block'>Create post</span>
          </button>
        </div>

        {/* Profile Section */}
        <div className='flex justify-center items-center mt-4'>
          <Image
            src='/assets/profile-pic.png' // Replace with the actual path to your avatar image
            alt='Profile'
            width={50}
            height={50}
            className=' rounded-full mr-2'
          />
          <div className='max-sm:hidden block'>
            <p className='text-sm font-medium'>DESMOND.sui</p>
            <p className='text-xs text-gray-300'>...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
