import React from "react";
import { Filter, ProductList, Sort } from "../components";

function Product(props) {
  return (
    <div
      style={{
        padding: "7em 5em",
        position: "relative",
        background: "#c2bebe",
      }}
    >
      <Sort />
      <Filter />
      <ProductList />
    </div>
  );
}

export default Product;
