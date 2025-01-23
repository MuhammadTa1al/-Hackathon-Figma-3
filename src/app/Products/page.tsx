import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Header />
      <main className='p-4 md:p-12'>
        <section className='flex flex-col md:flex-row justify-between items-center mb-4 font-sans'>
          <div><p className='font-bold'>New (500)</p></div>
          <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-2'>
              Hide Filters 
              <Link href="#">
                <Image 
                  src="/image/Frame (23).png"
                  alt="hide filters"
                  width="24"
                  height="24"
                />
              </Link>
            </div>
            <div>
              <label>Sort By</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">b</option>
                <option value="">c</option>
              </select>
            </div>
          </div>
        </section>

        <section className='flex flex-col md:flex-row gap-4'>
          <div className='w-full md:w-[260px] font-sans overflow-x-auto mb-4 md:mb-0'>
            <div className='flex flex-col gap-3 pb-4'>
              {['Shoes', 'Sports Bras', 'Hoodies & Sweatshirts', 'Jackets', 'Trousers & Tights', 'Shorts', 'Tracksuits', 'Jumpsuits & Rompers', 'Skirts & Dresses', 'Socks', 'Accessories & Equipment'].map(item => (
                <Link key={item} href='Shoes' className='font-bold text-sm'>{item}</Link>
              ))}
            </div>

            <div className='flex flex-col font-sans my-4 border-t-2'>
              <p className='font-bold my-2'>Gender</p>
              {['Men', 'Women', 'Unisex'].map(gender => (
                <p key={gender} className='flex gap-2'>
                  <input type="checkbox" name={gender} id="" className='w-4 inline-block' />{gender}
                </p>
              ))}
            </div>

            <div className='flex flex-col font-sans my-4 border-t-2'>
              <p className='font-bold my-2'>Kids</p>
              {['Boys', 'Girls'].map(kid => (
                <p key={kid} className='flex gap-2'>
                  <input type="checkbox" name={kid} id="" className='w-4 inline-block' />{kid}
                </p>
              ))}
            </div>

            <div className='flex flex-col font-sans my-4 border-t-2'>
              <p className='font-bold my-2'>Shop By Price</p>
              <p className='flex gap-2'>
                <input type="checkbox" name="price1" id="" className='w-4 inline-block' />Under ₹ 2,500.00
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" name="price2" id="" className='w-4 inline-block' />₹ 2,501.00 - ₹ 7,500.00
              </p>
            </div>
          </div>

          <div className='w-full md:w-[1092px] grid grid-cols-2 md:grid-cols-3 gap-4'>
            {Array.from({ length: 24 }).map((_, index) => (
              <Link key={index} href='Cart'>
                <div className='shadow-xl rounded-b-lg'>
                  <Image 
                    src={`/image/Rectangle (${index + 1}).png`} // Adjust the image path as necessary
                    alt="product"
                    width="348"
                    height="348"
                    className='rounded-t-lg'
                  />
                  <div className='font-sans p-2'>
                    <p className='text-[#9E3500]'>Just In</p>
                    <p className=''>Nike Air Force 1 Mid 07</p>
                    <p className='text-[#757575] text-sm'>Mens Shoes</p>
                    <p className='text-[#757575] text-sm'>1 Colour</p>
                    <p>MRP : ₹ 10,795.00</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
