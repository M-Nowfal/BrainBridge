import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MotionLeft, MotionRight } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  return (
    <header className="fixed z-10 w-full top-0 backdrop-blur-md flex items-center ps-3 md:ps-20 xl:ps-50 py-4 border-b">
      {/* Brand logo with animated entry from the left */}
      <MotionLeft immediate>
        <Brand />
      </MotionLeft>

      {/* Navigation actions + theme toggle (animated from the right) */}
      <MotionRight
        immediate
        className="flex ms-auto pe-3 lg:pe-6 items-center"
      >
        <div className="flex items-center gap-3 pe-10 md:pe-20 xl:pe-42">
          {/* Sign In button (always visible) */}
          <Link to="/auth/login">
            <Button variant="ghost">
              Sign In
            </Button>
          </Link>

          {/* Get Started button (hidden on small screens for cleaner UI) */}
          <Link to="/auth/register">
            <Button
              variant="themed"
              className="hidden sm:block"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Light/Dark mode toggle */}
        <ThemeToggle />
      </MotionRight>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 p-5 border-t">
      <div className="flex flex-col md:flex-row items-center w-full max-w-3xl m-auto md:justify-between gap-5">
        {/* Brand logo entry animation from the left */}
        <MotionLeft>
          <Brand />
        </MotionLeft>

        {/* Footer text entry animation from the right */}
        <MotionRight>
          <p className="text-center opacity-80">
            &copy; {new Date().getFullYear()} BrainBridge. Bridging the gap to knowledge.
          </p>
        </MotionRight>
      </div>
    </footer>
  );
};

// HomeLayout Component
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
