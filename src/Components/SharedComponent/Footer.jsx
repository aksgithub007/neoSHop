import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div
      className="footer_wrapper"
      style={{
        width: "100%",
        height: "auto",
        background: "#111111",
        marginBottom: "-16px",
        padding: "10px 15px",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="mt-4 mb-5">
              <h5
                className="fw-bold"
                style={{
                  color: "#BB0100",
                  letterSpacing: "0.8px",
                  fontSize: "30px",
                }}
              >
                Neo<span>STORE</span>
              </h5>
            </div>
            <div>
              <form>
                <InputGroup className="mb-3">
                  <MdEmail
                    style={{
                      position: "absolute",
                      background: "#ffff",
                      top: "17px",
                      left: "8px",
                      zIndex: "999",
                      fontSize: "18px",
                      color: "#bb0100",
                    }}
                  />
                  <input
                    type="email"
                    style={{
                      position: "relative",
                      padding: "8px 35px",
                      borderRadius: "0px",
                      height: "48px",
                      width: "326px",
                      outline: "none",
                      borderColor: "#ced4da",
                      boxShadow: "none",
                    }}
                    class="form-control "
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn text-light"
                    type="button"
                    id="button-addon2"
                    style={{
                      position: "absolute",
                      background: "#ffff",
                      top: "4px",
                      right: "2px",
                      zIndex: "999",
                      width: "98px",
                      height: "40px",
                      backgroundColor: "#bb0100",
                      borderRadius: "2px",
                    }}
                  >
                    Subscribe
                  </button>
                </InputGroup>
              </form>
            </div>
            <div>
              <div>
                <p
                  className="text-light"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  Conatct Info
                </p>
              </div>
              <div className="mb-2">
                <a
                  href="tel:+911234567890"
                  className="text-decoration-none text-light"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  +91 1234567890
                </a>{" "}
                <span
                  className="text-light"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  |
                </span>{" "}
                <a
                  href="tel:+911234567890"
                  className="text-decoration-none text-light"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  +91 1234567890
                </a>
              </div>
              <div>
                <p
                  className="text-light"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "100%",
                    background: "#7F7F7F",
                    marginRight: "5px",
                  }}
                >
                  <a href="#">
                    <FaFacebookF style={{ fontSize: "10px", color: "#fff" }} />
                  </a>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "100%",
                    background: "#7F7F7F",
                    marginRight: "5px",
                  }}
                >
                  <a href="#">
                    <AiFillInstagram
                      style={{ fontSize: "10px", color: "#fff" }}
                    />
                  </a>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "100%",
                    background: "#7F7F7F",
                  }}
                >
                  <a href="#">
                    <BsTwitter style={{ fontSize: "10px", color: "#fff" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <div div className="mt-5 mb-5">
              <h5
                className="text-uppercase fw-bold text-light"
                style={{ fontSize: "15px" }}
              >
                categories
              </h5>
            </div>

            {/* <ul className="">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">
                    Popular
                  </a>
                </li>
                <li className="mb-2">
                  {" "}
                  <a href="#" className="text-decoration-none text-light">
                    Chair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">
                    Table
                  </a>
                </li>
                <li className="mb-2">
                  {" "}
                  <a href="#" className="text-decoration-none text-light">
                    Sofa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">
                    Cupboard
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">
                    Lamp
                  </a>
                </li>
              </ul> */}
            <div className="text-light fw-normal" style={{ fontSize: "14px" }}>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
                aria-current="true"
              >
                Popular
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
              >
                Chair
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
              >
                Table
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
              >
                Sofa
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
              >
                Cupboard
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3"
              >
                Lamp
              </a>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <div div className="mt-5 mb-5">
              <h5
                className="text-uppercase fw-bold text-light"
                style={{ fontSize: "15px" }}
              >
                customer service
              </h5>
            </div>
            {/* <div>
              <ul className="text-decoration-none text-light list-style-type-none">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Discount</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
              </ul>
            </div> */}
            <div className="text-light fw-normal" style={{ fontSize: "14px" }}>
              <a
                href="#"
                class="list-group-item list-group-item-action mb-3"
                aria-current="true"
              >
                My Account
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Discount
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Returns
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Order History
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Order Tracking
              </a>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <div div className="mt-5 mb-5">
              <h5
                className="text-uppercase fw-bold text-light"
                style={{ fontSize: "15px" }}
              >
                furniture
              </h5>
            </div>
            {/* <div>
              <ul>
                <li>
                  <a href="#">Living Room Furniture</a>
                </li>
                <li>
                  <a href="#">Bar Furniture</a>
                </li>
                <li>
                  <a href="#">Bedroom Furniture</a>
                </li>
                <li>
                  <a href="#">Kids Furniture</a>
                </li>
                <li>
                  <a href="#">Accent Furniture</a>
                </li>
                <li>
                  <a href="#">Book Shelves</a>
                </li>
              </ul>
            </div> */}
            <div className="text-light fw-normal" style={{ fontSize: "14px" }}>
              <a
                href="#"
                class="list-group-item list-group-item-action mb-3"
                aria-current="true"
              >
                Living Room Furniture
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Bar Furniture
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Bedroom Furniture
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Kids Furniture
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Accent Furniture
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Book Shelves
              </a>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <div div className="mt-5 mb-5">
              <h5
                className="text-uppercase fw-bold text-light"
                style={{ fontSize: "15px" }}
              >
                usefule Links
              </h5>
            </div>
            {/* <div>
              <ul>
                <li>
                  <a href="#">Pramotions</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div> */}
            <div className="text-light">
              <a
                href="#"
                class="list-group-item list-group-item-action mb-3"
                aria-current="true"
              >
                Pramotions
              </a>
              <a href="#" class="list-group-item list-group-item-action mb-3">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
