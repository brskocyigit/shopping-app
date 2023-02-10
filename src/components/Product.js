import React from "react";
<<<<<<< Updated upstream
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
=======
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
 
  const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(cartActions.addToCart({
      name,id,price
    }));
  }
>>>>>>> Stashed changes
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
<<<<<<< Updated upstream
      <button onClick={addToCartHandler}>Add to cart</button>
=======
      <button onClick={addToCart}>Add to cart</button>
>>>>>>> Stashed changes
    </div>
  );
};

export default Product;
