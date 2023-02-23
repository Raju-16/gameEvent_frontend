import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(cart, "this is cart");

  const handleCheckout = () => {
    navigate("/checkout", { replace: true });
  };

  return (
    <div>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div key={item._id}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <p>{item.name}</p>
              <button onClick={() => handleCheckout()}>Checkout</button>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
