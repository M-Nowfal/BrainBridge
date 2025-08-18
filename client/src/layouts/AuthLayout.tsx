import { Link, Outlet } from "react-router-dom";
import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";

const AuthLayout = () => {

  return (
    <>
      <div className="flex fixed items-center justify-between border-b p-4 top-0 w-full backdrop-blur-2xl z-10">
        <Link to={"/"}>
          <ArrowLeft />
        </Link>
        <Brand size="150" />
        <ThemeToggle />
      </div>
      <div className="mt-18 sm:mt-15">
        <Outlet />
      </div>
      <footer className="py-12 p-5 border-t">
        <div className="flex flex-col md:flex-row items-center w-full max-w-3xl m-auto md:justify-between gap-5">
          {/* Brand logo entry animation from the left */}
          <Brand />
          {/* Footer text entry animation from the right */}
          <p className="text-center opacity-80">
            &copy; {new Date().getFullYear()} BrainBridge. Bridging the gap to knowledge.
          </p>
        </div>
      </footer>
    </>
  );
}

export default AuthLayout;