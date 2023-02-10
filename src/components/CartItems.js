import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
<<<<<<< Updated upstream
          <li>
            <CartItem
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
              quantity={item.quantity}
=======
          <li key={item.id}>
            <CartItem
              id={item.id}
              quantity={item.quantity}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
>>>>>>> Stashed changes
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
