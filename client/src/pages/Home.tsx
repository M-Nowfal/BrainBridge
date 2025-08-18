// Importing section-specific components to build the Home page layout
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
    // Main container for the homepage with vertical spacing & layout styling
    <main className="space-y-5 mt-30 flex flex-col">
      {/* Hero section: First impression of the platform */}
      <Hero />

      {/* Achievements section: Displays platform milestones or success metrics */}
      <Acheivements />

      {/* WhyBrainBridge section: Highlights key value propositions */}
      <WhyBrainBridge />

      {/* PopularCourses section: Showcases trending or recommended courses */}
      <PopularCourses />

      {/* Slogan/CTA section: Motivational tagline or final call-to-action */}
      <Slogan />
    </main>
  );
};

export default Home;
