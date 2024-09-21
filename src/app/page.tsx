import About from "@/components/pages/home/about/about";
import Banner from "@/components/pages/home/banner/banner";

export default function Home() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      <div className=" ">
        <Banner />
        <About />
      </div>
    
    </div>
  );
}
