import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Link from 'next/link'



const page = () => {
  return (
   <div>
    {/* All Products Section */}
    <Header />
    <main className='w-[1440px] p-12'>
      {/* head line section */}
      <section className='flex justify-between items-center h-6 font-sans'>
        <div><p className='font-bold'>New (500)</p></div>
        <div className='flex  gap-4'>
          <div className='flex items-center gap-2 '>Hide Filters <Link href="#">
          <Image 
          src="/image/Frame (23).png"
          alt="hide filters"
          width= "24"
          height= "24"
          />

          </Link></div>
          <div> <label>Sort By</label>
          <select name="" id="">
            <option value=""></option>
            <option value="">b</option>
            <option value="">c</option>
            </select>
          </div>
        </div>
      </section>
        {/*end  head line section */}

        <section className='flex gap-12 my-8 '>
          <div className=' w-[260px] font-sans overflow-x-auto h-[600px]'>
          <div className='flex flex-col gap-3 w-[192px] pb-4'>
            <Link href='Shoes' className='font-bold text-sm'>Shoes </Link>
            <Link href='Shoes' className='font-bold text-sm'>Sports Bras</Link>
            <Link href='Shoes' className='font-bold text-sm'>Hoodies & Sweatshirts </Link>
            <Link href='Shoes' className='font-bold text-sm'>Jackets</Link>
            <Link href='Shoes' className='font-bold text-sm'>Trousers & Tights</Link>
            <Link href='Shoes' className='font-bold text-sm'>Shorts </Link>
            <Link href='Shoes' className='font-bold text-sm'>Tracksuits </Link>
            <Link href='Shoes' className='font-bold text-sm'>Jumpsuits & Rompers</Link>
            <Link href='Shoes' className='font-bold text-sm'>Skirts & Dresses </Link>
            <Link href='Shoes' className='font-bold text-sm'>Socks </Link>
            <Link href='Shoes' className='font-bold text-sm'>Accessories & Equipment </Link>
            </div>
            {/* gender content */}
           
           
           
            <div className='flex flex-col font-sans my-4 border-t-2 mr-4  '>
            <p className='font-bold  my-2 '>Gender</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Men</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Women</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Unisex</p>
            </div>


            {/* kid checkbox section */}
            <div className='flex flex-col font-sans my-4 border-t-2 mr-4 '>
            <p className='font-bold  my-2'>Kids</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Boys</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Grils</p>

            </div>

            {/* shop by price */}

            <div className='flex flex-col font-sans my-4 border-t-2 mr-4 '>
            <p className='font-bold  my-2'>Shop By Price</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>Under ₹ 2 500.00</p>
             <p className='flex gap-2 '> <input type="checkbox" name="Men" id="" className='w-4 inlineblock'/>₹ 2 501.00 - ₹ 7 500.00</p>

            </div>

          </div>
 
          <div  className=' w-[1092px]   grid grid-cols-3 gap-4'>

<Link href='Cart'>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle.png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href='Cart'>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (1).png"
          alt="product"
          width= "348"
          height= "348"
           className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div>
</Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg '>
<Image 
          src="/image/Rectangle (28).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div>
</Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (29).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2 '>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div>
</Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (30).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (2).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (3).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (4).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (5).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mes Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (6).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (7).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (8).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (9).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (10).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (11).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans  p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (12).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (13).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (14).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (15).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>

<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (16).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (17).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (18).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (19).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (20).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (21).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg '
          />
          <div className='font-sans p-2 '>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (22).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (23).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (24).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href=''>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (25).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


<Link href='#'>
<div className=' shadow-xl rounded-b-lg'>
<Image 
          src="/image/Rectangle (26).png"
          alt="product"
          width= "348"
          height= "348"
          className='rounded-t-lg'
          />
          <div className='font-sans p-2'>
            <p className='text-[#9E3500]'>Just In</p>
            <p className=''>Nike Air Force 1 Mid 07</p>
            <p className='text-[#757575] text-sm'>Mens Shoes</p>
            <p className='text-[#757575] text-sm'>1 Colour</p>
            <p>MRP : ₹ 10 795.00</p>
          </div>
</div></Link>


          </div>
        </section>

    </main>
    {/*end All Products Section */}
    <Footer />
   </div>
  )
}

export default page
