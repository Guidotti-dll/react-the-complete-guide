import { initialState } from "../context/productContext";
import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, id) => {
      const prodIndex = curState.products.findIndex(
        (product) => product.id === id
      );
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };

  initStore(actions, { products: initialState });
};

export default configureStore;
