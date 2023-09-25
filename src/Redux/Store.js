import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./Slice/RegisterUserSlice";
import LoginUserSlice from "./Slice/LoginUserSlice";
import ProductSlice from "./Slice/ProductSlice";

const store = configureStore({
  reducer: {
    user: RegisterUserSlice,
    auth: LoginUserSlice,
    product: ProductSlice,
  },
});

export default store;
