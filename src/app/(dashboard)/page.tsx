import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import Latest from "../components/layout/Latest";
import Trending from "../components/layout/Trending";


export default async function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Latest/>
      <Trending/>
    </div>
  );
}
