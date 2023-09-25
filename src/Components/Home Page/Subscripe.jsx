import React from "react";
import SectionHeader from "../SharedComponent/SectionHeader";
import { BsArrowRight } from "react-icons/bs";
import "./subscripe.css";

function Subscripe() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="Subscribe_Outer_wrapper">
        <SectionHeader
          heading="SIGN UP FOR NEWS & OFFERS!"
          subHeading="Explore a wide range of affordable, well-designed and functional home furnishing solutions"
          isLine={false}
        />

        <div className="container subscribe_main_wrapper">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="form_wrap">
                <input
                  type="email"
                  className=" customInput"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
                <button type="submit" className="customButton">
                  <BsArrowRight className="icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscripe;
