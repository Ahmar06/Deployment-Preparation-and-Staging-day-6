import React from "react";

// const products = [
//   {
//     id: 1,
//     title: "Vel elit euismod",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/bag1.png",
//   },
//   {
//     id: 2,
//     title: "Ultrices condimentum imperdiet",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/sofa1.png",
//   },
//   {
//     id: 3,
//     title: "Vitae suspendisse sed",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/chair1.png",
//   },
//   {
//     id: 4,
//     title: "Sed at fermentum",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/sofa2.png",
//   },
//   {
//     id: 5,
//     title: "Fusce pellentesque at",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/watch1.png",
//   },
//   {
//     id: 6,
//     title: "Vestibulum magna laoreet",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/watch2.png",
//   },
//   {
//     id: 7,
//     title: "Sollicitudin amet orci",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/watch3.png",
//   },
//   {
//     id: 8,
//     title: "Ultrices mauris sit",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/headphone2.png",
//   },
//   {
//     id: 9,
//     title: "Ultrices mauris sit",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/headphone.png",
//   },
//   {
//     id: 10,
//     title: "Ultrices mauris sit",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/bag2.png",
//   },
//   {
//     id: 11,
//     title: "Ultrices mauris sit",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/chair2.png",
//   },
//   {
//     id: 12,
//     title: "Ultrices mauris sit",
//     price: "$26.00",
//     oldPrice: "$40.00",
//     image: "/image/camera.png",
//   },
// ];
import { client } from '@/sanity/lib/client';

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
                <img
                  src={product.imageUrl}
                  alt={product.name}
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
