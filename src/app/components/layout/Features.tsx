"use client"
import React, { useEffect, useState } from 'react';
import {client} from '@/sanity/lib/client'; 
import Image from 'next/image';

const Features = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    client
      .fetch(`*[_type == "product"][0..2]{
        id,
        name,
        discription,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category,
        price,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='font-bold  text-center'>Loading products...</div>;
  }

  return (
    <div className='mt-12 grid place-items-center'>
    <h1 className='font-bold text-4xl text-blue-800 '>Features Products</h1>
    <div className='flex justify-center'>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-10 pl-6 ml-56">
      {products.map((product:any) => (
        <div
        key={product.id}
          className="bg-white shadow-md border rounded-lg">
          <div className='bg-gray-200 place-items-center content-center'>
          <Image
            className="w-56 h-48 bg-gray-200 "
            src={product.image?.asset?.url}
            alt={product.name}
            width={0}
            height={0}
            />
            </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-600 font-bold">{product.category}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-pink-600 font-bold">${product.price}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Features;





// const Features = () => {
//   return (
//       <div>
//               <div className="justify-items-center ">
//                 <h1 className="text-4xl font-bold text-blue-900  mt-6">Featured Products</h1>
//               </div>
//               <div className="flex mt-5 justify-center gap-x-16 ">
//                 <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl  ">
//                   <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
//                     <Image
//                       src="/image/feature1.png"
//                       alt="product"
//                       width={120}
//                       height={0}
//                       className="w-[120px] hover:scale-110 "
//                     />
//                   </div>
//                   <div className="justify-items-center">
//                     <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
//                       Cantilever chair
//                     </p>
//                     <p className="font-semibold">Code - Y523201</p>
//                     <p className="font-semibold text-sm">$42.00</p>
//                   </div>
//                 </div>
//                 <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
//                   <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
//                     <Image
//                       src="/image/feature2.png"
//                       alt="product"
//                       width={120}
//                       height={0}
//                       className="w-[120px] hover:scale-110 "
//                     />
//                   </div>
//                   <div className="justify-items-center">
//                     <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
//                       Cantilever chair
//                     </p>
//                     <p className="font-semibold">Code - Y523201</p>
//                     <p className="font-semibold text-sm">$42.00</p>
//                   </div>
//                 </div>
//                 <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
//                   <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
//                     <Image
//                       src="/image/feature3.png"
//                       alt="product"
//                       width={120}
//                       height={0}
//                       className="w-[120px] hover:scale-110  "
//                     />
//                   </div>
//                   <div className="justify-items-center">
//                     <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
//                       Cantilever chair
//                     </p>
//                     <p className="font-semibold">Code - Y523201</p>
//                     <p className="font-semibold text-sm">$42.00</p>
//                   </div>
//                 </div>
//                 <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
//                   <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
//                     <Image
//                       src="/image/feature4.png"
//                       alt="product"
//                       width={120}
//                       height={0}
//                       className="w-[120px] hover:scale-110  "
//                     />
//                   </div>
//                   <div className="justify-items-center">
//                     <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
//                       Cantilever chair
//                     </p>
//                     <p className="font-semibold">Code - Y523201</p>
//                     <p className="font-semibold text-sm">$42.00</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//   )
// }

// export default Features
