import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Slogan = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-7 mt-20 text-center bg-emerald-500/5 px-10 py-17">
      <h1 className="font-bold text-4xl">Ready to Bridge the Gap?</h1>
      <p className="text-muted-foreground text-lg w-full max-w-xl">
        Join our community of learners and start your transformation today. Your future self will thank you.
      </p>
      <Button
        variant="themed"
        className="group w-2xs font-semibold text-lg py-6 hover:scale-103 transition-all duration-300 hover:shadow-md hover:from-sky-700 hover:to-emerald-600"
      >
        Start Your Journey
        <ArrowRight className="size-5 mt-1 ms-2 group-hover:scale-120 group-hover:translate-x-4 transition-all duration-300" />
      </Button>
    </section>
  );
}

export default Slogan;