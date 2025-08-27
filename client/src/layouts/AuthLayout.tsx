import { Outlet } from "react-router-dom";
import Brand from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuthLayout = () => {

  return (
    <div className="flex flex-col justify-center gap-7 min-h-svh pb-5">
      <div className="flex backdrop-blur-2xl fixed top-0 z-10 w-full items-center justify-between py-2 px-4">
        <Button variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft />
        </Button>
        <ThemeToggle />
      </div>
      <div className="flex justify-center pt-14">
        <Brand size={1.20} />
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
