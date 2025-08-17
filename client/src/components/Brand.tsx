import { GraduationCap } from "lucide-react";

/**
 * Brand Component
 *
 * Renders the BrainBridge brand logo with a graduation cap icon
 * and a gradient-styled title.
 *
 * @param size - Controls the Tailwind scale utility for resizing
 *               the entire brand component. Defaults to "100".
 *
 * Example:
 * <Brand size="125" />
 */
const Brand = ({
  size = "100",
}: {
  size?: "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150";
}) => {
  return (
    <div className={`flex items-center gap-2 scale-${size}`}>
      {/* Logo Icon: Gradient-styled graduation cap */}
      <GraduationCap className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-md p-1 size-8" />
      
      {/* Brand Name: Gradient-filled text */}
      <h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold text-xl">
        BrainBridge
      </h1>
    </div>
  );
};

export default Brand;
