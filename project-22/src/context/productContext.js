import React, { createContext, useState } from "react";

const initialState = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductsContext = createContext({
  products: [],
  toggleFav: () => {},
});
const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(initialState);

  const toggleFavorite = (id) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex(
        (product) => product.id === id
      );
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;