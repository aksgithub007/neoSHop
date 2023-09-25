import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productList = createAsyncThunk("productList", async (data) => {
  const response = await axios.post("http://localhost:3001/products", data);
  const finalData = response.data;
  return finalData;
});
export const getAllProductList = createAsyncThunk(
  "getAllProductList",
  async (data) => {
    const response = await axios.get("http://localhost:3001/products");
    const finalData = response.data;
    return finalData;
  }
);

const productDetails = createSlice({
  name: "productDetails",
  initialState: {
    isAlert: false,
    isLoading: false,
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductList.pending, (state, action) => {
      state.isAlert = false;
      state.isLoading = false;
    });
    builder.addCase(getAllProductList.fulfilled, (state, action) => {
      state.isAlert = false;
      state.isLoading = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProductList.rejected, (state, action) => {
      state.isAlert = true;
      state.isLoading = false;
      state.products = [];
    });
  },
});

export default productDetails.reducer;
