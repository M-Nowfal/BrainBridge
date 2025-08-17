import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MotionUp } from "@/components/ui/animate";

/**
 * PageNotFound Component
 * ----------------------
 * Renders a clean and animated 404 page with:
 *  - A theme toggle for light/dark mode
 *  - Animated illustrations/messages using MotionUp
 *  - A redirect button guiding users back to the homepage
 */
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh text-center px-4">
      
      {/* Top-right theme toggle button */}
      <div className="absolute right-5 top-4">
        <ThemeToggle />
      </div>

      {/* 404 illustration with upward animation */}
      <MotionUp immediate className="w-64">
        <img src="/404.png" alt="404" />
      </MotionUp>

      {/* Informative error message with fade/slide animation */}
      <MotionUp immediate className="mt-2 text-lg text-gray-600 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
        It might have been moved, deleted, or never existed in the first place.
      </MotionUp>

      {/* Redirect button styled with gradient */}
      <MotionUp immediate className="mt-6">
        <Link to={"/"}>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-gradient-to-t from-emerald-500 to-sky-600"
          >
            Back to Home
          </Button>
        </Link>
      </MotionUp>
    </div>
  );
};

export default PageNotFound;
