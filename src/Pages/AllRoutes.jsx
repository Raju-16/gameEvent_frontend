import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Singup from "./Signup";
import Signin from "./Signin";
import Cart from "./Cart";
import UserInfo from "./UserInfo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/game" element={<Home />} />
      <Route path="/" element={<Singup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/userinfo" element={<UserInfo />} />
    </Routes>
  );
};

export default AllRoutes;
