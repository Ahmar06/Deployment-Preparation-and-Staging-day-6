import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
      <div>
              <div className="justify-items-center ">
                <h1 className="text-4xl font-bold text-blue-900  mt-6">Featured Products</h1>
              </div>
              <div className="flex mt-5 justify-center gap-x-16 ">
                <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl  ">
                  <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
                    <Image
                      src="/image/feature1.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110 "
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
                    <Image
                      src="/image/feature2.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110 "
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
                    <Image
                      src="/image/feature3.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110  "
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
                <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl items-center">
                  <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
                    <Image
                      src="/image/feature4.png"
                      alt="product"
                      width={120}
                      height={0}
                      className="w-[120px] hover:scale-110  "
                    />
                  </div>
                  <div className="justify-items-center">
                    <p className="font-semibold text-pink-500 text-lg mt-2 hover:text-pink-600 hover:scale-105">
                      Cantilever chair
                    </p>
                    <p className="font-semibold">Code - Y523201</p>
                    <p className="font-semibold text-sm">$42.00</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Features
