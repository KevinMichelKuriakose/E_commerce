
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewProducts = createAsyncThunk(
  "product/fetchNewProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",

  initialState: {
    newProducts: [],
    inProgress: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.inProgress = true;
        state.error = null;
      })

      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.inProgress = false;
        state.newProducts = action.payload;
      })

      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.inProgress = false;
        state.error =
          action.payload || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
