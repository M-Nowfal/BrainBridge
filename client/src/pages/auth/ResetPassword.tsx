import { MotionScale } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { matchPassword, passwordLen, validPassword } from "@/helpers/formValidation";
import axios from "axios";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

const ResetPassword = () => {

  const [credentials, setCredentials] = useState<{ password: string, confirm_pwd: string }>({ password: "", confirm_pwd: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const refs = useRef<Record<string, HTMLInputElement | null>>({});
  const navigator: NavigateFunction = useNavigate();
  const { authorized } = useLocation().state || false;

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMessage("");
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Validation
      passwordLen(credentials.password);
      validPassword(credentials.password);
      matchPassword(credentials.password, credentials.confirm_pwd);
      // Reset password
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/reset-password`, credentials);
      if (res.status === 200) {
        navigator("/auth/login");
      }
    } catch (err: unknown) {
      setErrorMessage(err);
      // Handle validation errors if needed
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authorized) {
      toast.warning("Unauthorized, please login again");
      navigator("/auth/login", { replace: true });
    };
  }, []);

  return (
    <MotionScale immediate>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        {/* Login card */}
        <Card className="w-[90%] max-w-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Reset Password</CardTitle>
            <CardDescription className="text-md">
              Reset your account password
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-7">
            {/* Password Field with toggle visibility */}
            <div className="flex flex-col gap-3 relative">
              <CardTitle>New Password</CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Create a new password"
                ref={(el) => { refs.current["password"] = el }}
                name="password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={handleInputs}
                className="ps-10 py-5"
                autoFocus
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
                <label htmlFor="confirm_pwd">Confirm New Password</label>
              </CardTitle>
              <Lock className="absolute text-muted-foreground size-4 top-10.5 left-3" />
              <Input
                placeholder="Re-enter your new password"
                ref={(el) => { refs.current["confirm_pwd"] = el }}
                name="confirm_pwd"
                id="confirm_pwd"
                type="password"
                value={credentials.confirm_pwd}
                onChange={handleInputs}
                className="ps-10 py-5"
                required
              />
              {errorMessage.cause === "confirm_pwd" && <p className="text-red-500 text-sm mt-2">
                {errorMessage.message}
              </p>}
            </div>
            <hr />
          </CardContent>

          <CardFooter className="flex flex-col w-full gap-3">
            <Button
              type="submit"
              variant="themed"
              className="w-full py-5 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Processing..." : "Reset Password"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full py-5 mt-2"
              onClick={() => navigator("/auth/login")}
              disabled={loading}
            >Cancel</Button>
          </CardFooter>
        </Card>
      </form>
    </MotionScale>
  );
}

export default ResetPassword;