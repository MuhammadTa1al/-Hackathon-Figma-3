import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className='w-[1440px]h-[100vh]'>
      <Header />
      {/* Cart Section */}
<main className='flex justify-center  w-[1440px]   py-12'>

    <div className=' w-[733px] h-[547px]'>
        <div className='w-[733px] h-[62px] bg-[#F5F5F5]'>
           <div className='flex flex-col gap-2 mx-4'>
            <p>Free Delivery</p>
            <p className='flex '>Applies to orders of ₹ 14 000.00 or more. <p className='w-[20px]'></p> <Link href="#" className="underline  ">
            View details
            </Link></p>
           </div>

           <p className='text-lg font-bold my-4'>Bag</p>
           <div className='flex border-b-2 my-4 '>
          
              <div>
                <Image
                  src='/image/Image (13).png'
                  alt='skip'
                  width='150'
                  height='150'
                />
                </div>
              
              <div className=' flex flex-col gap-2w[400px] mx-8 '>
                <p>Nike Dri-FIT ADV TechKnit Ultra</p>
                <p  className='text-sm text-[#757575] '>Mens Short-Sleeve Running Top</p>
                <p className='text-sm text-[#757575] '>
                Ashen Slate/Cobalt Bliss 
                </p>
                <div className='flex gap-4'>
                    <Link href='' className='text-sm text-[#757575] '>Size L</Link>
                    <Link href='' className='text-sm text-[#757575] '>Quantity 1</Link>
                </div>

                <div className='flex gap-6 my-12 '>   <Link href="">  <Image
                  src='/image/Frame (26).png'
                  alt='skip'
                  width='24'
                  height='24'
                /></Link> 


<Link href="">  <Image
                  src='/image/Frame (27).png'
                  alt='skip'
                  width='24'
                  height='24'
                /></Link>
                </div>
              </div>
              <div className='w-[250px] flex justify-end  '>
                <p>MRP: ₹ 3 895.00</p>
              </div>

              
              
    
          
        </div>

        {/*  */}

        <div className='flex border-b-2  my-4'>
          
          <div>
            <Image
              src='/image/Image (13).png'
              alt='skip'
              width='150'
              height='150'
            />
            </div>
          
          <div className=' flex flex-col gap-2w[400px] mx-8 '>
            <p>Nike Dri-FIT ADV TechKnit Ultra</p>
            <p  className='text-sm text-[#757575] '>Mens Short-Sleeve Running Top</p>
            <p className='text-sm text-[#757575] '>
            Ashen Slate/Cobalt Bliss 
            </p>
            <div className='flex gap-4'>
                <Link href='' className='text-sm text-[#757575] '>Size L</Link>
                <Link href='' className='text-sm text-[#757575] '>Quantity 1</Link>
            </div>

            <div className='flex gap-6 my-12 '>   <Link href="">  <Image
              src='/image/Frame (26).png'
              alt='skip'
              width='24'
              height='24'
            /></Link> 


<Link href="">  <Image
              src='/image/Frame (27).png'
              alt='skip'
              width='24'
              height='24'
            /></Link>
            </div>
          </div>
          <div className='w-[250px] flex justify-end  '>
            <p>MRP: ₹ 3 895.00</p>
          </div>

          
          

      
    </div>
    </div>

</div>

{/* right side content */}
<div className='flex flex-col items-center w-[350px] h-[550px] gap-8 '>
    <p className='text-lg font-bold my-4'>Summary</p>
    <div  className='flex gap-44'>
        <p>Subtotal</p>
        <p>₹ 20 890.00</p>
        </div>

        <div  className='flex gap-12'>
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
        </div>

        <div  className='flex gap-44  border-y-2 py-8'>
            <p>Total</p>
            <p>₹ 20 890.00</p>
        </div>

        <Link href='/Checkout' className="w-[300px] h-[50px] text-center pt-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
        Member Checkout
          </Link>
</div>
</main>

      <Footer />
    </div>
  )
}

export default Page
