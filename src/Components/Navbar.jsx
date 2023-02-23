import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <ul className={styles.navItems}>
        <li className={styles.heading}>
          <Link to={"/game"}>Game Event</Link>
        </li>
        <div className={styles.details}>
          <li>
            <Link to={"/checkout"}>Checkout</Link>
          </li>
          <li>
            <Link to={"/signin"}>SignIn</Link>
          </li>
          <li>
            <Link to={"/"}>Singup</Link>
          </li>
          <li>
            <Link to={"/cart"}>cart({cart.length})</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
