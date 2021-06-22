import React from "react";
import styles from "./styles.module.css";
import { DUMMY_MEALS } from "../../../api/dummyMeals";
import Card from "../../UI/Card";
import MealItem from "../MealItem";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
