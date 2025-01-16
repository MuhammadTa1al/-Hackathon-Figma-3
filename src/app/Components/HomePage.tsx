import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'


const HomePage = () => {
  return (
    <div>
    <Header />
  <main className='w-[1440px]'>
      <div>
        <div className=" bg-[#F5F5F5] leading-6  text-sm font-sans">
          <p className="  text-center font-bold">
            Hello Nike App
          </p>
          <p className="text-center  ">
            Download the app to access everything Nike.{" "}
            <Link href="#" className="underline font-bold">
              Get Your Great
            </Link>
          </p>
        </div>


      </div>
    {/* hero Section  */}
    <section>
        <div className=' px-12'>
 <Image
          src="/image/Image (3).png" 
          alt="Sneaker"
          width='1344'
          height='700'
        />
      </div>
    
      <div className=" flex flex-col items-center text-center bg-[#FFFFFF] py-12">
        <p className="text-sm text-[#111111] uppercase font-bold tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-5xl text-[#111111] md:text-6xl font-bold mb-4">
          NIKE AIR MAX PULSE
        </h1>

        <p className="text-[#111111] text-lg max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the
          max.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
    {/* end hero section  */}

    {/* start Air Max section */}
    <section className='px-12'>
        <div className='flex justify-between'>
            <h2 className='text-3xl font-bold'>Best of Air Max</h2>
            <div className='flex items-center gap-2'>
           <Link href='#' className='font-bold rounded'>Shop</Link>
          <Link href="#">
          <Image
          src="/image/Frame (13).png" 
          alt="Skip"
          width='40'
          height='40'
        />
          </Link>

          <Link href="#">
          <Image
          src="/image/Frame (12).png" 
          alt="Skip"
          width='40'
          height='40'
        />
          </Link>
           
        </div>
        </div>
{/* homepage products  */}
        <div className='flex '>
        <div className=" w-[441px] h-[510px] border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/image/Image (9).png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex justify-between px-2">
              <div>
                <h3 className="font-medium text-lg  text-[#111111]">
                  Nike Air Max Pulse
                </h3>
                <p className="text-[#757575] text-sm ">Women&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1   text-[#111111]">₹ 13,995</p>
            </div>
          </div>
          {/*  */}

          <div className=" w-[441px] h-[510px] border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/image/Image (10).png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex justify-between px-2">
              <div>
                <h3 className="font-medium text-lg  text-[#111111]">
                  Nike Air Max Pulse
                </h3>
                <p className="text-[#757575] text-sm ">Men&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1   text-[#111111]">₹ 13,995</p>
            </div>
          </div>

          {/*  */}

          <div className=" w-[441px] h-[510px] border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/image/Image (11).png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex justify-between px-2">
              <div>
                <h3 className="font-medium text-lg  text-[#111111]">
                Nike Air Max 97 SE
                </h3>
                <p className="text-[#757575] text-sm ">Women&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1   text-[#111111]">₹ 16,995</p>
            </div>
          </div>
        </div>
    </section>
    {/* end start Air Max section */}

    {/* Featured Section  */}
    <section className='w-[1440px] px-12 my-12'>
        <h2 className='text-3xl font-bold my-4'>Featured</h2>
        <div className=' '>
        <Image
            src="/image/Image (12).png"
            alt="Running Man"
            width={1344}
            height={700}
            className=""
          />
        </div>
        <div className='text-center'>
             <h1 className="mt-8 text-5xl font-bold text-[#111111]">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-[#111111]">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button></div>
    </section>

    {/*end Featured Section  */}

    {/* gear section */}
    <section className='w-[1440px] my-12 px-12'>
      <h2 className='text-3xl font-bold my-4'> Gear Up</h2>
      <div className='flex  w-[1356px] h-[509px]'>
      <div className='w-[666px] h-[509px] '>
          <div className=' flex gap-4 items-center justify-end  w-[666px]  h-[48px]'>
             <Link href="#" className='font-bold rounded'>Shop Mens</Link>
             <Link href="#">
             <Image
            src='/image/Frame (11).png'
            alt='skip'
            width='40'
            height='40'
            /></Link>
            <Link href="#">
             <Image
            src='/image/Frame (12).png'
            alt='skip'
            width='40'
            height='40'
            /></Link>
          </div>

<div className=' flex gap-8 w-[666px] h-[509px] p-5'>
        <div>
        <Image
            src='/image/Image (13).png'
            alt='skip'
            width='300'
            height='300'
          
            />
            <div className='flex gap-5 my-2'>
              <div>
            <p className="text-[#111111] font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="w-[150px] h-[48px] text-sm text-[#757575] ">Men&apos;s Short-Sleeve Running Top</p>
              </div>
              <div>
              <p className="text-[#111111] text-sm my-1  font-medium">₹ 2 495</p>
              </div> 
            </div>
            
        </div>
        

        {/*  */}
        <div>
        <Image
            src='/image/Image (14).png'
            alt='skip'
            width='300'
            height='300'
          
            />
            <div className='flex  justify-between gap-5 my-2'>
              <div>
            <p className="text-[#111111] font-medium">Nike Dri-FIT Challenger</p>
              <p className="w-[150px] h-[48px] text-sm text-[#757575] ">Mens 18cm (approx.) 2-in-1 Versatile Shorts</p>
              </div>
              <div>
              <p className="text-[#111111] text-sm my-1  font-medium">₹ 2 495</p>
              </div> 
            </div>
            
        </div>
        </div>
        </div>
        {/*  */}
        <div className='w-[666px] h-[509px] '>
        <div className=' flex gap-4 items-center justify-end  w-[666px]  h-[48px]'>
             <Link href="" className='font-bold rounded'>Shop Mens</Link>
             <Link href="#">
             <Image
            src='/image/Frame (11).png'
            alt='skip'
            width='40'
            height='40'
            /></Link>
            <Link href="#">
             <Image
            src='/image/Frame (12).png'
            alt='skip'
            width='40'
            height='40'
            /></Link>
          </div>
<div>

</div>
<div className=' flex gap-8 w-[666px] h-[509px] p-5'>
        <div>
        <Image
            src='/image/Image (15).png'
            alt='skip'
            width='300'
            height='300'
          
            />
            <div className='flex justify-between gap-5 my-2'>
              <div>
            <p className="text-[#111111] font-medium">Nike Dri-FIT ADV Run Division</p>
              <p className="w-[150px] h-[48px] text-sm text-[#757575]">Womens Long-Sleeve Running Top</p>

              </div>
              <div>
              <p className="text-[#111111] text-sm my-1  font-medium">₹ 5 295</p>
              </div> 
            </div>
            
        </div>

        {/*  */}
        <div>
        <Image
            src='/image/Image (16).png'
            alt='skip'
            width='300'
            height='300'
          
            />
            <div className='flex justify-between  my-2'>
              <div>
            <p className="text-[#111111] font-medium">Nike Fast</p>
              <p className="w-[200px] h-[48px] text-sm text-[#757575] ">Womens Mid-Rise 7/8 Running Leggings with Pockets</p>
              </div>
              <div>
              <p className="text-[#111111] text-sm my-1  font-medium">₹ 3,895</p>
              </div> 
            </div>
            
        </div>
        </div>
        </div>

      </div>
    </section>

 {/*end  gear section */}

 {/*  Dont mism section*/}

<section className='w-[1440px] px-12 my-12'>
<h2  className='text-3xl font-bold my-4'>Dont Miss</h2>
<div className=''>
 <Image
          src="/image/Image (17).png" 
          alt="Sneaker"
          width='1344'
          height='700'
        />
      </div>
     
      <div className='text-center'>
             <h1 className="mt-8 text-5xl font-bold text-[#111111]">
             FLIGHT ESSENTIALS
          </h1>
          <p className="mt-4 text-lg text-[#111111]">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
          Shop
          </button></div>

</section>
 {/* end  Dont mism section*/}

 {/* the essentials section */}
 <section className='w-[1440px] px-12'>
<h2 className='text-3xl font-bold my-4'>The Essentials</h2>
<div className='flex justify-around w-[1344px] h-[540px]'>
<Image
            src='/image/Image (19).png'
            alt='skip'
            width='440'
            height='540'
          
            />

<Image
            src='/image/Image (20).png'
            alt='skip'
            width='440'
            height='540'
          
            />

<Image
            src='/image/Image (18).png'
            alt='skip'
            width='440'
            height='540'
          
            /> 

</div>
 </section>

  {/* end the essentials section */}
  {/* Homepage Bottom Links  */}
  <section className='flex justify-around w-[1440px] p-12'>
    <div className='flex flex-col gap-4 text-sans '>
      <p className='font-bold'>Icons</p>
      <Link href="#" className='text-[#757575]'>Air Force 1</Link>
      <Link href="#" className='text-[#757575]'>Huarache</Link>
      <Link href="#" className='text-[#757575]'>Air Max 90</Link>
      <Link href="#" className='text-[#757575]'>Air Max 95</Link>
    </div>

    <div className='flex flex-col gap-4 text-sans '>
      <p className='font-bold'>Shoes</p>
      <Link href="#" className='text-[#757575]'>All Shoes</Link>
      <Link href="#" className='text-[#757575]'>Custom Shoes</Link>
      <Link href="#" className='text-[#757575]'>Jordan Shoes</Link>
      <Link href="#" className='text-[#757575]'>Running Shoes</Link>
    </div>

    <div className='flex flex-col gap-4 text-sans '>
      <p className='font-bold'>Clothing</p>
      <Link href="#" className='text-[#757575]'>All Clothing</Link>
      <Link href="#" className='text-[#757575]'>Modest Wear</Link>
      <Link href="#" className='text-[#757575]'>Hoodies & Pullovers</Link>
      <Link href="#" className='text-[#757575]'>Shirts & Tops</Link>
    </div>

    <div className='flex flex-col gap-4 text-sans '>
      <p className='font-bold'>Kids</p>
      <Link href="#" className='text-[#757575]'>Infant & Toddler Shoes</Link>
      <Link href="#" className='text-[#757575]'>Kids Shoes</Link>
      <Link href="#" className='text-[#757575]'>Kids Jordan Shoes</Link>
      <Link href="#" className='text-[#757575]'>Kids Basketball Shoes</Link>
    </div>
  </section>
    

  </main>
  <Footer />
  </div>
  )
}

export default HomePage
