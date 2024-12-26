"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  User,
  MessageSquare,
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
  { name: "Chat", icon: MessageSquare, path: "/chat" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Search", icon: Search, path: "/search" },
  { name: "Marketplace", icon: ShoppingBag, path: "/marketplace" },
];

const Menu = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className='flex flex-col h-screen w-64 bg-gradient-to-b from-[rgba(33,144,195,0.1)] to-[rgba(33,144,195,0)] p-4'>
      {/* Logo Section */}
      <div>
        <Image src={"/assets/logo.png"} alt='logo' width={100} height={100} />
      </div>

      {/* Navigation Items */}
      <div className='flex flex-col gap-4'>
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
            <span>{link.name}</span>
          </Link>
        ))}
      </div>

      {/* Create Post Button */}
      <div className='mt-auto'>
        <button className='flex items-center justify-center w-full py-3 bg-[#1A6E8F] text-white rounded-lg hover:bg-[#184E6B] transition'>
          <PlusCircle size={20} className='text-white mr-2' />
          Create post
        </button>
      </div>

      {/* Profile Section */}
      <div className='flex items-center mt-4'>
        <Image
          src='/path-to-avatar.jpg' // Replace with the actual path to your avatar image
          alt='Profile'
          width={20}
          height={20}
          className=' rounded-full mr-2'
        />
        <div>
          <p className='text-sm font-medium'>DESMOND.sui</p>
          <p className='text-xs text-gray-300'>...</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
