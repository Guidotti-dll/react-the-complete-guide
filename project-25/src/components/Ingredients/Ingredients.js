import React, { useCallback, useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
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
        setIsLoading(false);
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
    setIsLoading(true);
    fetch(
      `https://react-http-c71fc-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        setIngredients((prevState) =>
          prevState.filter((ingredient) => ingredient.id !== id)
        );
      })
      .catch((error) => {
        setError("Something went wrong");
        setIsLoading(false);
      });
  };

  const clearError = () => {
    setError(null);
  };

  const filterIngredientsHandler = useCallback((filter) => {
    setIngredients(filter);
  }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", ingredients);
  }, [ingredients]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

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
