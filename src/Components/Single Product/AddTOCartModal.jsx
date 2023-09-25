import React from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import "./cart.css";
function AddTOCartModal({ open, onClose, product }) {
  return (
    <>
      <Modal
        show={open}
        onHide={onClose}
        centered
        size="lg"
        className="modalContainer"
      >
        <Modal.Header bsPrefix="modelWrap">
          <Modal.Title bsPrefix="modelHeader">
            {" "}
            Product successfully added to your shopping cart
          </Modal.Title>
          <AiOutlineClose onClick={onClose} className="modelicon" />
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-12 col-md-6 col-lg-6">
                <div className="img_wrapper">
                  <img
                    src={product?.image}
                    alt="product Details"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-12 col-md-6 col-lg-6">
                <div className="content_wrap">
                  <h5>{product?.name}</h5>
                  <p className="item_size_price">Item:MB494</p>
                  <p className="item_size_price">Size:40X60 cm</p>
                  <p className="item_size_price price">
                    Price: <span className="priceMain">{product?.dPrice}</span>{" "}
                    <span className="priceSec">{product?.price}</span>
                  </p>
                  <p className="para">
                    Threshold Delivery - additional cost per unit: ₹400.00
                    In-stock Usually ships in 1-7 business days.
                  </p>
                  <p className="para">
                    *Price does not include shipping and processing, gift wrap,
                    discounts or taxes
                  </p>
                </div>

                <hr />

                <div className="buttonWrap">
                  <button
                    type="button"
                    className="prim_btn shopNow "
                    onClick={onClose}
                  >
                    <span>Checkout</span>
                  </button>
                  <button type="button" className="sec_btn" onClick={onClose}>
                    <span> Continue Shoping</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTOCartModal;
