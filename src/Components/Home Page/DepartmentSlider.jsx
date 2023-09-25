import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdChair, MdTableRestaurant } from "react-icons/md";
import { GiSofa, GiLockers } from "react-icons/gi";
import { BsFillLampFill } from "react-icons/bs";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper";
import Slider1 from "../../image/slide1.jpg";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
import "./DepartmentSlider.css";
import SectionHeader from "../SharedComponent/SectionHeader";

function DepartmentSlider() {
  return (
    <>
      <SectionHeader
        heading="Shop By Department"
        subHeading="Sitewide Discounts & Savings of up to 25%"
        isLine={true}
      />
      <div className="container dep_main_wrapper">
        {/* <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <AiFillStar className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Popular</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <MdChair className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Chair</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <MdTableRestaurant className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Table</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <GiSofa className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Sofa</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <GiLockers className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Cupboard</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="departmentWrapper">
              <div className="iconWarpper">
                <BsFillLampFill className="icon" />
              </div>
              <div className="dep_contentWrapper">
                <p>Lamp</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}

        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <AiFillStar className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Popular</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <MdChair className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Chair</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <MdTableRestaurant className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Table</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <GiSofa className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Sofa</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <GiLockers className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Cupboard</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <div className="departmentWrapper">
            <div className="iconWarpper">
              <BsFillLampFill className="icon" />
            </div>
            <div className="dep_contentWrapper">
              <p>Lamp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentSlider;
