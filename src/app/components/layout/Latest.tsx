"use client";
import Image from 'next/image'

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Install and configure Sanity client

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"][3..8]{
        id,
        name,
        price,
        description,
        discountPrice,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='font-bold  text-center'></div>;
  }

  return (
    <div>

    <div className="my-8">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Latest Products
      </h2>
      <div className="flex justify-center space-x-6 mb-4">
        <button className=" font-semibold text-gray-700 hover:text-pink-700">
          New Arrival
        </button>
        <button className="font-semibold text-gray-700 hover:text-pink-700">
          Best Seller
        </button>
        <button className=" font-semibold text-gray-700 hover:text-pink-700">
          Featured
        </button>
        <button className=" font-semibold text-gray-700 hover:text-pink-700">
          Special Offer
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 px-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow-md border rounded-lg overflow-hidden"
          >
            <div className="bg-gray-200 place-items-center content-center">
              <Image
                className="w-50 h-48"
                src={product.image?.asset?.url}
                alt={product.name}
                width={0}
                height={0}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <h3 className="">{product.description}</h3>
              <div className="flex items-center space-x-2">
                <p className="text-pink-600 font-bold">${product.price}</p>
                <p className="text-pink-600 font-bold">
                  {product.discountPercentage}
                </p>
                {product.price && (
                  <p className="text-gray-500 line-through">
                    {product.discountPercentage}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-[1425px] h-[400px] bg-purple-100 mt-24 flex justify-evenly">
             <div className="w-[800px] h-[400px] bg-purple-100 flex  place-items-center">
               <div>
                 <div className="bg-purple-200 rounded-full">
                   <Image
                     src="/image/promotion2.png"
                     alt="promotion"
                     width={300}
                     height={0}
                     className="w-[300px] m-20 ml-2 hover:scale-110"
                   />
                 </div>
               </div>
               <div className="ml-7">
                 <h1 className="font-bold text-3xl">
                   Unique Features Of leatest & Trending Poducts
                 </h1>
                 <div className="mt-4">
                   <p className="text-gray-400">
                     All frames constructed with hardwood solids and laminates
                   </p>
                   <p className="text-gray-400 mt-1">
                     Reinforced with double wood dowels, glue, screw - nails corner
                     blocks and machine nails
                   </p>
                   <p className="text-gray-400 mt-1">
                     Arms, backs and seats are structurally reinforced
                   </p>
                 </div>
                 <div className="flex mt-6">
                   <div>
                     <button className="bg-pink-600 px-6 py-2 hover:bg-pink-500">
                       Add To Cart
                     </button>
                   </div>
                   <div className="ml-12 ">
                     <p className="text-sm">B&B Italian Sofa </p>
                     <p className="text-sm">$32.00</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
    </div>
  );
};

export default LatestProducts;




// const Latest = () => {
//   return (
//    <div>
//            <div className="justify-items-center mt-10">
//              <h1 className="text-blue-900 font-bold text-4xl">Latest Products</h1>
//            </div>
//            {/* nav bar */}
//            <div className="flex gap-12 font-semibold mt-3 justify-center">
//              <p className="hover:text-pink-500 hover:underline">New Arrival</p>
//              <p className="hover:text-pink-500 hover:underline">Best Seller</p>
//              <p className="hover:text-pink-500 hover:underline">Featured</p>
//              <p className="hover:text-pink-500 hover:underline">Special Offer</p>
//            </div>
//            {/* nav bar end */}
//            <div className="flex justify-center mt-3 gap-10">
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest1.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest2.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest3.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//            </div>
//            <div className="flex justify-center mt-6 gap-10">
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest4.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest5.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//              <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
//                <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
//                  <Image
//                    src="/image/latest6.png"
//                    alt="picture"
//                    width={150}
//                    height={0}
//                    className="w-[150px] hover:scale-110"
//                  />
//                </div>
//                <div className="flex items-center mt-4">
//                  <p className="mr-6 font-bold hover:text-pink-600">Comfort Handy Craft</p>
//                  <p className="text-sm mr-1">$42.00</p>
//                  <p className="text-sm text-pink-500">$65.00</p>
//                </div>
//              </div>
//            </div>

//            <div className="w-[1425px] h-[400px] bg-purple-100 mt-24 flex justify-evenly">
//              <div className="w-[800px] h-[400px] bg-purple-100 flex  place-items-center">
//                <div>
//                  <div className="bg-purple-200 rounded-full">
//                    <Image
//                      src="/image/promotion2.png"
//                      alt="promotion"
//                      width={300}
//                      height={0}
//                      className="w-[300px] m-20 ml-2 hover:scale-110"
//                    />
//                  </div>
//                </div>
//                <div className="ml-7">
//                  <h1 className="font-bold text-3xl">
//                    Unique Features Of leatest & Trending Poducts
//                  </h1>
//                  <div className="mt-4">
//                    <p className="text-gray-400">
//                      All frames constructed with hardwood solids and laminates
//                    </p>
//                    <p className="text-gray-400 mt-1">
//                      Reinforced with double wood dowels, glue, screw - nails corner
//                      blocks and machine nails
//                    </p>
//                    <p className="text-gray-400 mt-1">
//                      Arms, backs and seats are structurally reinforced
//                    </p>
//                  </div>
//                  <div className="flex mt-6">
//                    <div>
//                      <button className="bg-pink-600 px-6 py-2 hover:bg-pink-500">
//                        Add To Cart
//                      </button>
//                    </div>
//                    <div className="ml-12 ">
//                      <p className="text-sm">B&B Italian Sofa </p>
//                      <p className="text-sm">$32.00</p>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//   )
// }

// export default Latest
