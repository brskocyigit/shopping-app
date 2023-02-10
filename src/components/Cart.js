import React from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
=======
import { cartActions } from "../store/cart-slice";
>>>>>>> Stashed changes
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const Cart = () => {
<<<<<<< Updated upstream
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(cartActions.setSowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCartHandler}>Cart: {quantity} Items</h3>
=======
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  console.log(totalQuantity)
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {totalQuantity} Items</h3>
>>>>>>> Stashed changes
    </div>
  );
};

export default Cart;
