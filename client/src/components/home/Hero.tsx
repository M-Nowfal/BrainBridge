import { ArrowRight, Play } from "lucide-react";
// Icon components for visual cues (arrow + play button)

import { Badge } from "../ui/badge";
// Reusable badge component for highlighting text

import { Button } from "../ui/button";
// Custom button component with variants (themed/outline/etc.)

import { useNavigate, type NavigateFunction } from "react-router-dom";
// React Router hook for programmatic navigation between pages

import { MotionUp } from "../ui/animate";
// Motion wrapper for entry animation (fade/slide up)

const Hero = () => {
  // React Router navigation handler
  const navigate: NavigateFunction = useNavigate();

  return (
    // Animate the whole Hero section when it mounts
    <MotionUp immediate>
      <section className="flex flex-col items-center justify-center">
        
        {/* Tagline badge */}
        <Badge variant="outline" className="bg-gradient-to-r from-sky-400/20 to-emerald-500/20">
          Bridge the Gap to Knowledge
        </Badge>

        {/* Headline + description */}
        <div className="w-5/6 max-w-3xl">
          <h1 className="bg-gradient-to-r from-sky-700 to-emerald-500 bg-clip-text text-transparent font-bold text-5xl md:text-6xl text-center my-7 leading-15">
            Transform Your Learning Journey
          </h1>

          {/* Mobile-only CTA button (visible on small screens) */}
          <div className="sm:hidden flex justify-center mb-8">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-gradient-to-r from-sky-600 to-emerald-500/20 animate-bounce hover:scale-110 hover:from-emerald-500 hover:to-sky-500"
              onClick={() => navigate("/auth/register")}  
            >
              Get Started
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-xl text-center text-muted-foreground">
            Join thousands of learners mastering new skills through interactive courses, collaborative projects, 
            and expert-led instruction. Start building your future today.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col w-[95%] justify-center mx-5 gap-5 sm:flex-row mt-10">
          {/* Primary CTA: Register */}
          <Button
            variant="themed"
            className="group sm:w-2xs font-semibold text-lg py-6 hover:scale-103 hover:shadow-md"
            onClick={() => navigate("/auth/register")}
          >
            Start Learning Free
            <ArrowRight className="size-5 mt-1 ms-2 group-hover:scale-120 group-hover:translate-x-4 transition-all duration-300" />
          </Button>

          {/* Secondary CTA: Explore courses */}
          <Button
            variant="outline"
            className="group sm:w-2xs font-semibold text-lg py-6 hover:scale-103 hover:shadow-md"
            onClick={() => navigate("/auth/login")}
          >
            <Play className="size-5 me-2 mt-0.5 group-hover:scale-120 transition-all duration-300" />
            Explore Courses
          </Button>
        </div>
      </section>
    </MotionUp>
  );
};

export default Hero;
// Hero section: Highlights platform value, tagline, and provides primary/secondary CTAs
