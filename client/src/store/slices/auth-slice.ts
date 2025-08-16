import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Create auth slice
const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuthenticated: false,
    user: {
      id: null,
      name: null,
      email: null,
      role: "guest",
      avatar: null,
      themePrefered: "dark",
    },
    token: null
  },
  reducers: {
    setRole(_state, action: PayloadAction) {
      return action.payload;
    }
  }
});

// Export actions
export const { setRole } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
