import Image from "next/image";

export default function Home() {
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
            <p className="text-pink-500">Best Furniture For Your Castle....</p>
            <h1 className="text-black font-bold text-5xl mt-6">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-400 mt-1 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
          <div>
            <button className="bg-pink-600 rounded-md py-3 px-7 hover:bg-pink-500">
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

      {/* Features div */}

      <div>
        <div className="justify-items-center ">
          <h1 className="text-4xl font-bold text-blue-900  mt-6">
            Featured Products
          </h1>
        </div>
        <div className="flex mt-5 justify-center gap-x-16 ">
          <div className="bg-white-600 h-[250px] w-[180px] border shadow-xl  ">
            <div className="h-[150px] w-[180px] bg-gray-200 content-center place-items-center">
              <Image
                src="/image/feature1.png"
                alt="product"
                width={120}
                height={0}
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
                Cantilever chair
              </p>
              <p className="font-semibold">Code - Y523201</p>
              <p className="font-semibold text-sm">$42.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Features Products End */}

      {/* Latest Product */}
      <div>
        <div className="justify-items-center mt-10">
          <h1 className="text-blue-900 font-bold text-4xl">Latest Products</h1>
        </div>
        {/* nav bar */}
        <div className="flex gap-12 font-semibold mt-3 justify-center">
          <p className="hover:text-pink-500 hover:underline">New Arrival</p>
          <p className="hover:text-pink-500 hover:underline">Best Seller</p>
          <p className="hover:text-pink-500 hover:underline">Featured</p>
          <p className="hover:text-pink-500 hover:underline">Special Offer</p>
        </div>
        {/* nav bar end */}
        <div className="flex justify-center mt-3 gap-10">
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest1.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest2.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest3.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold ">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-10">
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest4.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold ">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest5.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold ">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
          <div className="bg-white mt-10 h-[280px] w-[280px] border shadow-2xl justify-items-center">
            <div className="bg-gray-200 w-[280px] h-[230px] content-center place-items-center">
              <Image
                src="/image/latest6.png"
                alt="picture"
                width={150}
                height={0}
                className="w-[150px]"
              />
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-6 font-bold ">Comfort Handy Craft</p>
              <p className="text-sm mr-1">$42.00</p>
              <p className="text-sm text-pink-500">$65.00</p>
            </div>
          </div>
        </div>
        {/* Latest Product End */}

        <div className="w-[1425px] h-[400px] bg-purple-100 mt-24 flex justify-evenly">
          <div className="w-[800px] h-[400px] bg-purple-100 flex  place-items-center">
            <div>
              <div className="bg-purple-200 rounded-full">
                <Image
                  src="/image/promotion2.png"
                  alt="promotion"
                  width={300}
                  height={0}
                  className="w-[300px] m-20 ml-2"
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
      {/* trending product */}
      <div className="">
        <div className="justify-items-center mt-8">
          <h1 className="font-bold text-4xl text-blue-900">Trending Products</h1>
        </div>
        <div className=" flex justify-center mt-7 gap-12">
          <div className="bg-white-600 h-[250px] w-[190px] p-1 border shadow-xl items-center">
            <div className="h-[150px] w-[180px] bg-gray-300 content-center place-items-center">
              <Image
                src="/image/latest1.png"
                alt="product"
                width={120}
                height={0}
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                className="w-[120px] "
              />
            </div>
            <div className="justify-items-center">
              <p className="font-semibold text-pink-500 text-lg mt-2">
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
                <p className="text-blue-900 font-bold text-xl">23% off in all products</p>
                <button className="text-pink-600 underline hover:text-pink-700">Shop Now</button>
              </div>
              <div className="justify-items-end">
                <img src="/image/trending3.png" alt="product" className="w-[150px] "/>
              </div>
            </div>
          </div>
          <div className="w-[300px] bg-pink-100">
            <div className="">
              <div className="ml-7 mt-5 ">
                <p className="text-blue-900 font-bold text-xl">23% off in all products</p>
                <button className="text-pink-600 underline hover:text-pink-700">View Collection </button>
              </div>
              <div className="justify-items-end">
                <img src="/image/trending2.png" alt="product" className="w-[150px] "/>
              </div>
            </div>
          </div>
          <div className="w-[260px] ">
            <div className="">
              <div className="flex gap-3 items-center">
                <div className="w-[80px] h-[80px] bg-slate-200">
                  <img src="/image/trending5.png" alt="product"
                  className="w-[100px]" />
                </div>
                <div>
                  <p className="font-bold">Executive Seat chair</p>
                  <p className="text-sm">$32.00</p>
                </div>
              </div>
              <div className="flex mt-2 gap-3 items-center">
                <div className="w-[80px] h-[80px] bg-slate-200">
                  <img src="/image/trending6.png" alt="product"
                  className="w-[100px]" />
                </div>
                <div>
                  <p className="font-bold">Executive Seat chair</p>
                  <p className="text-sm">$32.00</p>
                </div>
                </div>
              <div className="flex mt-2 gap-3 items-center">
                <div className="w-[80px] h-[80px] bg-slate-200">
                  <Image src="/image/trending7.png" alt="product"
                  width={100}
                  height={0}
                  className="w-[100px]" />
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
}
