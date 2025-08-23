import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, type NavigateFunction } from "react-router-dom";
import axios from "axios";
import { matchPassword, passwordLen, validateEmail, validPassword } from "@/helpers/formValidation";

type RegisterType = {
  name: string,
  email: string,
  password: string,
  confirm_pwd: string,
  terms_condition: boolean
};

/**
 * Register Component
 * ------------------
 * A registration form that allows users to:
 *  - Provide full name, email, and password (with confirmation).
 *  - Toggle password visibility for better UX.
 *  - Accept Terms of Service and Privacy Policy.
 * 
 * UI Enhancements:
 *  - Animated scaling effect on load.
 *  - Theme toggle for light/dark mode.
 *  - Accessible labels and placeholders.
 */
const Register = () => {

  // State to manage user credentials & terms agreement
  const [credentials, setCredentials] = useState<RegisterType>({
    name: "", email: "", password: "", confirm_pwd: "", terms_condition: false
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);  // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState<any>("");      // State to show error message
  const [loading, setLoading] = useState<boolean>(false);
  const navigator: NavigateFunction = useNavigate();


  /**
   * handleInputs
   * Dynamically updates form fields in state.
   * Special handling for the checkbox (terms_condition).
   */
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "terms_condition") {
      setCredentials(prev => ({ ...prev, [name]: value }));
    } else {
      setCredentials(prev => ({ ...prev, [name]: !prev[name] }));
    }
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      validation();
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, credentials);
      if (res.status === 201) {
        navigator("/dashboard", { state: { role: ``, /*some details*/ } });
      }
    } catch (err: unknown) {
      setErrorMessage(err);
    } finally {
      setLoading(false);
    }
  };

  // Scrolls the page little up
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const validation = () => {
    validateEmail(credentials.email);
    passwordLen(credentials.password);
    validPassword(credentials.password);
    matchPassword(credentials.password, credentials.confirm_pwd);
  };

  return (
    // Form container with scaling animation
    <MotionScale immediate>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-7 justify-center min-h-svh">
        <Card className="w-[95%] max-w-lg lg:max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription className="text-md">
              Start your learning journey today
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-7">

            {/* Full Name Field */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Full Name</CardTitle>
              <User className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Enter your full name"
                name="name"
                autoComplete="name"
                type="text"
                value={credentials.name}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
              {errorMessage.cause === "name" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
            </div>

            {/* Email Field */}
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
              {errorMessage.cause === "email" && <p className="text-red-500 text-sm  tm-2">
                {errorMessage.message}
              </p>}
            </div>

            {/* Password Field with toggle visibility */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Password</CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Create a password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
              {errorMessage.cause === "password" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
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

            {/* Confirm Password */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>
                <label htmlFor="confirm_pwd">Confirm Password</label>
              </CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Re-enter your password"
                name="confirm_pwd"
                id="confirm_pwd"
                type="password"
                value={credentials.confirm_pwd}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
              {errorMessage.cause === "confirmpassword" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
            </div>

            {/* Terms & Conditions Agreement */}
            <div className="flex items-center gap-3 relative">
              <Input
                name="terms_condition"
                id="terms_condition"
                type="checkbox"
                checked={credentials.terms_condition}
                onChange={handleInputs}
                className="size-4 cursor-pointer accent-black dark:accent-emerald-300"
                required
              />
              {errorMessage.cause === "required" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
              <CardTitle className="text-sm">
                I agree to the&nbsp;
                <span className="hover:underline hover:underline-offset-2 text-sky-600 cursor-pointer">
                  Terms of Service&nbsp;
                </span>
                and&nbsp;
                <span className="hover:underline hover:underline-offset-2 text-sky-600 cursor-pointer">
                  Privacy Policy
                </span>
              </CardTitle>
            </div>

            <hr />

            {/* Actions: Create Account / Cancel */}
            <div className="flex flex-col gap-5 lg:flex-row-reverse">
              <Button
                variant="themed"
                className="text-lg py-6 lg:flex-1"
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>
              <Link
                to={"/"}
                className="lg:flex-1 text-lg py-2 rounded-md text-center border font-semibold transition-all duration-200 hover:border-gray-500"
              >
                Cancel
              </Link>
            </div>

            {/* Redirect to Login */}
            <Link
              to={"/auth/login"}
              className="text-center text-sky-600 font-semibold hover:underline hover:underline-offset-3"
            >
              Already have an account? Sign in
            </Link>
          </CardContent>
        </Card>
      </form>
    </MotionScale>
  );
}

export default Register;
