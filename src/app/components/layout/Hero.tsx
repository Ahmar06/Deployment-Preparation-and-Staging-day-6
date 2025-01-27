import Image from 'next/image'
import React from 'react'



const Hero = () => {
  return (
    <div>
      <div className="bg-purple-100 flex w-[1425px] h-[600px] ">
              <div className="">
                <Image
                  src="/image/hanging lamp.png"
                  alt="picture"
                  width={387}
                  height={350}
                  className="h-[350px] w-[387px] flex top-32 ml-16"
                />
              </div>
              <div className="mt-16 mr-28">
                <div className="w-[644px] h-[248px] mt-24 ">
                  <p className="text-pink-500 hover:text-pink-600">Best Furniture For Your Castle....</p>
                  <h1 className="text-black font-bold text-5xl mt-6">
                    New Furniture Collection Trends in 2020
                  </h1>
                  <p className="text-gray-400 mt-1 pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                    est adipiscing in phasellus non in justo.
                  </p>
                </div>
                <div>
                  <button className="bg-pink-500 rounded-md py-3 px-7 hover:bg-pink-600">
                    Shop Now
                  </button>
                </div>
              </div>
              <div>
                <div className=" bg-purple-200 rounded-full">
                  <Image
                    src="/image/promotion.png"
                    alt="pic"
                    width={600}
                    height={0}
                    className="mt-28 -ml-10 w-[600px]"
                  />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero
