import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MotionLeft, MotionRight } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

/**
 * Navbar Component
 * ----------------
 * - Fixed navigation bar displayed at the top of the page.
 * - Includes:
 *   • Brand (logo + title)
 *   • Navigation actions (Sign In, Get Started)
 *   • Theme toggle switch (light/dark mode)
 *
 * Notes:
 * - Uses MotionLeft & MotionRight for entry animations.
 * - Responsive: "Get Started" button is hidden on small screens.
 */
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
              variant="secondary"
              className="hidden sm:block bg-gradient-to-r from-sky-600 to-emerald-500"
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

/**
 * Footer Component
 * ----------------
 * - Displays brand + site tagline.
 * - Responsive layout (stacked on mobile, row on desktop).
 * - Animations applied for subtle entrance effects.
 */
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

/**
 * HomeLayout Component
 * --------------------
 * - Defines the page structure for public routes.
 * - Includes:
 *   • Navbar (top navigation)
 *   • Outlet (dynamic child route content)
 *   • Footer (site-wide branding & message)
 */
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
