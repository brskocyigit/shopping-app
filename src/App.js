import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;

function App() {
<<<<<<< Updated upstream
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}

=======
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  //Bu kodu eklediğimde databasede veri yoksa render işlemi gerçekleşmiyor.(LAYOUT)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
>>>>>>> Stashed changes
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
