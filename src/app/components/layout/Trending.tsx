
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";



async function getData() {
  const fetchData = await client.fetch(`*[_type == "product"][0..5]{
      name,
      image,
      price,
      discription,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
  }`);
  return fetchData;
}

const Trending = async () => {
  const data = await getData();
  // console.log(data)
  return (
    <div>
      {data.map((res:any) => {
        return (
          <div>
            <div>
              <div className="justify-items-center mt-8">
                <h1 className="font-bold text-4xl text-blue-900">
                  Trending Products
                </h1>
              </div>
              <div className=" flex justify-center mt-7 gap-12">
                <div className="bg-white-600 h-[250px] w-[190px] p-1 border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-300 content-center place-items-center">
                    <Image
                      src="/image/latest1.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110"
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[190px] p-1 border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-300 content-center place-items-center">
                    <Image
                      src="/image/latest5.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110 "
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[190px] p-1 border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-300 content-center place-items-center">
                    <Image
                      src="/image/trending2.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110"
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[190px] p-1 border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-300 content-center place-items-center">
                    <img
                      src="/image/latest4.png"
                      alt="product"
                      className="w-[120px] hover:scale-110"
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-5 justify-center mb-16">
                <div className="w-[300px] bg-pink-100">
                  <div className="">
                    <div className="ml-7 mt-5 ">
                      <p className="text-blue-900 font-bold text-xl hover:scale-110">
                        23% off in all products
                      </p>
                      <button className="text-pink-500 underline hover:text-pink-600">
                        Shop Now
                      </button>
                    </div>
                    <div className="justify-items-end">
                      <img
                        src="/image/trending3.png"
                        alt="product"
                        className="w-[150px] hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-pink-100">
                  <div className="">
                    <div className="ml-7 mt-5 ">
                      <p className="text-blue-900 font-bold text-xl hover:scale-110">
                        23% off in all products
                      </p>
                      <button className="text-pink-500 underline hover:text-pink-600 ">
                        View Collection{" "}
                      </button>
                    </div>
                    <div className="justify-items-end">
                      <img
                        src="/image/trending2.png"
                        alt="product"
                        className="w-[150px] hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[260px] ">
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <div className="w-[80px] h-[80px] bg-slate-200">
                        <img
                          src="/image/trending5.png"
                          alt="product"
                          className="w-[100px] hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Executive Seat chair</p>
                        <p className="text-sm">$32.00</p>
                      </div>
                    </div>
                    <div className="flex mt-2 gap-3 items-center">
                      <div className="w-[80px] h-[80px] bg-slate-200">
                        <img
                          src="/image/trending6.png"
                          alt="product"
                          className="w-[100px] hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Executive Seat chair</p>
                        <p className="text-sm">$32.00</p>
                      </div>
                    </div>
                    <div className="flex mt-2 gap-3 items-center">
                      <div className="w-[80px] h-[80px] bg-slate-200">
                        <Image
                          src="/image/trending7.png"
                          alt="product"
                          width={100}
                          height={0}
                          className="w-[100px] hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Executive Seat chair</p>
                        <p className="text-sm">$32.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
