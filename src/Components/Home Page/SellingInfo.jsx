import React from "react";
import Pic1 from "../../image/Selling/1.png";
import Pic2 from "../../image/Selling/2.png";
import Pic3 from "../../image/Selling/3.png";
import Pic4 from "../../image/Selling/4.png";
import Pic5 from "../../image/Selling/5.png";

import "./sellinginfo.css";

function SellingInfo() {
  return (
    <>
      <div className="selling_outer_wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="selling_main_wrap1">
                <div className="selleing_img_wrap">
                  <img
                    src={Pic1}
                    alt="selling"
                    title="selling"
                    className="img-fluid"
                  />
                  <div className="selling_polygon_wrap">
                    <div className="polygon_info_wrap">
                      <div className="content">
                        <p>SOFA & CHAIRS</p>
                        <h3>Need it fast?</h3>
                        <h5>See what’s in stock!</h5>
                        <a href="#">Shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="selling_sub_wrap">
                    <div className="selling_sub_img_wrap">
                      <img
                        src={Pic2}
                        alt="Selling"
                        title="Selling"
                        className="img-fluid"
                      />
                      <div className="sub_img_info_wrap">
                        <h5>
                          20%
                          <br />
                          OFF
                        </h5>
                      </div>
                    </div>

                    <div className="selling_sub_info_wrap">
                      <h3>Bedding Sets</h3>
                      <p>Floral Tales Collection</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="selling_sub_wrap">
                    <div className="selling_sub_img_wrap">
                      <img
                        src={Pic3}
                        alt="Selling"
                        title="Selling"
                        className="img-fluid"
                      />
                      <div className="sub_img_info_wrap">
                        <h5>
                          20%
                          <br />
                          OFF
                        </h5>
                      </div>
                    </div>

                    <div className="selling_sub_info_wrap">
                      <h3>Soleil Dining Chair</h3>
                      <p>lightweight chair</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="selling_sub_wrap">
                    <div className="selling_sub_img_wrap">
                      <img
                        src={Pic4}
                        alt="Selling"
                        title="Selling"
                        className="img-fluid"
                      />
                      <div className="sub_img_info_wrap">
                        <h5>
                          20%
                          <br />
                          OFF
                        </h5>
                      </div>
                    </div>

                    <div className="selling_sub_info_wrap">
                      <h3>Living Sets</h3>
                      <p>Easy-to-match shade of beige.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="selling_sub_wrap">
                    <div className="selling_sub_img_wrap">
                      <img
                        src={Pic5}
                        alt="Selling"
                        title="Selling"
                        className="img-fluid"
                      />
                      <div className="sub_img_info_wrap">
                        <h5>
                          20%
                          <br />
                          OFF
                        </h5>
                      </div>
                    </div>

                    <div className="selling_sub_info_wrap">
                      <h3>Outdoor Sets</h3>
                      <p>Simplest design solutions</p>
                    </div>
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

export default SellingInfo;
