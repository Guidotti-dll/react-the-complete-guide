import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  const product = params.productId;
  return (
    <section>
      <h1>Product detail</h1>
      <p>{product}</p>
    </section>
  );
};

export default ProductDetail;
