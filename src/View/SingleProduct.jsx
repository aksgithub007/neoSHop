import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProductList } from "../Redux/Slice/ProductSlice";
import { useState } from "react";
import SingleProducts from "../Components/Single Product/SingleProducts";
function SingleProduct() {
  const [product, setProduct] = useState();
  const params = useParams();
  const stateData = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductList());
  }, []);
  useEffect(() => {
    let productId = params?.id;
    if (productId) {
      const finalProductDetails = stateData?.find(
        (curr) => curr.id === productId
      );
      setProduct(finalProductDetails);
      console.log(finalProductDetails);
    } else {
      setProduct([]);
    }
  }, [stateData]);

  return (
    <>
      <SingleProducts product={product} />
    </>
  );
}

export default SingleProduct;
