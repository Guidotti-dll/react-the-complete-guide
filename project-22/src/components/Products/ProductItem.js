import React, { useContext } from "react";
import { ProductsContext } from "../../context/productContext";

import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = ({ id, title, isFav, description }) => {
  const { toggleFav } = useContext(ProductsContext);

  const toggleFavHandler = () => {
    toggleFav(id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={isFav ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
