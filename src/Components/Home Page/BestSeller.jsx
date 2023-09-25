import React, { useState } from "react";
import Pic1 from "../../image/Best Seller/1.png";
import Pic2 from "../../image/Best Seller/2.png";
import Pic3 from "../../image/Best Seller/3.png";
import Pic4 from "../../image/Best Seller/4.png";
import Pic5 from "../../image/Best Seller/5.png";
import Pic6 from "../../image/Best Seller/6.png";
import SectionHeader from "../SharedComponent/SectionHeader";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import "./bestseller.css";

function BestSeller() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <div className="seller_outer_wrapper">
        <SectionHeader
          heading="Bestsellers"
          subHeading="Sitewide Discounts & Savings of up to 25%"
          isLine={true}
        />
        <div className="container">
          <div className="row" style={{ marginBottom: "25px" }}>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic1}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic2}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic3}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic4}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic5}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="seller_main_wrapper">
                <div className="image_wrapper">
                  <img
                    src={Pic6}
                    alt="Best Seller"
                    title="Best Seller"
                    className="img-fluid"
                  />
                </div>
                <div className="seller_content_wrapper">
                  <div className="rating">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                  <div className="info">
                    <h5>White Wooden Chair</h5>
                    <p>
                      <span className="mainCost">8000.00</span>
                      <span className="saleCost">6000.00</span>
                    </p>
                  </div>
                  <div className="shop_button">
                    <button type="button" className="primary">
                      <AiFillHeart className="icon" />
                    </button>
                    <button type="button">
                      <RiShoppingBag2Fill className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
