import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";

import SectionHeader from "../SharedComponent/SectionHeader";
import { AiOutlinePlus } from "react-icons/ai";
import "./neofurniture.css";

function NeoFurniture() {
  return (
    <>
      <div className="container-fluid neo_outer_wrap">
        <SectionHeader
          heading="#NEOSTOREfurniture"
          subHeading="Use #neostore on your post for a chance to be featured!"
          isLine={true}
        />
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          style={{ width: "100%", height: "100%" }}
        >
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper1">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper2">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper3">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper4">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper5">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper6">
              <div className="neo_image_wrapper neo_wrapper6">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper1">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper2">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper3">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper4">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper1">
              <div className="neo_image_wrapper neo_wrapper5">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="neo_inner_wrapper neo_inner_wrapper6">
              <div className="neo_image_wrapper neo_wrapper6">
                <div className="neo_overlay">
                  <AiOutlinePlus className="neo_plus_icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default NeoFurniture;
