import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { CiShoppingCart } from "react-icons/ci";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProductDetails() {
  return (
    <div className="w-[1452px] bg-[#ffffff]">
      <section className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-between p-6 rounded-lg bg-[#ffffff] max-w-[1200px] mx-auto mt-4 py-8 lg:gap-20">
        {/* Left Section - Image */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2">
          <Image
            src="/im11.png"  // Update this to use AirForce image if required
            alt="Nike Air Force 1 PLT.AF.ORM Shoe Image"
            className="w-full h-auto object-cover"
            width={400}
            height={400}
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
          <h2 className={`text-xl lg:text-4xl font-medium text-[#111111] mb-4 ${poppins.className}`}>
            Nike Air Force 1 PLT.AF.ORM
          </h2>
          <p className={`text-sm font-light text-[#111111] mb-6 leading-7 ${poppins.className}`}>
            Turn style on its head with this crafted take on the Air Jordan 1 Mid.
            Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
            Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className={`text-4xl font-medium text-[#111111] mb-6 ${poppins.className}`}>
            ₹ 8,695.00
          </p>
          <button className="flex items-center justify-center bg-[#111111] text-[#ffffff] py-2 px-6 rounded-md transition duration-300 hover:bg-gray-800">
            <CiShoppingCart className="w-6 h-6 mr-2" />
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}
