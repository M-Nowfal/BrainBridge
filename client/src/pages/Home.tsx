import Acheivements from "@/components/home/Acheivements";
import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import Slogan from "@/components/home/Slogan";
import WhyBrainBridge from "@/components/home/WhyBrainBridge";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    // Main container for the homepage
    <main className="space-y-5 mt-30 flex flex-col">
      <Hero />
      <Acheivements />
      <WhyBrainBridge />
      <PopularCourses />
      <Slogan />
    </main>
  );
};

export default Home;
