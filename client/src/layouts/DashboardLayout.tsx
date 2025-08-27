import { Outlet } from "react-router-dom";
import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";

const DashboardLayout = () => {

  return (
    <>
      <div className="flex fixed items-center justify-between border-b p-4 top-0 w-full backdrop-blur-2xl z-10">
        <Brand size={1.20} />
        <ThemeToggle />
      </div>
      <div className="mt-18 sm:mt-15">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;