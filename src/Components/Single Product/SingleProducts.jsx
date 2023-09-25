import React, { useState } from "react";
import { AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import "./singleProducts.css";
import TabContent from "./TabContent";
import TrendingSlider from "../Home Page/TrendingSlider";
import BreadcrumbPage from "../SharedComponent/BreadcrumbPage";
import AddTOCartModal from "./AddTOCartModal";
function SingleProducts({ product }) {
  const [isModal, setIsModal] = useState(false);
  const handleCartQuantity = (e) => {
    console.log(e.target.value, "target Element ");
  };
  const handleWishList = () => {
    console.log("click");
  };
  const handleShareList = () => {
    console.log("click");
  };
  const handleCart = (e) => {
    e.preventDefault();
    console.log(isModal);
    setIsModal(true);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <BreadcrumbPage breadcrumbLink={product?.name} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-12 col-md-6 col-lg-6">
            sjdkdssdjkdjsjdkj
          </div>
          <div className="col-6 col-sm-12 col-md-6 col-lg-6">
            <div className="singleProduct_content_wrapper">
              <h6>{product?.name}</h6>
              <h4>{product?.price}</h4>
              <p>Price incl. of all taxes</p>
              <p className="brand_info">
                Brand: Studio Design
                <br />
                Reference: demo_3
                <br />
                In stock {product?.stock} Items
                <br />
              </p>
              <p className="sp_description">{product?.description}</p>
            </div>
            <hr />
            <div className="color_wrapper">
              <h6>Choose Color</h6>
            </div>
            <div className="buttonWrapper">
              <form onSubmit={handleCart}>
                <button type="submit" className="shopNow sp_button">
                  Add To Cart
                </button>
                <input
                  type="number"
                  onChange={handleCartQuantity}
                  className="sp_input"
                  defaultValue={1}
                />
              </form>
            </div>
            <div className="share_wish_wrapper">
              <div className="wish_wrapper">
                <button
                  type="button"
                  className="wish_button"
                  onClick={handleWishList}
                >
                  <AiFillHeart className="wish_icon" />
                </button>
                <p>Add to Wishlist</p>
              </div>
              <div className="share_wrapper">
                <button
                  type="button"
                  className="share_button"
                  onClick={handleShareList}
                >
                  <AiOutlineShareAlt className="share_icon" />
                </button>
                <p>Share this</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <TabContent />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <TrendingSlider
              heading="You might also like"
              subheading="From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value."
            />
          </div>
        </div>
      </div>
      <AddTOCartModal
        open={isModal}
        onClose={() => setIsModal(false)}
        product={product}
      />
    </>
  );
}

export default SingleProducts;
