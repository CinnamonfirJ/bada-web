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

const BottomMenu = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className=' max-sm:flex hidden fixed bottom-0 inset-x-0 w-full justify-between bg-white p-4'>
      {/* Navigation Items */}
      <div className='flex justify-between w-full'>
        {navItems.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`flex items-center gap-3 py-3 px-4 max-sm:py-2 max-sm:px-3 rounded-lg hover:bg-[#1A6E8F] transition ${
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
          </Link>
        ))}
      </div>

      <div className='flex max-sm:hidden items-center gap-4'>
        {/* Create Post Button */}
        <div>
          <button className='flex items-center justify-center w-full py-3 px-3 bg-[#1A6E8F] text-white rounded-lg hover:bg-[#184E6B] transition'>
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
};

export default BottomMenu;
