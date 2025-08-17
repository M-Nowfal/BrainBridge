import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";

// Configure the store
const store = configureStore({
  devTools: true,
  reducer: {
    auth: authReducer
  }
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;