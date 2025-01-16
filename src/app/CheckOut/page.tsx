import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
       <header>
      <nav className='flex justify-between items-center w-[1440px]  px-12 gap-8'>
        <div >
            <Link href='/'>
        <Image
        src="/image/Frame (2).png"
        alt="Nike Logo"
        width={35} height={35}
      />
      </Link>
        </div>
       

   
    
        
        <div className='flex  items-center gap-6 '>
            <p className='font-bold'>000 800 100 9538 </p>
            <Link href="">
            <Image
            src='/image/Frame (28).png'
            alt='Auto Layout Horizontal (1)'
            width="24"
            height="24"
            />
            </Link>

            <Link href="/CartPage ">
            <Image
            src='/image/Auto Layout Horizontal (2).png'
            alt='Auto Layout Horizontal (2)'
            width="50"
            height="50"
            />
            </Link>
        </div>
        </nav>
      </header>

      {/* main content */}
      <main className='flex  justify-center gap-12 my-12  w-[1440px] '>
        <section className='w-[440px]  '>
            <h2 className='text-xl font-bold '>How would you like to get your order?</h2>
            <p className='text-sm text-[#757575] my-3 '>Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <Link href="#" className="underline text-black ">
            Learn More
            </Link></p>

            <Link href='' className="flex items-center gap-4 px-3 w-[440px]  h-[82px] border border-black font-medium rounded-xl my-4">
           <Link href=''>
            <Image
            src='/image/Frame (29).png'
            alt='Auto Layout Horizontal (1)'
            width="24"
            height="24"
            />
            </Link> Deliver It
          </Link>

          <div className='flex flex-col gap-6 my-4'>
          <h2 className='text-xl font-bold '>Enter your name and address:</h2>

          <input type="text" name="First Name" id=""  placeholder='First Name' className='w-[440px] h-[56px] px-2 border-[2px] rounded-sm'/>
          
          <input type="text" name="Last Name" id=""  placeholder='Last Name' className='w-[440px] h-[56px] px-2 border-[2px] rounded-sm'/>
          
          <input type="text" name="Address Line 1" id=""  placeholder='Address Line 1' className='w-[440px] h-[56px] px-2 border-[2px] rounded-sm'/>
          
          <input type="text" name="Address Line 2" id=""  placeholder='Address Line 2' className='w-[440px] h-[56px] px-2 border-[2px] rounded-sm'/>

          <input type="text" name="Address Line 3" id=""  placeholder='Address Line 3' className='w-[440px] h-[56px] px-2 border-[2px] rounded-sm'/>
          <div className='flex justify-between'>
          <Link href='' className="flex items-center gap-4 px-3 w-[211px]  h-[56px] border border-[#CCCCCC] font-medium rounded-sm my-4">
          Postal Code
          </Link>
          <Link href='' className="flex items-center gap-4 px-3 w-[211px]  h-[56px] border border-[#CCCCCC] font-medium rounded-sm my-4">
          Locality
          </Link>
          </div>


          <div className='flex justify-between'>
          <select name="" id="" className="flex items-center gap-4 px-3 w-[211px]  h-[56px] border border-[#CCCCCC] font-medium rounded-sm bg-transparent " >
            <option value="">State/Territory</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <Link href='' className="flex items-center gap-4 px-3 w-[211px]  h-[56px] border border-[#CCCCCC] font-medium rounded-sm ">
          Pakistan
          </Link>
          </div>

<div className='flex flex-col gap-4'>
        <div className='flex '><input type="checkbox" name="" id="" className='w-5 h-5 ' /><p className=' text-sm pl-2'>Save this address to my profile</p></div>
        <div className='flex '><input type="checkbox" name="" id="" className='w-5 h-5 ' /><p className=' text-sm pl-2'>Make this my preferred address</p></div>
</div>

<div className='flex flex-col gap-4 '>
<h2 className='text-xl font-bold '>Whats your contact information?/</h2>
<div>
<input type="email" name="Email" id=""  placeholder='Email' className='w-[440px] h-[56px] px-2 border-[2px] rounded-md '/>
<p className='text-sm text-[#757575] my-1'>A confirmation email will be sent after checkout.</p>
</div>

<div>
<input type="number" name="Phone Number" id=""  placeholder='Phone Number' className='w-[440px] h-[56px] px-2 border-[2px] rounded-md '/>
<p className='text-sm text-[#757575] my-1'>A carrier might contact you to confirm delivery.</p>
</div>
</div>


<div className='flex flex-col gap-4 '>
<h2 className='text-xl font-bold '>What s your PAN?</h2>


<div>
<input type="number" name="PAN" id=""  placeholder='PAN' className='w-[440px] h-[56px] px-2 border-[2px] rounded-md '/>
<p className='text-sm text-[#757575] my-1'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>

<div className='flex my-2'><input type="checkbox" name="" id="" className='w-5 h-5 ' /><p className=' text-sm pl-2 text-[#757575] '>Save PAN details to Nike Profile</p></div>

<div className='flex my-8'><input type="checkbox" name="" id="" className='w-5 h-5 ' /><p className=' text-sm pl-2 text-[#757575] w-[404px] '>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</p></div>
</div>

<Link href='/Checkout' className="w-[440px] h-[60px] text-center pt-4 bg-[#F5F5F5] text-[#757575] font-medium rounded-full hover:bg-gray-800 transition">
Continue
          </Link>
</div>

<div className='flex flex-col justify-center gap-6 my-8'>
    <p className='border-t-2 py-2'>Delivery</p>
    <p className='border-t-2 py-2'>Shipping</p>
    <p className='border-t-2 py-2'>Billing</p>
    <p className='border-t-2 py-2'>Payment</p>
</div>


          </div>
        </section>
{/* right side content */}

<section className='flex flex-col gap-4 w-[320px] h-[721px] '>
<h2 className='text-xl font-bold '>Order Summary</h2>
<div className='flex justify-between '>
    <p className='text-sm text-[#8D8D8D] '>Subtotal</p> 
    <p  className='text-sm text-[#8D8D8D] '>₹ 20 890.00</p>
    </div>

    <div className='flex justify-between '>
    <p className='text-sm text-[#8D8D8D] '>Delivery/Shipping</p> 
    <p  className='text-sm text-[#8D8D8D] '>Free</p>
    </div>


    <div className='flex justify-between border-y-2 py-3'>
    <p className='text-sm '>Total</p> 
    <p  className='text-sm  '>₹ 20 890.00</p>
    </div>

    <p className='text-[10px] my-2'>(The total reflects the price of your order, including all duties and taxes)</p>

    <div className='flex flex-col gap-4 '>
        <p className='font-bold '>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
        <div className='flex gap-4'>
        <Image
            src='/image/Image (13).png'
            alt='Auto Layout Horizontal (1)'
            width="150"
            height="150"
            />
            <div>
                <p className='font-bold text-sm'>Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                <p className='text-[12px] text-[#8D8D8D]'>Qty 1</p>
                <p className='text-[12px] text-[#8D8D8D]'>Size L</p>
                <p className='text-[12px] text-[#8D8D8D]'>₹ 3 895.00</p>
            </div>
        </div>


        {/* product-2 */}
        <div className='flex gap-4'>
        <Image
            src='/image/Image (15).png'
            alt='Auto Layout Horizontal (1)'
            width="150"
            height="150"
            />
            <div>
                <p className='font-bold text-sm'>Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                <p className='text-[12px] text-[#8D8D8D]'>Qty 1</p>
                <p className='text-[12px] text-[#8D8D8D]'>Size L</p>
                <p className='text-[12px] text-[#8D8D8D]'>₹ 3 895.00</p>
            </div>
        </div>
    </div>
</section>
      </main>
      {/* checkout page footer section */}
      <footer className='flex items-center  w-[1440px] h-[51px] bg-[#111111]'>
      <div className='flex  items-center '>
        <div className='flex items-center   px-3 '>
            <p className='font-sans  text-[9px]'> 
                <Link href="#" className=" font-sans text-white"><i className="fa-solid fa-location-dot "></i>   Pakistan</Link>
                 <span className='px-3 font-sans text-[#8D8D8D]'> &copy; 2025 Nike, Inc. All rights reserved.</span></p>
                 <div className='flex gap-4 text-[#8D8D8D] text-[9px] ' >
        <Link href='#' className='font-sans'>Guides</Link>
          <Link href='#' className='font-sans '>Terms oF Sale</Link>
          <Link href='#' className='font-sans'>Terms of Use</Link>
          <Link href='#' className='font-sans '>Nike Privacy Policy</Link>
        </div>
        </div>
        
        </div>
        <div className=' flex justify-end  w-[900px] gap-2'>
            <Link href=''>
            <Image
            src='/image/Image (26).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>

        

            <Link href=''>
            <Image
            src='/image/Image (27).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>


            <Link href=''>
            <Image
            src='/image/Image (28).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (29).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (30).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (31).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (32).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (33).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (34).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (35).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>
            <Link href=''>
            <Image
            src='/image/Image (36).png'
            alt='Auto Layout Horizontal (1)'
            width="45"
            height="27"
            />
            </Link>

        </div>
      </footer>
    </div>
  )
}

export default page
