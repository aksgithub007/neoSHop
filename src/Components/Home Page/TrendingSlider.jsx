import React from "react";
import pic1 from "../../image/trending/1.png";
import pic2 from "../../image/trending/2.png";
import pic3 from "../../image/trending/3.png";
import pic4 from "../../image/trending/4.png";
import pic5 from "../../image/trending/5.png";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
import "./TrendingSlider.css";
import SectionHeader from "../SharedComponent/SectionHeader";

function TrendingSlider({ heading, subheading }) {
  return (
    <>
      <SectionHeader
        heading={heading ? heading : "trending"}
        subHeading={
          subheading
            ? subheading
            : "Explore a wide range of affordable, well-designed and functional home furnishing solutions"
        }
        isLine={true}
      />
      <div className=" container trned_main_wrapper">
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="trendingWrapper">
            <div className="imageWrapper">
              <img
                src={pic1}
                alt="Trending Slider"
                title="Trending Slider"
                className="img-fluid"
              />
            </div>
            <div className="trendContentWrapper">
              <p>White Wooden Chair</p>
              <p className="price">1200</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="trendingWrapper">
            <div className="imageWrapper">
              <img
                src={pic2}
                alt="Trending Slider"
                title="Trending Slider"
                className="img-fluid"
              />
            </div>
            <div className="trendContentWrapper">
              <p>Modern Sofa Couch with Wood</p>
              <p className="price">1200</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="trendingWrapper">
            <div className="imageWrapper">
              <img
                src={pic3}
                alt="Trending Slider"
                title="Trending Slider"
                className="img-fluid"
              />
            </div>
            <div className="trendContentWrapper">
              <p>Armen Living Jaguar Chair</p>
              <p className="price">1200</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="trendingWrapper">
            <div className="imageWrapper">
              <img
                src={pic4}
                alt="Trending Slider"
                title="Trending Slider"
                className="img-fluid"
              />
            </div>
            <div className="trendContentWrapper">
              <p>Modern clock</p>
              <p className="price">1200</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="trendingWrapper">
            <div className="imageWrapper">
              <img
                src={pic5}
                alt="Trending Slider"
                title="Trending Slider"
                className="img-fluid"
              />
            </div>
            <div className="trendContentWrapper">
              <p>Globe Desk Lamp</p>
              <p className="price">1200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingSlider;
