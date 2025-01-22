"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function dataProduct() {
      const dataProducts: Product[] = await client.fetch(allProducts);
      setProducts(dataProducts);
    }
    dataProduct();
  }, []);
  return (
    <div>
      {/* All Products Section */}
      <Header />
      <main className="w-[1440px] p-12">
        {/* head line section */}
        <section className="flex justify-between items-center h-6 font-sans">
          <div>
            <p className="font-bold">New (500)</p>
          </div>
          <div className="flex  gap-4">
            <div className="flex items-center gap-2 ">
              Hide Filters{" "}
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
              {" "}
              <label>Sort By</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">b</option>
                <option value="">c</option>
              </select>
            </div>
          </div>
        </section>
        {/*end  head line section */}

        <section className="flex gap-12 my-8 ">
          <div className=" w-[260px] font-sans overflow-x-auto h-[600px]">
            <div className="flex flex-col gap-3 w-[192px] pb-4">
              <Link href="Shoes" className="font-bold text-sm">
                Shoes{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Sports Bras
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Hoodies & Sweatshirts{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Jackets
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Trousers & Tights
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Shorts{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Tracksuits{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Jumpsuits & Rompers
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Skirts & Dresses{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Socks{" "}
              </Link>
              <Link href="Shoes" className="font-bold text-sm">
                Accessories & Equipment{" "}
              </Link>
            </div>
            {/* gender content */}

            <div className="flex flex-col font-sans my-4 border-t-2 mr-4  ">
              <p className="font-bold  my-2 ">Gender</p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Men
              </p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Women
              </p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Unisex
              </p>
            </div>

            {/* kid checkbox section */}
            <div className="flex flex-col font-sans my-4 border-t-2 mr-4 ">
              <p className="font-bold  my-2">Kids</p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Boys
              </p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Grils
              </p>
            </div>

            {/* shop by price */}

            <div className="flex flex-col font-sans my-4 border-t-2 mr-4 ">
              <p className="font-bold  my-2">Shop By Price</p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                Under ₹ 2 500.00
              </p>
              <p className="flex gap-2 ">
                {" "}
                <input
                  type="checkbox"
                  name="Men"
                  id=""
                  className="w-4 inlineblock"
                />
                ₹ 2 501.00 - ₹ 7 500.00
              </p>
            </div>
          </div>

          <div className=" w-[1092px]   grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product._id} className="shadow-xl rounded-b-lg">
                <Link href={`/products ${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width="348"
                    height="348"
                    className="rounded-t-lg"
                  />
                )}
                <div className="font-sans p-2">
                  <p className="text-[#9E3500]">{product.status}</p>
                  <p className="">{product.productName}</p>
                  <p className="text-[#757575] text-sm">{product.category}</p>
                  <p className="text-[#757575] text-sm">{product.colors}</p>
                  <p className="text-[#9E3500]">{product.inventory}</p>
                  <p>MRP : ₹ {product.price}.00</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/*end All Products Section */}
      <Footer />
    </div>
  );
};

export default Page;


