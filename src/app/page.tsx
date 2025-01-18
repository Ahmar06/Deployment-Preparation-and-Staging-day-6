import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import Latest from "./components/layout/Latest";
import Trending from "./components/layout/Trending";


// async function getData(){
//   const fetchData = await client.fetch(`*[_type == "product"][0..5]{
//     name,
//     "imageUrls":image.asset->url,
//     price,
//     discription,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category,
// }`)
// return fetchData
// }


export default async function Home() {
  // const data = await getData()
  //   console.log(data)
  return (
    <div>
      <Hero/>
      <Features/>
      <Latest/>
      <Trending/>
    </div>
  );
}
