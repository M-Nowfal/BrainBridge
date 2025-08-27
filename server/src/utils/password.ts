import { hash, genSalt, compare } from "bcryptjs";

// Hasing password
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(12);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

// Compare hashed password and password
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await compare(password, hashedPassword);
};
