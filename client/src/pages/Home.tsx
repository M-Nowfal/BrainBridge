import Acheivements from "@/components/home/Acheivements";
import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import Slogan from "@/components/home/Slogan";
import WhyBrainBridge from "@/components/home/WhyBrainBridge";


const Home = () => {

  return (
    <main className="space-y-5 mt-30 flex flex-col">
      <Hero />
      <Acheivements />
      <WhyBrainBridge />
      <PopularCourses />
      <Slogan />
    </main>
  );
}

export default Home;