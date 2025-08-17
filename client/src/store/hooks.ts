// hooks.ts
// -----------------------------------------------------------------------------
// Centralized typed hooks for Redux usage across the app.
// These provide type safety and consistency when using useDispatch and useSelector.
// -----------------------------------------------------------------------------

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Typed version of useDispatch hook
 * Ensures that dispatch only accepts actions defined in AppDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed version of useSelector hook
 * Enforces that selected state values must conform to RootState
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
