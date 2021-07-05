import React, { useCallback, useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-http-c71fc-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIngredients((prevState) => [
          ...prevState,
          { id: data.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== id)
    );
  };

  const filterIngredientsHandler = useCallback((filter) => {
    setIngredients(filter);
  }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", ingredients);
  }, [ingredients]);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
