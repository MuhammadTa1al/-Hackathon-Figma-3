import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Header />
      {/* sign in section */}
<main className=' w-[1440px]  flex justify-center items-center'>
  <div className='  w-[380px] h-[489px] '>
    <div >
       <div className='flex flex-col items-center  h-[128px] w-[380px] ' >
        <div>
              <Image
              src="/image/Frame (2).png"
              alt="Nike Logo"
              width={60} height={60}
            />
            </div>
            <h2 className='font-bold w-[186px] text-center text-md'>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
    </div>

    <div className='flex flex-col gap-4  h-[305px] font-sans mx-9'>
      <input type="email" name="Email address" id=""  placeholder='Email address' className='w-[324px] h-[40px]  border-gray-300 px-2 2 border-[2px] rounded-md'/>
      <input type="Password" name="Password" id=""  placeholder='Email address' className='w-[324px] h-[40px] border-gray-300 px-2 2 border-[2px] rounded-md'/>
      <div className='flex justify-between  h-[20px]' >
    <div className='flex '><input type="checkbox" name="" id="" className='w-5 h-5 ' /><p className='text-[#8D8D8D] text-sm pl-2'>Keep me signed in</p></div> 
    <div><Link href="#" className="text-[#8D8D8D] text-sm ">Forgotten your password?</Link></div> 
    </div>
    <div>
    <p className="text-center text-[#8D8D8D] text-md font-sans my-2 ">
    By logging in you agree to Nikes{" "}
            <Link href="#" className="underline  ">
            Privacy Policy and Terms of Use.
            </Link>
          </p>
    </div>
    <div>
      <button className='w-[324px] h-[40px] bg-[#000000] text-white font-sans rounded-md'>SIGN IN</button>
    </div>
    <p className="text-center text-[#8D8D8D] text-sm font-sans  ">
    Not a Member?{" "}
            <Link href="/JoinUs" className="underline text-black ">
            Join Us.
            </Link>
          </p>
    </div>
    
  </div>
  </div>

</main>
      <Footer />
    </div>
  )
}

export default page
