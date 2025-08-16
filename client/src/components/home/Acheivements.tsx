import { Award, BookOpen, Users } from "lucide-react";

const Acheivements = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 justify-between items-center mt-10 w-full max-w-3xl m-auto">
      <div className="flex flex-col items-center gap-2">
        <Users className="rounded-full size-12 bg-gradient-to-r from-sky-600/20 to-emerald-500/20 p-2.5 text-sky-500" />
        <span className="font-bold text-2xl">50,000+</span>
        <p className="text-muted-foreground text-sm">Active Learners</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BookOpen className="rounded-full size-12 bg-gradient-to-r from-sky-600/20 to-emerald-500/20 p-2.5 text-sky-500" />
        <span className="font-bold text-2xl">500+</span>
        <p className="text-muted-foreground text-sm">Expert Courses</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Award className="rounded-full size-12 bg-gradient-to-r from-sky-600/20 to-emerald-500/20 p-2.5 text-sky-500" />
        <span className="font-bold text-2xl">25,000+</span>
        <p className="text-muted-foreground text-sm">Certificates Earned</p>
      </div>
    </section>
  );
}

export default Acheivements;