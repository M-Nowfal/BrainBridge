import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { isValidationError, validateEmail } from "@/helpers/formValidation";
import axios, { AxiosError } from "axios";
import { Mail } from "lucide-react";
import { useEffect, useRef, useState, type JSX } from "react";
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<Record<"message" | "cause", string>>({ message: "", cause: "" });
  const emailRef = useRef<HTMLInputElement>(null);
  const navigator: NavigateFunction = useNavigate();
  const authorized = useLocation().state?.authorized || false;

  useEffect(() => {
    if (!authorized) {
      toast.error("Unauthorized access. Please login again.");
      navigator("/auth/login");
    }
  }, []);

  // Handle forgot password
  const sendOTPEmail = async () => {
    try {
      setLoading(true);
      setErrorMessage({ message: "", cause: "" });
      if (!email.trim() || !validateEmail(email))
        throw new Error("Please enter your email to reset password.", { cause: "email" });

      // Send OTP for password reset
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/send-otp/Reset-Password`, { email: email.trim() });
      if (res.status === 200) {
        navigator("/auth/verify-otp", { state: { email, action: "/dashboard" }, replace: true });
      }
    } catch (err: unknown) {
      let toastMessage = "";
      if (isValidationError(err)) {
        err.cause === "email" && emailRef.current?.focus();
        setErrorMessage(err);
        toastMessage = err.message;
      } else if (err instanceof AxiosError) {
        setErrorMessage({ message: err.response?.status + err.response?.data?.message || err.message, cause: "server" });
        toastMessage = err.response?.data?.message || err.message;
      }
      toast.error(toastMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionScale immediate>
      <div className="flex flex-col items-center space-y-7 justify-center min-h-[90vh]">
        <Card className="w-[95%] max-w-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Forgot Password</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {/* Explanation for the user */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>Email Address</CardTitle>
              <Mail className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Enter your email"
                ref={emailRef}
                name="email"
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage({ message: "", cause: "" });
                }}
                className="ps-10 py-5"
                autoFocus
                required
              />
              {errorMessage.cause === "email" && (
                <p className="text-red-500 text-sm mt-2">{errorMessage.message}</p>
              )}
            </div>
            <CardDescription className="text-md">
              <p className="text-sm text-muted-foreground">
                Forgot your password? Enter your registered email below and we'll send you a One-Time Password (OTP) to reset your password. The OTP is valid for 5 minutes.
              </p>
            </CardDescription>
            <hr />

            <Button
              type="submit"
              variant="themed"
              className={`text-lg py-5 ${loading && "cursor-not-allowed animate-pulse"}`}
              disabled={loading || !email.trim()}
              onClick={sendOTPEmail}
            >
              {loading ? "Sending..." : "Send OTP"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </MotionScale>
  );
}

export default ForgotPassword;
