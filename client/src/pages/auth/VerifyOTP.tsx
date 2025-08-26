import { useState, useRef, useEffect, useId } from "react";
import type { ChangeEvent, KeyboardEvent, ClipboardEvent, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MotionScale } from "@/components/ui/animate";
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom";
import { LockKeyhole, Mail, RotateCcw } from "lucide-react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

const VerifyOTP = (): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(59);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<Record<"message" | "cause", string> | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigator: NavigateFunction = useNavigate();

  const location = useLocation();
  const { email, action } = location.state;

  useEffect(() => {
    // Focus the first input on component mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    if (!email) {
      toast.error("Unauthorized access. Please login again.");
      navigator("/auth/login");
    }
  }, []);

  useEffect(() => {
    // Countdown timer for resend OTP
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleChange = (index: number, value: string): void => {
    // Only allow numbers
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp: string[] = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input if value is entered
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>): void => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pastedData: string = e.clipboardData.getData("text");

    // Only allow numbers and ensure exactly 6 digits
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newOtp: string[] = pastedData.split("").slice(0, 6);
      setOtp(newOtp);

      // Focus the last input after pasting
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage(null);
    const fullOtp: string = otp.join("");
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/verify-otp`, { email, otp: fullOtp });
      if (res.status === 200) {
        toast.success(res.data.message);
        navigator(`${action}`, { state: { email, authorized: true }, replace: true });
      }
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.message : String(err);
      setErrorMessage({ message: error, cause: "server" });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async (): Promise<void> => {
    if (!canResend) return;

    setCountdown(59);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);

    // Focus first input after resend
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Optionally, trigger resend OTP API call here
    try {
      setLoading(true);
      setErrorMessage(null);

      // Send OTP for password reset
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/send-otp/Resend-Request`, { email: email.trim() });
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.status + err.response?.data?.message || err.message : String(err);
      setErrorMessage({ message: error, cause: "server" });
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionScale immediate className="flex items-center justify-center min-h-[85vh] px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border overflow-hidden">

        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center items-center gap-5 p-2">
            <LockKeyhole className="h-8 w-8 text-emerald-600" />
            <CardTitle className="text-2xl font-bold">
              Verify Your Email
            </CardTitle>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              We've sent a 6-digit OTP verification code to
            </p>
            <div className="flex items-center justify-center gap-2 py-2 px-4">
              <Mail className="h-4 w-4 text-sky-500" />
              <span className="text-sm font-medium text-sky-600">{email}</span>
            </div>
          </div>
          <hr />
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          <div className="flex flex-col space-y-3">
            <h2 className="font-medium text-center">
              Enter verification code
            </h2>

            <div className="flex justify-center gap-2">
              {otp.map((digit: string, idx: number) => (
                <Input
                  key={idx}
                  ref={(el: HTMLInputElement | null) => { inputRefs.current[idx] = el }}
                  type="text"
                  inputMode="numeric"
                  id={useId()}
                  maxLength={1}
                  value={digit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(idx, e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
                  onPaste={idx === 0 ? handlePaste : undefined}
                  className="w-15 h-15 text-center text-xl font-semibold border-2 focus:ring-2 transition-all"
                  disabled={loading}
                />
              ))}
            </div>
          </div>

          {errorMessage && <p className="text-sm text-red-500">{errorMessage.message}</p>}

          <div className="flex flex-col  gap-3">
            <Button
              variant="outline"
              className="text-base p-3 flex-1 gap-2"
              onClick={handleResendOTP}
              disabled={!canResend || loading}
            >
              <RotateCcw className="h-4 w-4" />
              {canResend ? "Resend Code" : `Resend in ${countdown}s`}
            </Button>

            <Button
              variant="themed"
              className="text-base p-3 flex-1"
              onClick={handleVerify}
              disabled={otp.join("").length < 6 || loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Verifying...
                </>
              ) : (
                "Verify Code"
              )}
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 max-w-2xs m-auto">
            Didn't receive the email? Check your spam folder or{" "}
            <span
              className={`font-medium hover:underline hover:cursor-pointer ${canResend ? "text-sky-600" : "text-gray-400 hover:cursor-not-allowed"}`}
              onClick={() => canResend && navigator("/auth/forgot-password", { state: { authorized: true } })}
            >
              try another email
            </span>
          </p>
        </CardContent>
      </Card>
    </MotionScale>
  );
};

export default VerifyOTP;