import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import React from 'react';

function Header2() {
  return (
    <div className="w-[1452px]">
        <div className="flex flex-wrap justify-between items-center px-6 py-4 bg-[#FFFFFF] font-sans">
    {/* Left section (Logo) */}
    <div className="flex items-center">
      <Image
        src={"/logo2.png"}
        alt="Nike Logo"
        width={35} height={35}
      />
    </div>

    {/* Center section (Navigation Links) */}
    <nav className="flex gap-4 md:gap-6 text-[#111111] font-bold md:text-[16px] sm:text-[14px] text-[10px] pl-60 ">
      <Link href="#" className="text-[#111111]">New & Featured</Link>
      <Link href="#" className="text-[#111111]">Men</Link>
      <Link href="#" className="text-[#111111]">Women</Link>
      <Link href="#" className="text-[#111111]">Kids</Link>
      <Link href="#" className="text-[#111111]">Sale</Link>
      <Link href="#" className="text-[#111111]">SNKRS</Link>
    </nav>

    {/* Right section (Search, Wishlist, Cart) */}
    <div className="flex items-center gap-4 mt-4 md:mt-0 justify-between">
      {/* Search Bar */}
      <div className="relative hidden md:block">
      <FaSearch className="absolute right-3 top-2.5 text-[#111111]" />
        <input
          type="text"
          placeholder="Search"
          className="border border-[#111111] rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
        />
      </div>
      <FaHeart className="text-[#111111] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
      <FaShoppingBag className="text-[#111111] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
    </div>
  </div>
  </div>
  )
}

export default Header2;
