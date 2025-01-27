import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Products(){
    return(
        <div className="font-bold text-3xl h-screen content-center justify-items-center bg-purple-100">
            <h1>Products</h1>
        </div>
    )
}