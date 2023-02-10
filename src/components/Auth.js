import React from "react";
<<<<<<< Updated upstream
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler();
  };
=======
import {useDispatch} from "react-redux";
import { authActions } from "../store/auth-slice";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(authActions.login());
  }
>>>>>>> Stashed changes
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
