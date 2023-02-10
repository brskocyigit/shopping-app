import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
    changed:false,

  },
  reducers: {
    replaceData(state, action){
        state.totalQuantity = action.payload.totalQuantity;
        state.itemList = action.payload.itemList;
    },
    addToCart(state, action) {
        state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
        state.changed = true;
      const id = action.payload;
      const selectedItem = state.itemList.find((item) => item.id === id);
      if (selectedItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        selectedItem.quantity--;
        selectedItem.totalPrice -= selectedItem.price;
      }
      state.totalQuantity--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice;
