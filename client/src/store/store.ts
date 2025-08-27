import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";

// Configure the store
const store = configureStore({
  devTools: true,
  reducer: {
    user: userReducer
  }
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;