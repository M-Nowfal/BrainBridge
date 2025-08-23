/**
 * ✅ Validates the password length.
 * Password must be between 6 and 15 characters.
 * 
 * @param password - The password string to validate.
 * @returns true if valid, otherwise throws an Error.
 */
export const passwordLen = (password: string): boolean => {
  if (password.length >= 6 && password.length <= 15) {
    return true;
  }
  throw new Error("Password should be between 6 and 15 characters.", { cause: "password" });
};

/**
 * ✅ Validates if the password contains at least:
 * - One uppercase letter
 * - One lowercase letter
 * - One number
 * - One special character
 * 
 * @param password - The password string to validate.
 * @returns true if valid, otherwise throws an Error.
 */
export const validPassword = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  if (regex.test(password)) {
    return true;
  }
  throw new Error(
    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    { cause: "password" }
  );
};

/**
 * ✅ Validates if the given email is in proper format.
 * Uses a regex for general email validation.
 * 
 * @param email - The email string to validate.
 * @returns true if valid, otherwise throws an Error.
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true;
  }
  throw new Error("Invalid email format. Example: user@example.com", { cause: "email" });
};

/**
 * ✅ Validates if password and confirmPassword match.
 * 
 * @param password - The original password.
 * @param confirmPassword - The repeated password input.
 * @returns true if they match, otherwise throws an Error.
 */
export const matchPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password === confirmPassword) {
    return true;
  }
  throw new Error("Confirm Password does not match the original password.", { cause: "confirmpassword" });
};

/**
 * ✅ Validates if a required field is not empty.
 * Useful for inputs like name, username, etc.
 * 
 * @param value - The string to validate.
 * @param fieldName - The name of the field for error messages.
 * @returns true if not empty, otherwise throws an Error.
 */
export const requiredField = (value: string, fieldName: string): boolean => {
  if (value.trim().length > 0) {
    return true;
  }
  throw new Error(`${fieldName} is required.`, { cause: "required" });
};

/**
 * ✅ Validates if a username is between 3 and 20 characters
 * and contains only letters, numbers, underscores, or dots.
 * 
 * @param username - The username string to validate.
 * @returns true if valid, otherwise throws an Error.
 */
export const validateUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z0-9._]{3,20}$/;

  if (regex.test(username)) {
    return true;
  }
  throw new Error(
    "Username must be 3-20 characters and can only contain letters, numbers, underscores, and dots.",
    { cause: "name" }
  );
};
