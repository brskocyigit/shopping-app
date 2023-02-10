import { configureStore } from "@reduxjs/toolkit";
<<<<<<< Updated upstream
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
=======
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart:cartSlice.reducer,
    ui:uiSlice.reducer
  },
});

>>>>>>> Stashed changes
export default store;
