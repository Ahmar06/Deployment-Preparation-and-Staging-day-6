import React from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";

async function getData() {
  return await client.fetch(
    `*[_type == "product"][7..18]{
      name,
      "imageUrl": image.asset->url,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }`
  );
}


export default async function ShopGrid() {
  const data = await getData();
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gray-100 py-6 h-40">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-semibold">Shop Grid Default</h2>
          <p className="text-sm text-pink-500">
            Home . Pages . Shop Grid Default
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            Ecommerce Accesories & Fashion Item
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-8 mb-24">
          {data.map((product:any) => (
            <div
              key={product.id}
              className="shadow-md  rounded-md  justify-items-center"
            >
              <div className="h-56 w-56  justify-items-center content-center bg-gray-200">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={0}
                  width={0}
                  className=" h-36 w-36 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="text-pink-500 font-semibold ">{product.name}</h4>
                <div className=" gap-6 ">
                  <div className="text-pink-500 text-lg">{product.description}</div>
                  <div className=" text-lg">Price:${product.price}</div>
                  <div className="text-gray-500 line-through"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
