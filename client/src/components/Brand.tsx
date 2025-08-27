import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

// Brand Component
const Brand = ({
  size = 1,
}: {
  size?: number;
}) => {
  return (
    <Link to={"/"} className={`flex items-center gap-2`} style={{ transform: `scale(${size})`}}>
      {/* Logo Icon: Gradient-styled graduation cap */}
      <GraduationCap className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-md p-1 size-8" />
      
      {/* Brand Name: Gradient-filled text */}
      <h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold text-xl">
        BrainBridge
      </h1>
    </Link>
  );
};

export default Brand;
