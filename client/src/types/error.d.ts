import type { AxiosError } from "axios";

type ValidationCause = "name" | "email" | "password" | "confirm_pwd";

interface ValidationError extends Omit<Error, "cause"> {
  message: string;
  cause: ValidationCause;
}

type AppError = ValidationError | AxiosError | Error | unknown;

export type { ValidationError, AppError, ValidationCause };
