import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#000] text-[#7E7E7E] px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12'>
      <div className='flex flex-col lg:flex-row justify-between  gap-8'>
        <div className='flex flex-col sm:flex-row text-white gap-8'>
          <ul className='uppercase flex flex-col  gap-4'>
            <li><Link href='#' className='font-sans text-sm'>Find A Store</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Become A Member</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Sign Up for Email</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Send Us Feedback</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Student Discounts</Link></li>
          </ul>
          <ul className='flex flex-col gap-4  text-[#7E7E7E]'>
            <li><Link href='#' className='font-sans uppercase text-white text-sm'>Get Help</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Order Status</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Delivery</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Returns</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Payment Options</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Contact Us On Nike.com Inquiries</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Contact Us On All Other Inquiries</Link></li>
          </ul>

          <ul className='flex flex-col gap-4 text-[#7E7E7E]'>
            <li><Link href='#' className='font-sans uppercase text-white text-sm'>About Nike</Link></li>
            <li><Link href='#' className='font-sans text-sm'>News</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Careers</Link></li>
            <li><Link href='#' className='font-sans text-sm'>Investors</Link></li>
          </ul>
        </div>

        <div className='flex flex-col sm:flex-row text-white gap-8 lg:w-auto'>
          

          <div className='flex gap-4'>
            {['19', '20', '21', '22'].map((num) => (
              <Link key={num} href='#'>
                <Image
                  src={`/image/Frame (${num}).png`}
                  alt="Social Media"
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center mt-8 py-4 border-t border-[#7E7E7E]'>
        <div className='text-center sm:text-left mb-4 sm:mb-0'>
          <p className='font-sans text-sm'> 
            <Link href="#" className="font-sans text-white">
              <i className="fa-solid fa-location-dot"></i> Pakistan
            </Link>
            <span className='px-3 font-sans text-sm'> © 2025 Nike, Inc. All rights reserved.</span>
          </p>
        </div>
        <div className='flex flex-wrap justify-center sm:justify-end gap-4'>
          <Link href='#' className='font-sans text-sm'>Guides</Link>
          <Link href='#' className='font-sans text-sm'>Terms of Sale</Link>
          <Link href='#' className='font-sans text-sm'>Terms of Use</Link>
          <Link href='#' className='font-sans text-sm'>Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

