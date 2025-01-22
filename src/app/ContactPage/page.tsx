import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full h-[100vh]'>
      <Header />
      <main className='flex flex-col items-center mt-4'>
        <div className='flex flex-col items-center font-sans w-full max-w-[1440px]'>
          <p className='text-xl font-bold my-2'>GET HELP</p>
          <input type="text" placeholder='What can we help you with&#x3f;' className='w-full max-w-[457px] h-[56px] px-2 border-[2px] rounded-md' />
        </div>
        <section className='flex flex-col md:flex-row my-12 w-full max-w-[1440px]'>
          <div className='flex flex-col gap-3 w-full md:w-[939px] h-auto font-sans px-4'>
            <p className='text-xl font-bold'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS &#x3f;</p>
            <div className='flex flex-col gap-6 font-sans'>
              <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
              <p className='ml-6'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              <p className='ml-6'>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</p>
              <p className='ml-6'>Apple Pay</p>
              <p>
                <Link href="/" className="underline text-black">Nike Members</Link> can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member, <Link href="/JoinUs" className="underline text-black">Join Us</Link> today.
              </p>
              <div className='flex flex-col md:flex-row'>
                <Link href='/JoinNow' className='px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition mb-2 md:mb-0 md:mr-2'>Join Us</Link>
                <Link href='/Products' className='px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition'>Shop Nike</Link>
              </div>
            </div>
            <div className='flex flex-col gap-4 my-6 font-sans'>
              <p className='font-bold'>FAQs</p>
              <p className='font-bold'>Does my card need international purchases enabled?</p>
              <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              <p>Please note, some banks may charge <Link href="/" className="underline text-black">a small transaction fee</Link> for international orders.</p>
            </div>
            <div className='flex flex-col gap-4 my-3'>
              <p className='font-bold'>Can I pay for my order with multiple methods?</p>
              <p>No, payment for Nike orders can not be split between multiple payment methods.</p>
            </div>
            <div className='flex flex-col gap-4 my-3'>
              <p className='font-bold'>What payment method is accepted for SNKRS orders?</p>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div>
              <p>To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.</p>
            </div>
            <div>
              <p>Was this answer helpful?</p>
              <div className='flex my-2'>
                <Image src="/image/Frame (24).png" alt="Nike Logo" width={35} height={35} />
                <Image src="/image/Frame (25).png" alt="Nike Logo" width={35} height={35} />
              </div>
              <p className='text-[#757575]'>RELATED</p>
              <div className='flex flex-col gap-4 mx-12 my-4'>
                <Link href="/JoinUs" className="underline text-black">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
              </div>
            </div>
          </div>
          {/* Right Side Content */}
          <div className='w-full md:w-[313px] h-auto border-l-2 md:border-l-2 md:mt-0 mt-4'>
            <p className='flex justify-center text-xl font-bold'>CONTACT US</p>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col items-center gap-4 my-8'>
                <Link href=''>
                  <Image src="/image/Image (22).png" alt="Nike Logo" width={35} height={35} />
                </Link>
                <p className=''>000 800 919 0566</p>
                <p className='w-[263px] h-[112px] text-center'>Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </div>
              <div className='flex flex-col items-center gap-2 my-8'>
                <Link href=''>
                  <Image src="/image/Image (23).png" alt="Nike Logo" width={35} height={35} />
                </Link>
                <p className=''>24 hours a day</p>
                <p className='text-center'>7 days a week</p>
              </div>
              <div className='flex flex-col items-center gap-2 my-8'>
                <Link href=''>
                  <Image src="/image/Image (24).png" alt="Nike Logo" width={35} height={35} />
                </Link>
                <p className=''>We will reply within</p>
                <p className='text-center'>five business days</p>
              </div>
              <div className='flex flex-col items-center gap-2 my-8'>
                <Link href=''>
                  <Image src="/image/Image (25).png" alt="Nike Logo" width={35} height={35} />
                </Link>
                <p className=''>STORE LOCATOR</p>
                <p className='text-center'>Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default page

