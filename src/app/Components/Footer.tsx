import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-[1440px] bg-[#000] text-[#7E7E7E] px-12 pt-12'>
        <div className=' flex justify-between '>
            <div className='flex text-white  gap-4'>
            <ul className='uppercase flex flex-col gap-4'>
            <li><Link href='#' className='font-sans'>Find A Store</Link></li>
            <li><Link href='#' className='font-sans'>Become A Member</Link></li>
            <li><Link href='#' className='font-sans'>Sign Up for Email</Link></li>
            <li><Link href='#' className='font-sans'>Send Us Feedback</Link></li>
            <li><Link href='#' className='font-sans'>Student Discounts</Link></li>
            </ul>
            </div>
            <div className='flex text-white  gap-4'>
            <ul className='flex flex-col gap-4 text-[#7E7E7E]'>
            <li><Link href='#' className='font-sans uppercase text-white'>Get Help</Link></li>
            <li><Link href='#' className='font-sans'>Order Status</Link></li>
            <li><Link href='#' className='font-sans'>Delivery</Link></li>
            <li><Link href='#' className='font-sans'>Returns</Link></li>
            <li><Link href='#' className='font-sans'>Payment Options</Link></li>
            <li><Link href='#' className='font-sans'>Contact Us On Nike.com Inquiries</Link></li>
            <li><Link href='#' className='font-sans'>Contact Us On All Other Inquiries</Link></li>
            </ul>
        </div>


        <div className='flex justify-between  text-white  gap-4 w-[800px]'>
            <ul className=' flex flex-col gap-4 text-[#7E7E7E] '>
            <li><Link href='#' className='font-sans uppercase text-white'>About Nike</Link></li>
            <li><Link href='#' className='font-sans'>News</Link></li>
            <li><Link href='#' className='font-sans'>Careers</Link></li>
            <li><Link href='#' className='font-sans'>Investors</Link></li>
            <li><Link href='#' className='font-sans'>Investors</Link></li>
            </ul>

            <div className='flex  gap-4'>
                <Link href='#'>
                <Image
                src= "/image/Frame (19).png"
                alt="Twitter"
                width="30"
                height="30"
                />
                </Link>

                <Link href='#'>
                <Image
                src= "/image/Frame (20).png"
                alt="Twitter"
                width="30"
                height="30"
                />
                </Link>

                <Link href='#'>
                <Image
                src= "/image/Frame (21).png"
                alt="Twitter"
                width="30"
                height="30"
                />
                </Link>

                <Link href='#'>
                <Image
                src= "/image/Frame (22).png"
                alt="Twitter"
                width="30"
                height="30"
                />
                </Link>
            </div>
        </div>

        </div>
        <div className='flex justify-between items-center h-[62px]  mt-12'>
        <div className='w-screen  px-3 '>
            <p className='font-sans'> 
                <Link href="#" className=" font-sans text-white"><i className="fa-solid fa-location-dot "></i>  Pakistan</Link>
                 <span className='px-3 font-sans'> &copy; 2025 Nike, Inc. All rights reserved.</span></p>
        </div>
        <div className='flex gap-4 w-[780px]'>
        <Link href='#' className='font-sans'>Guides</Link>
          <Link href='#' className='font-sans '>Terms oF Sale</Link>
          <Link href='#' className='font-sans'>Terms of Use</Link>
          <Link href='#' className='font-sans '>Nike Privacy Policy</Link>
        </div>
        </div>

    </footer>
  )
}

export default Footer
