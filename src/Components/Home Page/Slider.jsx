import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Slider1 from "../../image/slide1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgWrapper">
            <img
              src={Slider1}
              alt="Slider 1"
              title="slider1"
              className="img-fluid"
            />
            <div className="ContentWrapper">
              <h2>
                Furniture
                <br />
                2022
              </h2>
              <h5>New Arrivals</h5>
              <h1>
                Spring <br /> Collections
              </h1>
              <button type="button" className="shopNow">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgWrapper">
            <img
              src={Slider1}
              alt="Slider 1"
              title="slider1"
              className="img-fluid"
            />
            <div className="ContentWrapper">
              <h2>
                Furniture
                <br />
                2022
              </h2>
              <h5>New Arrivals</h5>
              <h1>
                Spring <br /> Collections
              </h1>
              <button type="button" className="shopNow">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgWrapper">
            <img
              src={Slider1}
              alt="Slider 1"
              title="slider1"
              className="img-fluid"
            />
            <div className="ContentWrapper">
              <h2>
                Furniture
                <br />
                2022
              </h2>
              <h5>New Arrivals</h5>
              <h1>
                Spring <br /> Collections
              </h1>
              <button type="button" className="shopNow">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgWrapper">
            <img
              src={Slider1}
              alt="Slider 1"
              title="slider1"
              className="img-fluid"
            />
            <div className="ContentWrapper">
              <h2>
                Furniture
                <br />
                2022
              </h2>
              <h5>New Arrivals</h5>
              <h1>
                Spring <br /> Collections
              </h1>
              <button type="button" className="shopNow">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgWrapper">
            <img
              src={Slider1}
              alt="Slider 1"
              title="slider1"
              className="img-fluid"
            />
            <div className="ContentWrapper">
              <h2>
                Furniture
                <br />
                2022
              </h2>
              <h5>New Arrivals</h5>
              <h1>
                Spring <br /> Collections
              </h1>
              <button type="button" className="shopNow">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
