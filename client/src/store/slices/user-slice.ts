import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  isAuthenticated: boolean;
  role: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  themePrefered: string;
  token: string | null;
};

const initialState: UserState = {
    id: null,
    isAuthenticated: false,
    role: "student",
    name: null,
    email: null,
    avatar: null,
    themePrefered: "dark",
    token: null
  }

// Create auth slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    }
  }
});

// Export actions
export const { setUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
