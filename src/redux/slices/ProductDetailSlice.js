import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorOption: [
    { value: "RED", label: "قرمز", addPrice: 4729000 },
    { value: "BLUE", label: "آبی", addPrice: 4623000 },
    { value: "YELLOW", label: "زرد", addPrice: 4829200 },
    { value: "BLACK", label: "مشکی", addPrice: 4569500 },
  ],
  sizeOption: [
    { value: "LARGE", label: "بزرگ", addPrice: 4629111 },
    { value: "MED", label: "متوسط", addPrice: 4629222 },
    { value: "SMALL", label: "کوچک", addPrice: 4629333 },
  ],
  price: 4629000,
  comments: [
    { title: "محمدرضا", text: "بسیار خوب بود" },
    { title: "حسن", text: "با این قیمت نمی ارزد" },
    { title: "تقی", text: "بسیار خوب بود" },
  ],
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const colorItem = state.colorOption.find((item) => {
        return item.value === action.payload;
      });
      state.price = colorItem.addPrice;
    },
    changeSize: (state, action) => {
      const sizeItem = state.sizeOption.find((item) => {
        return item.value === action.payload;
      });
      state.price = sizeItem.addPrice;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { changeColor, changeSize, addComment } =
  productDetailSlice.actions;

export default productDetailSlice.reducer;
