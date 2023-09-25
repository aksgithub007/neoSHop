import React from "react";
import BreadcrumbPage from "../Components/SharedComponent/BreadcrumbPage";
import MainProductList from "../Components/ProductDetails/MainProductList";

function Product() {
  return (
    <>
      <BreadcrumbPage breadcrumbLink="Furniture" />
      <MainProductList />
    </>
  );
}

export default Product;
