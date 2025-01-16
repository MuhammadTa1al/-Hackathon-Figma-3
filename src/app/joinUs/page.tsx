import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className='w-[1440px] h-[100vh]'>
        <Header/>
        {/* Join Us section */}
      <main className='flex justify-center items-center' >
        <div className=' w-[380px] h-[833px]  mx-9'>
            <div className='flex flex-col items-center mx-9  '>
<div>
              <Image
              src="/image/Frame (2).png"
              alt="Nike Logo"
              width={60} height={60}
            />
            </div>
            <h2 className='font-bold w-[231px] text-center text-lg'>BECOME A NIKE MEMBER</h2>
            <p className='text-center text-[#8D8D8D] text-md font-sans my-3'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
    
            </div>

            {/* input feilds  */}
            <div className='flex flex-col gap-4 mx-8 '>
                <input type="email" name="email" id=""  placeholder='Email address 'className='w-[324px] h-[40px] px-2 border-[2px] rounded-md  '/>
                <input type="password" name="Password" id="" placeholder='Password' className='w-[324px] h-[40px] px-2 border-[2px] rounded-md'/>
                <input type="text" name="First Name" id=""  placeholder='First Name' className='w-[324px] h-[40px] px-2 border-[2px] rounded-md'/>
                <input type="text" name="Last Name" id=""  placeholder='Last Name' className='w-[324px] h-[40px] px-2 border-[2px] rounded-md'/>
                <input type="date" name="Date of birth" id=""  placeholder='dd/mm/yyyy' className='w-[324px] h-[40px] px-2 border-[2px]  rounded-md'/>
                <div>
                    <p className='text-center text-[#8D8D8D] text-sm font-sans my-1'>Get a Nike Member Reward every year on your Birthday.</p>
                    <div> <label htmlFor="country" className="sr-only">Country</label>
        <select
          className="w-[324px] h-[40px] border-[#E5E5E5] rounded-md text-[#8D8D8D] mb-4 px-4 border-[2px]"
          id="country"
          required
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Canada">Canada</option>
        </select></div>
                    <div className='mb-3'>
                    <button className='w-[143px] h-[43px] text-[#8D8D8D] border border-[#8D8D8D] mx-2 rounded-md' >Male</button>
                    <button className='w-[143px] h-[43px] text-[#8D8D8D] border border-[#8D8D8D] rounded-md' >Female</button>
                    </div>
                    <div className='flex items-center  my-2 font-sans  '><input type="checkbox" name="" id="" className='w-8 h-8 ' /><p className='text-[#8D8D8D] text-sm pl-2 '>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p></div> 
                    <p className="text-center text-[#8D8D8D] text-sm font-sans my-2 ">
                    By creating an account you agree to Nikes{" "}
            <Link href="#" className="underline text-black ">
             Privacy Policy and Terms of Use.
            </Link>
          </p>
          <div>
      <button className='w-[324px] h-[40px] bg-[#000000] text-white font-sans rounded-md my-3'>JOIN US</button>
    </div>
    <p className="text-center text-[#8D8D8D] text-sm font-sans  ">
    Already a Member? {" "}
            <Link href="/SignIn" className="underline text-black ">
            Sign In.
            </Link>
          </p>
                </div>
            </div>

            </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page
