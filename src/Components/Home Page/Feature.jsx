import React from "react";
import Pic1 from "../../image/Feature/1.png";
import Pic2 from "../../image/Feature/2.png";
import Pic3 from "../../image/Feature/3.png";
import "./feature.css";

function Feature() {
  return (
    <>
      <div className="feature_outer_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="feature_main_wrapper wrapper1">
                <div className="feature_content_wrapper">
                  <h6>NEW ARRIVALS</h6>
                  <h3>Sofa Style 2021</h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="feature_main_wrapper wrapper2">
                <div className="feature_content_wrapper">
                  <h6>NEW ARRIVALS</h6>
                  <h3>Perfect fit for your home</h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="feature_main_wrapper wrapper3">
                <div className="feature_content_wrapper">
                  <h6>NEW ARRIVALS</h6>
                  <h3>New Collection</h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
