import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full top-0 backdrop-blur-md flex items-center ps-3 md:ps-20 xl:ps-50 py-4 border-b">
      <div className="flex items-center gap-2">
        <GraduationCap className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-md p-1 size-8" />
        <h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold text-xl">BrainBridge</h1>
      </div>
      <div className="flex ms-auto pe-3 lg:pe-6 items-center">
        <div className="flex items-center gap-3 pe-10 md:pe-20 xl:pe-42">
          <Button variant="ghost">
            Sign In
          </Button>
          <Button variant="secondary" className="hidden sm:block bg-gradient-to-r from-sky-600 to-emerald-500">
            Get Started
          </Button>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 p-5 border-t">
      <div className="flex flex-col md:flex-row items-center w-full max-w-3xl m-auto md:justify-between gap-5">
        <div className="flex items-center gap-2">
          <GraduationCap className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-md p-1 size-8" />
          <h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold text-xl">BrainBridge</h1>
        </div>
        <p className="text-center opacity-80">
          &copy; {new Date().getFullYear()} BrainBridge. Bridging the gap to knowledge.
        </p>
      </div>
    </footer>
  );
};

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;