import Link from "next/link";


export default function Header() {
  return (
    <div className="p-2 flex justify-evenly items-center w-[1425px] h-[45px] left-16 top-16">
      <div>
        <h1 className="font-bold text-3xl">Hekto</h1>
      </div>
      <div>
        <ul className="flex gap-3 hover:rgba(251, 46, 134, 1)">
          <li className="hover:text-pink-500 hover:underline"><Link href="/">Home</Link></li>
          <li className="hover:text-pink-500 hover:underline"><Link href="/products">Products</Link></li>
          <li className="hover:text-pink-500 hover:underline"><Link href="/page">Pages</Link></li>
          <li className="hover:text-pink-500 hover:underline"><Link href="/">Blogs</Link></li>
          <li className="hover:text-pink-500 hover:underline"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-pink-500 hover:underline"><Link href="/contact">Contact</Link> </li>
        </ul>
      </div>
      <div>
        <input className="border-black" value="Search" type="text" />
        <button className="bg-pink-600 text-white hover:bg-pink-500">Search</button>
      </div>
    </div>
  );
}
