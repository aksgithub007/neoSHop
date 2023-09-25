import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import "./sortview.css";
function SortView({
  products,
  setProducts,
  stateInfo,
  listView,
  gridView,
  setListView,
  setGridView,
}) {
  const handleSort = (e) => {
    console.log(e.target.value, "Select Value");

    if (e.target.value === "2") {
      const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
      console.log(sortedProducts, "sort by low to high");
      setProducts(sortedProducts);
    } else if (e.target.value === "3") {
      const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
      console.log(sortedProducts, "sort by low to high");
      setProducts(sortedProducts);
    } else {
      setProducts(stateInfo.product.products);
    }
  };

  const handleView = (e) => {
    console.log(event.target.getAttribute("data-key"), "click view icon");
    if (e.target.getAttribute("data-key") === "grid") {
      setGridView(true);
      setListView(false);
    } else {
      setGridView(false);
      setListView(true);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="sortview_inner_wrap">
            <div className="select_wrap">
              <p>Sort By:</p>
              <select
                className=" custom_select"
                aria-label="Default select example "
                onChange={handleSort}
              >
                <option selected>Select</option>
                <option value="1">Best Match</option>
                <option value="2">Price Low To High</option>
                <option value="3">Price High To Low</option>
              </select>
            </div>
            <div className="view_wrap">
              <p>View:</p>

              <BsFillGridFill
                className={`icon icon1 ${gridView ? "active" : null}`}
                data-key="grid"
                onClick={handleView}
              />

              <BsListUl
                className={`icon ${listView ? "active" : null}`}
                data-key="List"
                onClick={handleView}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortView;
