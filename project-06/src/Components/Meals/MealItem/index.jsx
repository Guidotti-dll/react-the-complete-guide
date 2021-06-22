import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "../MealItemForm";
import styles from "./styles.module.css";

const MealItem = ({ name, description, price, id }) => {
  const formatPrice = `$${price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
