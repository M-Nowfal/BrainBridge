import useOTP from "@/hooks/useOTP";
import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  const { sendOTPEmail } = useOTP();

  useEffect(() => {
    if (!authorized) {
      toast.error("Unauthorized access. Please login again.");
      navigator("/auth/login");
    }
  }, []);

  return (
    <MotionScale immediate>
      <div className="flex flex-col items-center space-y-7 justify-center">
        <Card className="w-[90%] max-w-xl">
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
              onClick={async () => sendOTPEmail(email, "forgotpassword", setLoading, setErrorMessage, "Reset-Password", "/auth/reset-password")}
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
