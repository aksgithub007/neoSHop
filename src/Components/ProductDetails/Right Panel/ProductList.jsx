import { useEffect, useState } from "react";
import React from "react";
import SortView from "./SortView";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductList } from "../../../Redux/Slice/ProductSlice";
import "./productlist.css";
import { Link } from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [listView, setListView] = useState(false);
  const [gridView, setGridView] = useState(true);
  //   console.log(products, "prodyuct array");
  const dispatch = useDispatch();
  const stateInfo = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllProductList());
  }, []);
  useEffect(() => {
    if (stateInfo.product?.products.length > 0) {
      setProducts(stateInfo.product?.products);
    } else {
      setProducts([]);
    }
  }, [stateInfo]);
  return (
    <>
      <div className="col-8 col-sm-12 col-md-8 col-lg-8">
        <SortView
          products={products}
          setProducts={setProducts}
          stateInfo={stateInfo}
          listView={listView}
          gridView={gridView}
          setListView={setListView}
          setGridView={setGridView}
        />
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <Link to={`/products/${product.id}`}>
                <div className="productlist_inner_wrap">
                  <div className="product_img_wrap">
                    <img
                      src={product.image}
                      alt="Product Listing"
                      className="img-fluid"
                    />
                  </div>
                  <div className="product_content_wrap">
                    <h6>{product.name}</h6>
                    <p>
                      {product.dPrice} <span>{product.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
