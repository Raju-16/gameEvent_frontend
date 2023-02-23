import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getGameEvents } from "../Redux/action";
import styles from "../Styles/Home.module.css";

const Home = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleCart = (el) => {
    dispatch(addToCart(el));
  };

  useEffect(() => {
    dispatch(getGameEvents());
  }, [dispatch]);

  console.log(games, "Games");

  return (
    <div className={styles.container}>
      {games.length > 0 &&
        games.map((el) => {
          return (
            <div className={styles.box} key={el._id}>
              <div className={styles.imgDiv}>
                {<img src={el.image} alt="" width={"350px"} height={"250px"} />}
              </div>
              <h2> {el.name}</h2>
              <button onClick={() => handleCart(el)}>Add to Cart</button>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
