import { ArrowRight, Play } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { MotionUp } from "../ui/animate";

const Hero = () => {
  const navigate: NavigateFunction = useNavigate(); // React Router navigation handler

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

          {/* Mobile-only (visible on small screens) */}
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
