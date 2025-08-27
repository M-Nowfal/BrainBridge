import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { isValidationError, passwordLen, validateEmail } from "@/helpers/formValidation";
import { useAppSelector } from "@/hooks/useStore";
import axios, { AxiosError } from "axios";
import { AlertCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, type NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

// Define structure for login form credentials
type LoginType = {
  email: string,
  password: string,
};

const Login = () => {
  const [credentials, setCredentials] = useState<LoginType>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<Record<"message" | "cause", string>>({ message: "", cause: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const user = useAppSelector(state => state.user);

  const navigator: NavigateFunction = useNavigate();
  // Handle form input updates dynamically
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMessage({ message: "", cause: "" });
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  // Navigate to dashboard if user already logged-in
  useEffect(() => {
    if (user.id) {
      navigator("/dashboard");
    }
  }, []);

  // Handles form submission
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      validateEmail(credentials.email);
      if (!credentials.password.trim()) throw new Error("Password is required.", { cause: "password" });
      passwordLen(credentials.password);
      setErrorMessage({ message: "", cause: "" });
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, credentials);
      if (res.status === 200) {
        window.localStorage.setItem("user", JSON.stringify({ id: res.data.userid }));
        toast.success(res.data.message);
        navigator("/dashboard", { state: { authorized: true } });
      }
    } catch (err: unknown) {
      if (isValidationError(err)) {
        err.cause === "email" ? emailRef.current?.focus() : passwordRef.current?.focus();
        setErrorMessage(err);
      } else if (err instanceof AxiosError) {
        const error = err.response?.status + " " + err.response?.data?.message || String(err.message);
        setErrorMessage({ message: error, cause: "server" });
        toast.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionScale immediate>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-7 justify-center">
        {/* Login card */}
        <Card className="w-[90%] max-w-xl">
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
                ref={emailRef}
                name="email"
                autoComplete="email"
                type="email"
                value={credentials.email}
                onChange={handleInputs}
                className="ps-10 py-5"
                autoFocus
                required
              />
              {errorMessage.cause === "email" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
            </div>

            {/* Password input field with toggle */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Password</CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Enter password"
                ref={passwordRef}
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
              {errorMessage.cause === "password" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
            </div>
            {errorMessage.cause === "server" && <div className="flex items-center gap-2 border border-red-500 rounded-lg p-4">
              <AlertCircle size={18} className="text-red-500" />
              <p className="text-red-500 text-sm">
                {errorMessage.message}
              </p>
            </div>}
            <hr />

            <Button
              type="submit"
              variant="themed"
              className={`text-lg py-6 ${loading && "cursor-not-allowed"}`}
              disabled={loading}
            >
              Sign In
            </Button>
            <Link
              to={loading ? "" : "/"}
              className={`text-lg py-2 rounded-md text-center border font-semibold transition-all duration-200 hover:border-gray-500 ${loading && "cursor-not-allowed"}`}
            >
              Cancel
            </Link>

            {/* Links for account creation & recovery */}
            <CardFooter className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 mt-2">
              <Button
                variant="link"
                className="text-center text-muted-foreground font-semibold"
                disabled={loading}
                onClick={() => navigator("/auth/forgot-password", { state: { authorized: true } })}
              >
                Forgot your password?
              </Button>
              <Link
                to={loading ? "" : "/auth/register"}
                className={`text-center text-sky-600 font-semibold hover:underline hover:underline-offset-3 ${loading && "cursor-not-allowed"}`}
              >
                Don't have an account? Sign up
              </Link>
            </CardFooter>
          </CardContent>
        </Card>
      </form>
    </MotionScale>
  );
};

export default Login;
