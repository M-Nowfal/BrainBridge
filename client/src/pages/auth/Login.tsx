import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define structure for login form credentials
type LoginType = {
  email: string,
  password: string,
};

const Login = () => {
  // Local state for storing user input values
  const [credentials, setCredentials] = useState<LoginType>({ email: "", password: "" });

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Handle form input updates dynamically
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  // Scrolls the page little up
  useEffect(() => {
    window.scrollTo({ top: 30 });
  }, []);

  return (
    //Main login form with subtle scale-in animation
    <MotionScale immediate>
      <form className="flex flex-col items-center space-y-7 justify-center min-h-svh">
        {/* Login card */}
        <Card className="w-[95%] max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-md">
              Sign in to continue your learning journey
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-7">
            {/* Email input field */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Email Address</CardTitle>
              <Mail className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Enter your email"
                name="email"
                autoComplete="email"
                type="email"
                value={credentials.email}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
            </div>

            {/* Password input field with toggle */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Password</CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Enter password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute right-2 top-8"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="size-4 text-muted-foreground" />
                ) : (
                  <Eye className="size-4 text-muted-foreground" />
                )}
              </Button>
            </div>

            <hr />

            {/* Sign-in CTA */}
            <Button
              type="submit"
              variant="themed"
              className="text-lg py-6"
            >
              Sign In
            </Button>

            {/* Cancel action → back to home */}
            <Link
              to={"/"}
              className="text-lg py-2 rounded-md text-center border font-semibold transition-all duration-200 hover:border-gray-500"
            >
              Cancel
            </Link>

            {/* Links for account creation & recovery */}
            <Link to={"/auth/register"} className="text-center text-sky-600 font-semibold hover:underline hover:underline-offset-3">
              Don't have an account? Sign up
            </Link>
            <Link to={"/auth/resetpwd"} className="text-center text-muted-foreground font-semibold hover:underline hover:underline-offset-3">
              Forgot your password?
            </Link>
          </CardContent>
        </Card>
      </form>
    </MotionScale>
  );
};

export default Login;
