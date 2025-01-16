import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-[1440px] font-sans '>
        {/* first Head */}
        <div className='flex justify-between items-center h-[36px] bg-[#F5F5F5] px-12'>
       <Link href="/"> <Image src='/image/Frame.png' alt={''} width={24} height={24}/></Link>
        

        <div className='flex gap-4'>
        <Link href="/Products" className="text-[#111111]">Find a Store</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/ContactPage" className="text-[#111111]">Help</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/JoinUs" className="text-[#111111]">Join Us</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/SignIn" className="text-[#111111]">Sign In</Link>
        </div>
        </div>
        {/* end first head */}
{/* second head */}
<nav className='flex justify-between items-center w-[1440px]  px-12 gap-8'>
        <div >
        <Image
        src="/image/Frame (2).png"
        alt="Nike Logo"
        width={35} height={35}
      />
        </div>
        {/* center nav Links */}
        <div className='flex justify-between    items-center h-[60px] w-[1211px]'>
<div className='flex justify-end w-[800px] gap-8 '>
        <Link href="#" className="text-[#111111]">New & Featured</Link>
      <Link href="#" className="text-[#111111]">Men</Link>
      <Link href="#" className="text-[#111111]">Women</Link>
      <Link href="#" className="text-[#111111]">Kids</Link>
      <Link href="#" className="text-[#111111]">Sale</Link>
      <Link href="#" className="text-[#111111]">SNKRS</Link>
      </div>
      <div className=''>
      <input
          type="text"
          placeholder="Search"
          className="border border-[#111111] rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-[180px]"
        />
        </div>

   
    
        </div>
        <div className='flex  mx-5'>
            <Link href="">
            <Image
            src='/image/Auto Layout Horizontal (1).png'
            alt='Auto Layout Horizontal (1)'
            width="50"
            height="50"
            />
            </Link>

            <Link href="/CartPage ">
            <Image
            src='/image/Auto Layout Horizontal (2).png'
            alt='Auto Layout Horizontal (2)'
            width="50"
            height="50"
            />
            </Link>
        </div>
        </nav>
        {/* end second head */}
    </header>
)
}

export default Header
