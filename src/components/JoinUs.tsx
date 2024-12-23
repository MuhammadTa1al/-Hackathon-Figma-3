import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Page = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#FFFFFF] w-[1452px]">
      <Image className="pb-5" src="/logo2.png" width={40} height={10} alt="Logo" />
      <h2 className="uppercase text-center font-bold pb-5 text-[#111111]">
        BECOME A NIKE MEMBER
      </h2>
      <p className='w-80 text-center text-[#8D8D8D] pb-5'>
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>
      <form action="" className="flex flex-col w-96">
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
          type="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="firstName" className="sr-only">First Name</label>
        <input
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
          type="text"
          id="firstName"
          placeholder="First Name"
          required
        />
        <label htmlFor="lastName" className="sr-only">Last Name</label>
        <input
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
          type="text"
          id="lastName"
          placeholder="Last Name"
          required
        />
        <label htmlFor="dob" className="sr-only">Date of Birth</label>
        <input
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
          type="date"
          id="dob"
          required
        />
        <p className="pb-3 text-[#8D8D8D] text-sm text-center">Get a Nike Member Reward every year on your Birthday.</p>

        <label htmlFor="country" className="sr-only">Country</label>
        <select
          className="w-96 border-[#E5E5E5] rounded-md text-[#8D8D8D] mb-4 px-4 py-3 border-[2px]"
          id="country"
          required
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Canada">Canada</option>
        </select>

        <div className='flex gap-5 mt-1'>
          <div className='border-[#E5E5E5] bg-[#ffffff] text-[#8D8D8D] rounded-md py-4 border-[2px] w-2/4 text-center'>
            Male
          </div>
          <div className='border-[#E5E5E5] bg-[#ffffff] text-[#8D8D8D] rounded-md py-4 border-[2px] w-2/4 text-center'>
            Female
          </div>
        </div>

        <div className="flex justify-between items-center py-7">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-[#8D8D8D]" htmlFor="remember">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits
            </label>
          </div>
        </div>

        <p className="text-[#8D8D8D] text-center pb-6">
          By creating an account, you agree to Nike&apos;s <Link className="underline text-[#8D8D8D]" href="/contactUs">Privacy Policy</Link> and <Link className="underline text-[#8D8D8D]" href="/contactUs">Terms of Use</Link>.
        </p>

        <Button text="JOIN US" classNames="rounded-sm py-3" />
        
        <p className="text-center">
          <span className="text-[#8D8D8D]">Already a Member? </span>
          <Link href="/signUp" className="underline text-[#111111] font-bold">Sign In.</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
