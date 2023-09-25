import React, { useState } from "react";
import Pic1 from "../../image/special offer/1.png";
import Pic2 from "../../image/special offer/2.png";
import Pic3 from "../../image/special offer/3.png";
import { Rating } from "react-simple-star-rating";
import Timer from "@amplication/react-compound-timer";
import "./specialoffer.css";

function SpecialOffer() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <div className="offer_outer_wrap">
        <div
          className="container offer_container_wrap"
          style={{ paddingLeft: "35px", paddingRight: "35px" }}
        >
          <div className="outer_wrap_info">
            <div className="outer_inner_wrap">
              <div className="count_wrap">
                <h2>Special Offer</h2>
                <div className="countdown_wrap">
                  <h6>end in</h6>
                  <Timer initialTime={1.728e8} direction="backward">
                    <Timer.Days />d <Timer.Hours />h <Timer.Minutes />m{" "}
                    <Timer.Seconds />s
                    {/* <Timer.Milliseconds /> milliseconds */}
                  </Timer>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="offer_main_wrap">
                <div className="info_wrap">
                  <h5>White Wooden Chair</h5>
                  <p>2000</p>
                </div>
                <div className="image_wrap">
                  <img
                    src={Pic1}
                    alt="Special Offer"
                    title="Special Offer"
                    className="img-fluid"
                  />
                </div>
                <div className="footer_info_wrap">
                  <div className="progress">
                    <div
                      className="progress-bar customBar"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{ width: `${25}%` }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="footer_inner_info">
                    <h5>
                      Available: <span>289</span>
                    </h5>
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="offer_main_wrap">
                <div className="info_wrap">
                  <h5>White Wooden Chair</h5>
                  <p>2000</p>
                </div>
                <div className="image_wrap">
                  <img
                    src={Pic2}
                    alt="Special Offer"
                    title="Special Offer"
                    className="img-fluid"
                  />
                </div>
                <div className="footer_info_wrap">
                  <div className="progress">
                    <div
                      className="progress-bar customBar"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{ width: `${25}%` }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="footer_inner_info">
                    <h5>
                      Available: <span>289</span>
                    </h5>
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="offer_main_wrap">
                <div className="info_wrap">
                  <h5>White Wooden Chair</h5>
                  <p>2000</p>
                </div>
                <div className="image_wrap">
                  <img
                    src={Pic3}
                    alt="Special Offer"
                    title="Special Offer"
                    className="img-fluid"
                  />
                </div>
                <div className="footer_info_wrap">
                  <div className="progress">
                    <div
                      className="progress-bar customBar"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{ width: `${25}%` }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="footer_inner_info">
                    <h5>
                      Available: <span>289</span>
                    </h5>
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      fillColor="#BFBFBF"
                      emptyColor="#fff"
                      SVGstrokeColor="#BFBFBF"
                      SVGstorkeWidth={1}
                    />
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

export default SpecialOffer;
