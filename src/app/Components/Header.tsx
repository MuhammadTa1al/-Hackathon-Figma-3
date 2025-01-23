"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full font-sans">
      {/* First Head */}
      <div className="flex justify-between items-center h-[36px] bg-[#F5F5F5] px-4 sm:px-12">
        <Link href="/">
          <Image src="/image/Frame.png" alt={"Logo"} width={24} height={24} />
        </Link>

        <div className="hidden sm:flex gap-4">
          <Link href="/Products" className="text-[#111111]">
            Find a Store
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/ContactPage" className="text-[#111111]">
            Help
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/JoinUs" className="text-[#111111]">
            Join Us
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/SignIn" className="text-[#111111]">
            Sign In
          </Link>
        </div>
      </div>

      {/* Second Head */}
      <nav className="flex justify-end items-center w-full px-4 sm:px-12 py-4">
        <div className="flex justify-start w-96">
          <Image src="/image/Frame (2).png" alt="Nike Logo" width={35} height={35} />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden">
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-between items-center w-full max-w-4xl ml-8">
          <div className="flex justify-end gap-8">
            <Link href="#" className="text-[#111111]">
              New & Featured
            </Link>
            <Link href="#" className="text-[#111111]">
              Men
            </Link>
            <Link href="#" className="text-[#111111]">
              Women
            </Link>
            <Link href="#" className="text-[#111111]">
              Kids
            </Link>
            <Link href="#" className="text-[#111111]">
              Sale
            </Link>
            <Link href="#" className="text-[#111111]">
              SNKRS
            </Link>
          </div>
          <div className="ml-8">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#111111] rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-[180px]"
            />
          </div>
        </div>

        <div className="hidden sm:flex mx-5">
          <Link href="">
            <Image
              src="/image/Auto Layout Horizontal (1).png"
              alt="Auto Layout Horizontal (1)"
              width={50}
              height={50}
            />
          </Link>
          <Link href="/CartPage">
            <Image
              src="/image/Auto Layout Horizontal (2).png"
              alt="Auto Layout Horizontal (2)"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white w-full px-4 py-4 absolute z-50">
          <div className="flex flex-col gap-4">
          <Link href="/Products" className="text-[#111111]">
              Find a Store
            </Link>
            <Link href="/ContactPage" className="text-[#111111]">
              Help
            </Link>
            <Link href="/JoinUs" className="text-[#111111]">
              Join Us
            </Link>
            <Link href="/SignIn" className="text-[#111111]">
              Sign In
            </Link>
            <Link href="/CartPage" className="text-[#111111]">
              Add to Cart
            </Link>
            <div className="mt-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#111111] rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
            />
          </div>
            <Link href="#" className="text-[#111111]">
              New & Featured
            </Link>
            <Link href="#" className="text-[#111111]">
              Men
            </Link>
            <Link href="#" className="text-[#111111]">
              Women
            </Link>
            <Link href="#" className="text-[#111111]">
              Kids
            </Link>
            <Link href="#" className="text-[#111111]">
              Sale
            </Link>
            <Link href="#" className="text-[#111111]">
              SNKRS
            </Link>
          </div>
          
          <div className="flex justify-between mt-4">
           
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
