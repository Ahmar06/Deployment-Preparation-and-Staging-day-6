import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact-Us",
  };

export default function contact(){
    return(
        <div className="font-bold text-3xl">
            <h1>Contact-us</h1>
        </div>
    )
}