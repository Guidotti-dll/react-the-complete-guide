import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...state, action.ingredient];
    case "DELETE":
      return state.filter((ingredient) => ingredient.id !== action.id);

    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        error: null,
        loading: true,
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
      };
    case "ERROR":
      return {
        loading: true,
        error: action.error,
      };
    case "CLEAR":
      return {
        ...state,
        error: null,
      };
    default:
      throw new Error("Should not be reached!");
  }
};

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const addIngredientHandler = useCallback((ingredient) => {
    httpDispatch({ type: "SEND" });
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
        httpDispatch({ type: "RESPONSE" });
        return response.json();
      })
      .then((data) => {
        // setIngredients((prevState) => [
        //   ...prevState,
        //   { id: data.name, ...ingredient },
        // ]);
        dispatch({ type: "ADD", ingredient: { id: data.name, ...ingredient } });
      });
  }, []);

  const removeIngredientHandler = useCallback((id) => {
    httpDispatch({ type: "SEND" });
    fetch(
      `https://react-http-c71fc-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        httpDispatch({ type: "RESPONSE" });
        // setIngredients((prevState) =>
        //   prevState.filter((ingredient) => ingredient.id !== id)
        // );
        dispatch({ type: "DELETE", id });
      })
      .catch((error) => {
        httpDispatch({ type: "ERROR", error: "Something went wrong" });
        // setError("Something went wrong");
        // setIsLoading(false);
      });
  }, []);

  const clearError = useCallback(() => {
    httpDispatch({ type: "CLEAR" });
  }, []);

  const filterIngredientsHandler = useCallback((filteredIngredients) => {
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", ingredients);
  }, [ingredients]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
