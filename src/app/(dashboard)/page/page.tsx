import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
  };

export default function page(){
    return(
        <div className="font-bold  bg-slate-300">
            about
        </div>
    )
}