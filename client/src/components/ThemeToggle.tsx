import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

/**
 * ThemeToggle Component
 * ---------------------
 * A reusable button that toggles between light and dark themes.
 * - Uses the custom ThemeProvider hook (`useTheme`) for theme management.
 * - Switches theme state on button click.
 * - Animates icon transitions between Sun (light) and Moon (dark) using Tailwind CSS.
 *
 * Accessibility:
 * - Includes a visually hidden label (`sr-only`) for screen readers.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun icon: visible in light mode, hidden in dark mode */}
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

      {/* Moon icon: hidden in light mode, visible in dark mode */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

      {/* Screen-reader only text for accessibility */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
