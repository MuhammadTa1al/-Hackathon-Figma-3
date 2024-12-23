import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-[1452px] bg-[#FFFFFF] font-sans">
      {/* Fullscreen Sneaker Image */}
      <div>
        <div className="max-ss:h-[90px] bg-[#F5F5F5] leading-6 h-[57px]">
          <p className="font-bold text-[15px] text-center text-black">
            Hello Nike App
          </p>
          <p className="text-center max-ss:w-[310px] max-ss:h-[45px] text-black">
            Download the app to access everything Nike.{" "}
            <Link href="#" className="underline font-bold">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>
      <div className="relative h-screen">
        <Image
          src="/Im1.png" // Ensure the image exists in the public folder
          alt="Sneaker"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center bg-[#FFFFFF] py-12">
        <p className="text-sm text-[#111111] uppercase font-bold tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-4xl text-[#111111] md:text-6xl font-extrabold mb-4">
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

      {/* Best of Air Max Section */}
      <div className="bg-[#FFFFFF] px-6 py-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#111111] pl-7">
            Best of Air Max
          </h2>
          <div className="flex space-x-2">
            <button className="px-4 text-[#111111] py-2 font-bold rounded">
              Shop
            </button>
            <div className="flex space-x-2">
              <button className="p-2 bg-[#F5F5F5] rounded-full flex items-center justify-center font-bold text-[#111111]">
                ←
              </button>
              <button className="p-2 bg-[#E5E5E5] rounded-full flex items-center justify-center text-[#111111]">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Product 1 */}
          <div className="border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/im2.png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex">
              <div>
                <h3 className="font-medium text-lg pl-11 text-[#111111]">
                  Nike Air Max Pulse
                </h3>
                <p className="text-[#757575] text-sm pl-11">Women&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1 pl-36 text-[#111111]">₹ 13,995</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/im2.png"
              alt="Nike Air Max Pulse"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex">
              <div>
                <h3 className="font-medium text-lg pl-11 text-[#111111]">
                  Nike Air Max Pulse
                </h3>
                <p className="text-[#757575] text-sm pl-11">Men&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1 pl-36 text-[#111111]">₹ 13,995</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border border-[#FFFFFF] rounded-md p-4">
            <Image
              src="/im3.png"
              alt="Nike Air Max 97 SE"
              width={400}
              height={400}
              className="mx-auto"
            />
            <div className="mt-4 flex">
              <div>
                <h3 className="font-medium text-lg pl-11 text-[#111111]">
                  Nike Air Max 97 SE
                </h3>
                <p className="text-[#757575] text-sm pl-11">Men&apos;s Shoes</p>
              </div>
              <p className="font-bold mt-1 pl-36 text-[#111111]">₹ 16,995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="relative bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/im4.png"
            alt="Running Man"
            width={1400}
            height={700}
            className="rounded-lg mx-auto"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-[#111111]">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-[#111111]">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-[#FFFFFF] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">
            Gear Up
          </h2>
          <div className="flex justify-between mb-8">
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-[#111111] ml-96">
                Shop Men
              </h2>
              <button className="p-2 bg-[#F5F5F5] text-[#CCCCCC] rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-[#E5E5E5] text-[#111111] rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>

            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-[#111111]">Shop Women</h2>
              <button className="p-2 bg-[#F5F5F5] text-[#CCCCCC] rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-[#E5E5E5] text-[#111111] rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-12">
            {/* Men's Section */}
            <div className="text-start flex flex-col items-start">
              <Image
                src="/im5.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-[#111111] font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-[#757575] font-light">Men&apos;s Short-Sleeve</p>
              <p className="text-[#757575] font-light">Running Top</p>
              <p className="text-[#111111] text-sm pl-56 font-medium">₹ 3,895</p>
            </div>
            <div className="text-start flex flex-col items-start">
              <Image
                src="/im6.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-[#111111] font-medium">Nike Dri-FIT Challenger</p>
              <p className="text-[#757575] font-light">Men&apos;s 18cm (approx.) 2-</p>
              <p className="text-[#757575] font-light">in-1 Versatile Shorts</p>
              <p className="text-[#111111] text-sm pl-56 font-medium">₹ 2 495</p>
            </div>
            <div className="text-start flex flex-col items-start">
              <Image
                src="/im7.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-[#111111] font-medium">Nike Dri-FIT ADV Run Division</p>
              <p className="text-[#757575] font-light">Women&apos;s Long-Sleeve</p>
              <p className="text-[#757575] font-light">Running Top</p>
              <p className="text-[#111111] text-sm pl-56 font-medium">₹ 5 295</p>
            </div>

            <div className="text-start flex flex-col items-start">
              <Image
                src="/im8.png"
                alt="Men's Top"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="text-[#111111] font-medium">Nike Fast</p>
              <p className="text-[#757575] font-light">Women&apos;s Mid-Rise 7/8 Running </p>
              <p className="text-[#757575] font-light">Leggings with Pockets</p>
              <p className="text-[#111111] text-sm pl-56 font-medium">₹ 3 795</p>
            </div>
            
          </div>
        </div>
        <div className="bg-[#FFFFFF] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-12 text-left font-sans">Don&apos;t Miss</h2>

          <div className="bg-[#FFFFFF]">
      {/* Fullscreen Sneaker Image */}
      <div className="relative  ">
        <Image
          src="/im9.png" // Replace with the actual image in the public folder
          alt="Sneaker"
          width={1400}
          height={700}
          objectFit="cover" // Ensures the image fills the entire screen
          objectPosition="center" // Centers the image
          
        />
      </div>
       
        </div>
        </div>
        </div>
        <div className="relative bg-[#FFFFFF] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
        
          <h1 className="font-helvetica text-[52px]  leading-[60px] text-center font-bold text-[#111111]">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-[#111111]">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full transition">
            Shop
          </button>
        </div>
      </div>

      
      {/* Product Section */}
<div className="flex flex-col items-center justify-center min-h-screen bg-white">
  {/* Fullscreen Product Image */}
  <Image
    src="/Im10.png" // Replace with actual image path
    alt="Nike Air Max Pulse"
    layout="intrinsic"
    width={1200} // Increased width for a larger image
    height={1200} // Increased height for a larger image
    className="object-contain"
  />


</div>

<footer className="bg-white py-8 w-full">
  {/* Footer Links Section */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12  ml-4">
    {/* Column 1 */}
    <div className="text-center">
      <h3 className="font-bold mb-4 text-[#111111]">Icons</h3>
      <ul className="space-y-2 text-sm text-[#757575]">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    {/* Column 2 */}
    <div className="text-center text-[#111111]">
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 text-sm text-[#757575]">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="text-center text-[#111111]">
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 text-sm text-[#757575]">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    {/* Column 4 */}
    <div className="text-center text-[#111111]">
      <h3 className="font-bold mb-4">Kids&apo;s</h3>
      <ul className="space-y-2 text-sm text-[#757575]">
        <li>Infant & Toddler Shoes</li>
        <li>Kids&apos; Shoes</li>
        <li>Kids&apos; Jordan Shoes</li>
        <li>Kids&apos; Basketball Shoes</li>
      </ul>
    </div>
  </div>
  </footer>
    </div>
    </div>
  );
}
