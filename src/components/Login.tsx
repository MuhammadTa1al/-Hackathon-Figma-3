import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from './Button';

const Page = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#FFFFFF] w-[1452px]">
      <Image className="pb-5" src="/logo2.png" width={40} height={10} alt="Nike Logo" />
      <h2 className="uppercase w-40 text-center font-bold pb-5 text-[#111111]">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <form action="" className="flex flex-col w-96">
        <input 
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px]" 
          type="text" 
          placeholder="Email Address" 
        />
        <input 
          className="w-96 border-[#E5E5E5] text-[#8D8D8D] bg-[#ffffff] rounded-md mb-4 px-4 py-3 border-[2px]" 
          type="password" 
          placeholder="Password" 
        />
        <div className="flex justify-between items-center py-5">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-[#8D8D8D]" htmlFor="remember">
              Keep me signed in
            </label>
          </div>
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC]">Forgotten your password?</a>
            </span>
          </div>
        </div>
        <p className="text-[#8D8D8D] pb-6">
          By logging in, you agree to Nike&apos;s 
          <Link className="underline" href="/privacyPolicy"> Privacy Policy</Link> and 
          <Link className="underline" href="/termsOfUse"> Terms of Use</Link>.
        </p>
        <Button text="SIGN IN" classNames="rounded-sm py-3"/>
        <p className="text-center">
          <span className="text-[#8D8D8D]">Not a Member? </span>
          <Link href="/joinUs" className="underline text-[#111111] font-bold">Join Us.</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
