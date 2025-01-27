import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
  };

export default function page(){
    return(
        <div className="font-bold text-3xl h-screen content-center justify-items-center bg-purple-100">
            <h1>Pages</h1>
        </div>
    )
}