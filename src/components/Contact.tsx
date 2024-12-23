import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

const page = () => {
    return (
        <div className='flex flex-col items-center bg-[#FFFFFF] w-[1452px]'>
            <h2 className='uppercase text-xl font-bold mt-8 text-[#111111]'>Get Help</h2>
            <div className="flex px-4 py-3 rounded-md w-[30%] border-2 border-text-secondary-gray mt-4 justify-between">
                <input className="focus-visible:outline-none w-[64%] text-[#757575]" type="text" placeholder="What can we help you with?" name="" id="" />
                {/* <Image src="/frame.png" alt="wishlist" /> */}
                <Image src="/lo5.png" alt="Thumbs Down" className="w-6 h-6 cursor-pointer" width={30} height={24} />
            </div>
            <div className="grid grid-cols-12 px-8 md:px-16 py-8 bg-[#ffffff] text-[#111111]">
                <div className='col-span-9 border-r-[1.3px] pr-4 border-text-secondary-gray text-[#111111]'>
                    <h2 className="text-2xl font-bold mb-4">
                        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                    </h2>
                    <p className="mb-4">
                        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                    </p>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                        <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                        <p>
                            If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
                        </p>
                        <p>Apple Pay</p>
                    </ul>
                    <p className="mb-6 text-[#111111]">
                        <Link href="/signUp" className="underline font-semibold">
                            Nike Members
                        </Link>{}
                        can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{" "}
                        <Link href="/joinUs" className="underline font-semibold">
                            join us
                        </Link>{}
                        today.
                    </p>
                    <div className='flex mt-4 gap-4'>
                        <Button text="Join Us" classNames="rounded-full py-2" />
                        <Button text="Shop Nike" classNames="rounded-full py-2" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#111111]">FAQs</h3>
                        <div className="mb-6">
                            <h4 className="text-lg font-bold mb-2 text-[#111111]">Does my card need international purchases enabled?</h4>
                            <p className='text-[#111111]'>
                                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
                                international purchases need to be enabled.
                            </p>
                            <p className="mt-2 text-sm text-[#111111]">
                                Please note, some banks may charge
                                <Link href={"/joinUs"} className='underline font-semibold'> a small transaction fee </Link>
                                for international orders.
                            </p>
                        </div>
                        <div className="mb-6 text-[#111111]">
                            <h4 className="text-lg font-bold mb-2">Can I pay for my order with multiple methods?</h4>
                            <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                        </div>
                        <div className="mb-6 text-[#111111]">
                            <h4 className="text-lg font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
                            <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                        </div>
                        <div className="mb-6 text-[#111111]">
                            <h4 className="text-lg font-bold mb-2">Why don&apos;t I see Apple Pay as an option?</h4>
                            <p>
                                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the
                                latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use
                                Safari to use Apple Pay on Nike.com.
                            </p>
                        </div>
                        <div className="mb-6 text-[#111111]">
                            <p className="mb-2">Was this answer helpful?</p>
                            <div className="flex space-x-2">
                                <Image src="/logo3.png" alt="Thumbs Down" className="w-6 h-6 cursor-pointer" width={24} height={24} />
                                <Image src="/logo4.png" alt="Thumbs Down" className="w-6 h-6 cursor-pointer" width={24} height={24} />
                            </div>
                        </div>
                        <h4 className="text-lg font-medium mt-8 mb-4 text-text-secondary-gray text-[#757575]">RELATED</h4>
                        <ul className="space-y-2 ml-6">
                            <li>
                                <Link href="#" className="underline font-bold text-[#111111]">
                                    WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="underline font-bold text-[#111111]">
                                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h2 className='uppercase font-bold text-xl text-center'>Contact Us</h2>
                    {/* Phone Section */}
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Image src="/logo6.png" alt='Phone' height={64} width={64} />
                        <p className="font-semibold">000 800 919 0566</p>
                        <p>Products & Orders: 24 hours a day, 7 days a week</p>
                        <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                    </div>

                    {/* Chat Section */}
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Image src="/logo7.png" alt="Thumbs Down" className="w-[64px] h-[64px] cursor-pointer" width={64} height={64} />
                        <p className="font-semibold">24 hours a day</p>
                        <p>7 days a week</p>
                    </div>

                    {/* Email Section */}
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Image src="/logo8.png" alt="Thumbs Down" className="w-[64px] h-[64px] cursor-pointer" width={64} height={64} />
                        <p className="font-semibold">We&apos;ll reply within</p>
                        <p>five business days</p>
                    </div>

                    {/* Store Locator Section */}
                    <div className="flex flex-col items-center space-y-2 text-center">
                        {/* <Image src="/frame.png"  alt='Phone' width={40} /> */}
                        <Image src="/logo9.png" alt="Thumbs Down" className="w-[64px] h-[64px] cursor-pointer" width={64} height={64} />
                        <p className="font-semibold">STORE LOCATOR</p>
                        <p>Find Nike retail stores near you</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
