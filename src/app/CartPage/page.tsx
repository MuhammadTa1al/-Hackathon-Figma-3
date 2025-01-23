
import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Link from "next/link"
import Image from "next/image"

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Cart Section */}
      <main className="flex-grow flex flex-col lg:flex-row justify-center gap-8 py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full lg:w-2/3 max-w-3xl">
          <div className="bg-[#F5F5F5] p-4 mb-4">
            <p>Free Delivery</p>
            <p className="flex flex-wrap">
              Applies to orders of ₹ 14 000.00 or more.
              <Link href="#" className="underline ml-1">
                View details
              </Link>
            </p>
          </div>

          <h2 className="text-xl font-bold my-4">Bag</h2>

          {[1, 2].map((item) => (
            <div key={item} className="flex flex-col sm:flex-row border-b-2 py-4 gap-4">
              <div className="w-full sm:w-1/3 aspect-w-1 aspect-h-1">
                <Image src="/image/Image (13).png" alt="Product" width={100} height={100}  />
              </div>

              <div className="flex flex-col justify-between w-full sm:w-2/3">
                <div>
                  <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className="text-sm text-[#757575]">Mens Short-Sleeve Running Top</p>
                  <p className="text-sm text-[#757575]">Ashen Slate/Cobalt Bliss</p>
                  <div className="flex gap-4 mt-2">
                    <p className="text-sm text-[#757575]">Size L</p>
                    <p className="text-sm text-[#757575]">Quantity 1</p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex gap-6">
                    <Link href="">
                      <Image src="/image/Frame (26).png" alt="Edit" width={24} height={24} />
                    </Link>
                    <Link href="">
                      <Image src="/image/Frame (27).png" alt="Remove" width={24} height={24} />
                    </Link>
                  </div>
                  <p className="font-medium">MRP: ₹ 3 895.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3 max-w-md">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>₹ 20 890.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between border-y-2 py-4 my-4">
            <p className="font-bold">Total</p>
            <p className="font-bold">₹ 20 890.00</p>
          </div>
          <Link
            href="/Checkout"
            className="w-full text-center py-3 px-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
          >
            Member Checkout
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CartPage
