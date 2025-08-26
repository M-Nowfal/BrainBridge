import { useTheme } from "@/components/ThemeProvider";
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";

type Position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

const AppToaster = () => {
  const { theme } = useTheme();
  const [toastPosition, setToastPosition] = useState<Position>("bottom-right");

  useEffect(() => {
    // Adjust toast position based on screen width
    const updateToastPosition = () => {
      toast.dismiss(); // Dismiss existing toasts when position changes
      if (window.innerWidth < 800) {
        setToastPosition("top-center"); // Centered for small screens
      } else {
        setToastPosition("bottom-right"); // Bottom-right for larger screens
      }
    };

    updateToastPosition(); // Initial check
    window.addEventListener("resize", updateToastPosition); // Update on resize

    return () => window.removeEventListener("resize", updateToastPosition); // Cleanup on unmount
  }, []);

  return (
    <Toaster
      position={toastPosition}
      duration={5000}
      swipeDirections={["left", "right", "bottom", "top"]}
      richColors
      theme={theme}
      expand
    />
  );
}

export default AppToaster;
