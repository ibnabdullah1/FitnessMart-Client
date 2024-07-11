import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    product: (state, action) => {
      const { product } = action.payload;
      state.product = product;
    },
  },
});

export const { product } = productSlice.actions;
export default productSlice.reducer;
