import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
<<<<<<< Updated upstream
  const cartItems = useSelector((state) => state.cart.itemList);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(total);
  const showCart = useSelector((state) => state.cart.showCart);

=======
  let total = 0;
  const itemList = useSelector(state=>state.cart.itemList);
  const showCart = useSelector(state=>state.cart.showCart);
  itemList.forEach(element => {
    total +=element.totalPrice;
  });
>>>>>>> Stashed changes
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
<<<<<<< Updated upstream
        {showCart && <CartItems />}
        <div
          style={{
            textAlign: "right",
            marginRight: "50px",
            marginBottom: "20px",
            marginTop: "1rem",
          }}
        >
          <h3>Total: {total}</h3>
=======
        {showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
>>>>>>> Stashed changes
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
