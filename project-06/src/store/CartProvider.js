import React from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCardHandler = (item) => {};
  const removeItemFromCardHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
