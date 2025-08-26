import type { AppError, ValidationError } from "@/types/error";

// Validate password length (6–15)
export const passwordLen = (password: string): boolean => {
  if (password.length >= 6 && password.length <= 15) {
    return true;
  }
  throw new Error("Password should be between 6 and 15 characters.", { cause: "password" });
};

// Validate password complexity
export const validPassword = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#()\/+.\-])[A-Za-z\d@$!%*?&#()\/+.\-]+$/;

  if (regex.test(password)) {
    return true;
  }
  throw new Error(
    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    { cause: "password" }
  );
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true;
  }
  throw new Error("Invalid email format. Example: user@example.com", { cause: "email" });
};

// Check if passwords match
export const matchPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password === confirmPassword) {
    return true;
  }
  throw new Error("Confirm Password does not match the original password.", { cause: "confirm_pwd" });
};

// Validate required field
export const requiredField = (value: string, fieldName: string): boolean => {
  if (value.trim().length > 0) {
    return true;
  }
  throw new Error(`${fieldName} is required.`, { cause: "requiredfield" });
};

// Validate username (3–20 chars, letters, spaces, dots)
export const validateUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z.\s+]{3,20}$/;

  if (regex.test(username)) {
    return true;
  }
  throw new Error(
    "Username must be 3-20 characters and can only contain letters, white spaces and dots.",
    { cause: "name" }
  );
};

// Type guard for ValidationError
export function isValidationError(err: AppError): err is ValidationError {
  return typeof err === "object" && err !== null && "cause" in err;
}
