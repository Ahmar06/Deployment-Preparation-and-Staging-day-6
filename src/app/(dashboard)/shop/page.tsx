import React from "react";

const products = [
  {
    id: 1,
    title: "Vel elit euismod",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/bag1.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Ultrices condimentum imperdiet",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/sofa1.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "Vitae suspendisse sed",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/chair1.png", // Replace with actual image path
  },
  {
    id: 4,
    title: "Sed at fermentum",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/sofa2.png", // Replace with actual image path
  },
  {
    id: 5,
    title: "Fusce pellentesque at",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/watch1.png", // Replace with actual image path
  },
  {
    id: 6,
    title: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/watch2.png", // Replace with actual image path
  },
  {
    id: 7,
    title: "Sollicitudin amet orci",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/watch3.png", // Replace with actual image path
  },
  {
    id: 8,
    title: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/headphone2.png", // Replace with actual image path
  },
  {
    id: 9,
    title: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/headphone.png", // Replace with actual image path
  },
  {
    id: 10,
    title: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/bag2.png", // Replace with actual image path
  },
  {
    id: 11,
    title: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/chair2.png", // Replace with actual image path
  },
  {
    id: 12,
    title: "Ultrices mauris sit",
    price: "$26.00",
    oldPrice: "$40.00",
    image: "/image/camera.png", // Replace with actual image path
  },
];

export default function ShopGrid() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-semibold">Shop Grid Default</h2>
          <p className="text-sm text-gray-500">
            Home . Pages . Shop Grid Default
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            Ecommerce Accesories & Fashion Item
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-6 mt-8 mb-24">
          {products.map((product) => (
            <div key={product.id} className="shadow-md  rounded-md  justify-items-center">
              <div className="h-56 w-56  justify-items-center content-center ">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" h-36 w-36 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-800">{product.title}</h4>
                <div className="flex gap-6 ">
                  <div className="text-pink-500 text-lg">{product.price}</div>
                  <div className="text-gray-500 line-through">
                    {product.oldPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
