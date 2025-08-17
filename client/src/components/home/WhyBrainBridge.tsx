import { Award, BookOpen, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { MotionUp } from "../ui/animate";

/**
 * WhyBrainBridge Section
 * -----------------------
 * Highlights the key advantages of using BrainBridge.
 * Uses a feature grid layout with icons, titles, and descriptions
 * to clearly communicate the platform’s value propositions.
 */
const WhyBrainBridge = () => {
  // Shared style for icons (color + hover transition)
  const iconStyle = "text-sky-500 group-hover:text-white transition-all duration-300";

  // Feature list (could be easily mapped or extended)
  const choose_brain_bridge = [
    {
      icon: <BookOpen className={iconStyle} />,
      title: "Interactive Learning",
      description: "Engage with dynamic content, quizzes, and hands-on projects that make learning stick.",
    },
    {
      icon: <Users className={iconStyle} />,
      title: "Collaborative Community",
      description: "Connect with peers, share knowledge, and grow together in our vibrant learning community.",
    },
    {
      icon: <Award className={iconStyle} />,
      title: "Verified Certificates",
      description: "Earn industry-recognized certificates that showcase your achievements to employers.",
    },
    {
      icon: <TrendingUp className={iconStyle} />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized insights.",
    },
    {
      icon: <Shield className={iconStyle} />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: <Zap className={iconStyle} />,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to all course materials.",
    },
  ];

  return (
    <section className="mt-20">
      {/* Section Heading */}
      <MotionUp>
        <h1 className="text-4xl font-bold text-center">Why Choose BrainBridge?</h1>
        <p className="text-lg text-center text-muted-foreground font-semibold mt-5">
          Experience learning like never before with our innovative platform designed for modern education.
        </p>
      </MotionUp>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-[95%] max-w-7xl m-auto gap-5 mt-12">
        {choose_brain_bridge.map((choose, idx) => (
          <MotionUp key={idx}>
            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:shadow-gray-900">
              {/* Card Header: Icon + Title */}
              <CardContent className="flex flex-col gap-2">
                <CardTitle className="bg-gradient-to-r from-sky-500/20 to-emerald-500/20 w-fit p-2 rounded-lg group-hover:from-sky-500 group-hover:to-emerald-500 transition-all duration-300">
                  {choose.icon}
                </CardTitle>
                <CardTitle className="text-xl font-bold group-hover:bg-gradient-to-t group-hover:from-sky-700 group-hover:to-emerald-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  {choose.title}
                </CardTitle>
              </CardContent>

              {/* Card Body: Description */}
              <CardContent>
                <CardDescription>{choose.description}</CardDescription>
              </CardContent>
            </Card>
          </MotionUp>
        ))}
      </div>
    </section>
  );
};

export default WhyBrainBridge;
