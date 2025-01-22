import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  return (
    <div>
      {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.productName}
          width="348"
          height="348"
          className="rounded-t-lg"
        />
      )}
      <div>
        <div>{product.productName}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
}
