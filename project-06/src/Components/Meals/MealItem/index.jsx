import React from "react";
import MealItemForm from "../MealItemForm";
import styles from "./styles.module.css";

const MealItem = ({ name, description, price, id }) => {
  const formatPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
