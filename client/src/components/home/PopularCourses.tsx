import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, GraduationCap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  
  const popular_courses = [
    {
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Programming",
      level: "Beginner",
      title: "React Fundamentals & Modern Development",
      profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      instructor: "Alex Chen",
      ratings: "4.8(342)",
      price: 799,
      duration: "8 hours",
      url: ""
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Marketing",
      level: "Intermediate",
      title: "Digital Marketing Mastery",
      profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      instructor: "Emma Rodriguez",
      ratings: "4.9(567)",
      price: 999,
      duration: "12 hours",
      url: ""
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      level: "Beginner",
      title: "UI/UX Design Principles",
      profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      instructor: "Marcus Thompson",
      ratings: "4.7(289)",
      price: 1099,
      duration: "10 hours",
      url: ""
    },
  ];

  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-5">Popular Courses</h1>
      <p className="text-xl text-muted-foreground">Start your journey with our most loved courses by expert instructors.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-auto w-[95%] max-w-7xl gap-5 mt-10">
        {popular_courses.map((course, idx) => (
          <Card key={idx} className="group relative hover:-translate-y-2 overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 p-0 pb-5">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-50 w-full object-cover group-hover:scale-110 transition-all duration-200"
            />

            <CardContent className="absolute top-3 w-full">
              <div className="flex justify-between text-xs">
                <span className="bg-white/70 dark:bg-black/70 rounded-md py-1 px-2 dark:text-white font-semibold">{course.category}</span>
                <span className="bg-white/70 dark:bg-black/70 rounded-md py-1 px-2 dark:text-white font-semibold">{course.level}</span>
              </div>
            </CardContent>

            <CardHeader className="text-start">
              <CardTitle className="text-lg font-bold line-clamp-1">{course.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={course.profile}
                  alt={course.instructor}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    {course.ratings}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-xl text-emerald-500">₹{course.price.toLocaleString()}</span>
                <span className="text-muted-foreground flex items-center gap-2">
                  <Clock className="size-4" />
                  {course.duration}
                </span>
              </div>

              <Button
                variant="secondary"
                className="w-full mt-2 bg-gradient-to-r from-sky-700/50 to-emerald-500/50 group-hover:from-sky-700 group-hover:to-emerald-500 group-hover:text-white"
                asChild
              >
                <Link to={course.url}>Enroll Now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button size="lg" variant="outline" className="group text-lg w-full max-w-xs p-6 hover:scale-105">
          <GraduationCap className="text-emerald-500 size-6" />
          View All Course
          <ArrowRight className="size-5 group-hover:translate-x-2 transition-all duration-300" />
        </Button>
      </div>
    </section>
  );
}

export default PopularCourses;