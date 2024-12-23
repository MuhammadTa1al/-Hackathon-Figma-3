import React from 'react'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {

    return (
    <div>
        <footer className="bg-[#111111] w-[1452px] text-[#FFFFFF] py-8 px-6 flex justify-between">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/signUp" >BECOME LINK MEMBER</Link></li>
              <li><Link href="/signUp">SIGN UP FOR EMAIL</Link></li>
              <li><Link href="/signUp" >Send Us Feedback</Link></li>
              <li><Link href="/productDetail" >STUDENT DISCOUNT</Link></li>
            </ul>
          </div>
 
          {/* Column 2 */}
          <div >
            <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Order Status</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Delivery</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Returns</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Payment Options</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Contact Us on Nike.com</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Contact Us on All Other Inquiries</Link></li>
            </ul>
          </div>
 
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 ">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contactUs" className="text-[#7E7E7E]">News</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Careers</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Investors</Link></li>
              <li><Link href="/contactUs" className="text-[#7E7E7E]">Sustainability</Link></li>
            </ul>
          </div>
 
          {/* Column 4 (Social Media Icons) */}
          <div className="flex justify-start lg:justify-end items-start gap-4">
            <FaTwitter className="text-lg cursor-pointer text-[#7E7E7E]" />
            <FaFacebook className="text-lg cursor-pointer text-[#7E7E7E]" />
            <FaYoutube className="text-lg cursor-pointer text-[#7E7E7E]" />
            <FaInstagram className="text-lg cursor-pointer text-[#7E7E7E]" />
          </div>
        {/* </div> */}
 
        {/* Bottom Section */}
        <div className="mt-8 flex flex-wrap justify-between items-center text-xs ">
          {/* Country and Copyright */}
          <div className="flex mb-4 md:mb-0 gap-2 ">
          <IoLocationOutline  className=''/>
            <p>India</p>
            <p className='text-[#7E7E7E]'>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
 
          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contactUs" className="text-[#7E7E7E]">Guides</Link>
            <Link href="/contactUs" className="text-[#7E7E7E]">Terms of Sale</Link>
            <Link href="/contactUs" className="text-[#7E7E7E]">Terms of Use</Link>
            <Link href="/contactUs" className="text-[#7E7E7E]">Nike Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
    )
}
export default Footer