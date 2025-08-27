import { isValidationError } from "@/helpers/formValidation";
import axios, { AxiosError } from "axios";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

const useOTP = () => {
  const navigator: NavigateFunction = useNavigate();

  const sendOTPEmail = async (
    email: string,
    purpose: string,
    setLoading: (val: boolean) => void,
    setErrorMessage: (val: Record<"message" | "cause", string>) => void,
    otpMessage: string = "Validation",
    successAction: string = "/",
  ) => {

    try {
      setLoading(true);
      setErrorMessage({ message: "", cause: "" });

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/send-otp/${otpMessage}`, { email: email.trim() });
      if (res.status === 200) {
        navigator("/auth/verify-otp", { state: { email, action: successAction, purpose }, replace: true });
      }
    } catch (err: unknown) {
      let toastMessage = "";
      if (isValidationError(err)) {
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

  return { sendOTPEmail };
};

export default useOTP;