import React from "react";
import Sort from "./Left Panel/Sort";
import ProductList from "./Right Panel/ProductList";

function MainProductList() {
  return (
    <>
      <div className="product_outer_wrap">
        <div className="container">
          <div className="row">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProductList;
