import { Award, BookOpen, Users } from "lucide-react"; 
// Icon components from lucide-react for visual representation of achievements

import { MotionUp } from "../ui/animate"; 
// Reusable animated wrapper for scroll/mount animations

const Acheivements = () => {

  // Shared styling for all achievement icons
  const iconStyle = "rounded-full size-15 bg-gradient-to-r from-sky-600/20 to-emerald-500/20 p-2.5 text-sky-500";

  // Achievement data (icon, title, description)
  const acheivements = [
    { icon: <Users className={iconStyle} />, title: "50,000+", description: "Active Learners" },
    { icon: <BookOpen className={iconStyle} />, title: "500+", description: "Expert Courses" },
    { icon: <Award className={iconStyle} />, title: "25,000+", description: "Certificates Earned" },
  ];

  return (
    // Responsive flex container for achievements (column on mobile, row on desktop)
    <section className="flex flex-col md:flex-row gap-5 justify-between items-center mt-10 w-full max-w-3xl m-auto">
      
      {/* Render each achievement with entry animation */}
      {acheivements.map((acheivement, idx) => (
        <MotionUp key={idx} className="flex flex-col items-center gap-2">
          {acheivement.icon}
          <span className="font-bold text-2xl">{acheivement.title}</span>
          <p className="text-muted-foreground text-sm">{acheivement.description}</p>
        </MotionUp>
      ))}
    </section>
  );
}

export default Acheivements;
// Component displays platform achievements with animated icons, titles, and descriptions
