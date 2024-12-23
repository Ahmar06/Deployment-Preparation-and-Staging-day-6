import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-[1425px] h-[400px] bg-slate-200 content-center">
        <div className="flex gap-14 justify-center">
          <div>
            <div>
              <h1 className="font-bold text-4xl">Hekto</h1>
              <input
                type="email"
                // value="Enter Email Address"
                className="mt-7 p-2 text-gray-400"
              />
              <button className="bg-pink-500 text-white px-4 p-2">
                Sign Up
              </button>
            </div>
            <div>
              <div>
                <p className="font-bold mt-7">Contact Info</p>
                <p className="text-gray-400">17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h1 className="font-bold text-2xl">Catagories</h1>
              </div>
              <div className="mt-4">
                <p className="mt-3 text-gray-400">Laptops & Computers</p>
                <p className="mt-3 text-gray-400">Cameras & Photography</p>
                <p className="mt-3 text-gray-400">Smart Phones & Tablets</p>
                <p className="mt-3 text-gray-400">Video Games & Consoles</p>
                <p className="mt-3 text-gray-400">Waterproof Headphones</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h1 className="font-bold text-2xl">Customer Care</h1>
              </div>
              <div className="mt-4">
                <p className="mt-3 text-gray-400">My Account</p>
                <p className="mt-3 text-gray-400">Discount</p>
                <p className="mt-3 text-gray-400">Returns</p>
                <p className="mt-3 text-gray-400">Orders History</p>
                <p className="mt-3 text-gray-400">Order Tracking</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h1 className="font-bold text-2xl">Pages</h1>
              </div>
              <div className="mt-4">
                <p className="mt-3 text-gray-400">Blog</p>
                <p className="mt-3 text-gray-400">Browse the Shop</p>
                <p className="mt-3 text-gray-400">Category</p>
                <p className="mt-3 text-gray-400">Pre-Built Pages</p>
                <p className="mt-3 text-gray-400">Visual Composer Elements</p>
                <p className="mt-3 text-gray-400">WooCommerce Pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1425] h-[60px] bg-purple-200 justify-items-center content-center ">
        <p className="font-bold text-gray-500 ">©Webecy - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
