import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { MotionUp } from "../ui/animate";

/*
   * Slogan Section
   * ----------------
   * Highlights a motivational call-to-action (CTA) with animated text and 
   * a button that navigates users to the registration page.
 */
const Slogan = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center gap-7 mt-20 text-center bg-emerald-500/3 px-10 py-17">
      {/* Animated headline */}
      <MotionUp>
        <h1 className="font-bold text-4xl">Ready to Bridge the Gap?</h1>
      </MotionUp>

      {/* Animated subtitle/description */}
      <MotionUp>
        <p className="text-muted-foreground text-lg w-full max-w-xl">
          Join our community of learners and start your transformation today. 
          Your future self will thank you.
        </p>
      </MotionUp>

      {/* CTA button -> Navigates to Register page */}
      <MotionUp>
        <Button
          variant="themed"
          className="group w-2xs font-semibold text-lg py-6 hover:scale-103 transition-all duration-300 hover:shadow-md hover:from-sky-700 hover:to-emerald-600"
          onClick={() => navigate("/auth/register")}
        >
          Start Your Journey
          <ArrowRight className="size-5 mt-1 ms-2 group-hover:scale-120 group-hover:translate-x-4 transition-all duration-300" />
        </Button>
      </MotionUp>
    </section>
  );
};

export default Slogan;
