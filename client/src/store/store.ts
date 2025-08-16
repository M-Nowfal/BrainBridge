import { configureStore } from "@reduxjs/toolkit";

// Configure the store
const store = configureStore({
  devTools: true,
  reducer: {
    
  }
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;