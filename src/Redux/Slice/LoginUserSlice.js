import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: Boolean(sessionStorage.getItem("email")),
  user: {},
};

const LoginUserSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const LoginUserSliceAction = LoginUserSlice.actions;

export default LoginUserSlice.reducer;
