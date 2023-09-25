import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegisterList = createAsyncThunk(
  "userRegisterList",
  async (data) => {
    const response = await axios.post(
      "http://localhost:3001/registerUsers",
      data
    );
    const finalData = response.data;
    return finalData;
  }
);
export const getAllUserList = createAsyncThunk(
  "getAllUserList",
  async (data) => {
    const response = await axios.get("http://localhost:3001/registerUsers");
    const finalData = response.data;
    return finalData;
  }
);

const registerUsers = createSlice({
  name: "registerUsers",
  initialState: {
    isAlert: false,
    isSuccess: false,
    registerUser: [],
  },
  extraReducers: (builder) => {
    builder.addCase(userRegisterList.pending, (state, action) => {
      state.isAlert = false;
      state.isSuccess = false;
    });
    builder.addCase(userRegisterList.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isAlert = false;
      state.registerUser = action.payload;
    });
    builder.addCase(userRegisterList.rejected, (state, action) => {
      state.isAlert = true;
      state.isSuccess = false;
    });
    builder.addCase(getAllUserList.pending, (state, action) => {
      state.isAlert = false;
      state.isSuccess = false;
    });
    builder.addCase(getAllUserList.fulfilled, (state, action) => {
      state.isAlert = false;
      state.isSuccess = true;
      state.registerUser = action.payload;
    });
    builder.addCase(getAllUserList.rejected, (state, action) => {
      state.isAlert = true;
      state.isSuccess = false;
    });
  },
});

export default registerUsers.reducer;
