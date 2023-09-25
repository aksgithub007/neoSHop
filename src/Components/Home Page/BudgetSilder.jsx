import React from "react";
import pic1 from "../../image/budget/1.png";
import pic2 from "../../image/budget/2.png";
import pic3 from "../../image/budget/3.png";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
import "./BudgetSlider.css";
import SectionHeader from "../SharedComponent/SectionHeader";

function BudgetSlider() {
  return (
    <>
      <SectionHeader
        heading="FURNITURE FOR EVERY BUDGET"
        subHeading="From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.        "
        isLine={true}
      />
      {/* <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SwiperSlide>
              <div className="budgetWrapper">
                <div className="imageWrapper">
                  <img
                    src={pic1}
                    alt="Budget Slider"
                    title="Budget Slider"
                    className="img-fluid"
                  />
                </div>
                <div className="budgetContentWrapper">
                  <div className="innerContent">
                    <p>Sofas under</p>
                    <button type="button" className="shopNow">
                      <span>Shop Now</span>
                    </button>
                  </div>
                  <p className="price">12000</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SwiperSlide>
              <div className="budgetWrapper">
                <div className="imageWrapper">
                  <img
                    src={pic2}
                    alt="Budget Slider"
                    title="Budget Slider"
                    className="img-fluid"
                  />
                </div>
                <div className="budgetContentWrapper">
                  <div className="innerContent">
                    <p>Sofas under</p>
                    <button type="button" className="shopNow">
                      <span>Shop Now</span>
                    </button>
                  </div>
                  <p className="price">12000</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SwiperSlide>
              <div className="budgetWrapper">
                <div className="imageWrapper">
                  <img
                    src={pic3}
                    alt="Budget Slider"
                    title="Budget Slider"
                    className="img-fluid"
                  />
                </div>
                <div className="budgetContentWrapper">
                  <div className="innerContent">
                    <p>Sofas under</p>
                    <button type="button" className="shopNow">
                      <span>Shop Now</span>
                    </button>
                  </div>
                  <p className="price">12000</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div> */}
      <div className="container budget_main_wrapper">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="budgetWrapper">
            <div className="imageWrapper">
              <img
                src={pic1}
                alt="Budget Slider"
                title="Budget Slider"
                className="img-fluid"
              />
            </div>
            <div className="budgetContentWrapper">
              <div className="innerContent">
                <p>Sofas under</p>
                <button type="button" className="shopNow">
                  <span>Shop Now</span>
                </button>
              </div>
              <p className="price">12000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="budgetWrapper">
            <div className="imageWrapper">
              <img
                src={pic2}
                alt="Budget Slider"
                title="Budget Slider"
                className="img-fluid"
              />
            </div>
            <div className="budgetContentWrapper">
              <div className="innerContent">
                <p>Sofas under</p>
                <button type="button" className="shopNow">
                  <span>Shop Now</span>
                </button>
              </div>
              <p className="price">12000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="budgetWrapper">
            <div className="imageWrapper">
              <img
                src={pic3}
                alt="Budget Slider"
                title="Budget Slider"
                className="img-fluid"
              />
            </div>
            <div className="budgetContentWrapper">
              <div className="innerContent">
                <p>Sofas under</p>
                <button type="button" className="shopNow">
                  <span>Shop Now</span>
                </button>
              </div>
              <p className="price">12000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetSlider;
