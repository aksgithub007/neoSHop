import React from "react";
import Header from "./Header";

function FooterBar() {
  return (
    <div className="mt-3">
      <div
        className="  container-fluid d-flex align-items-center justify-content-center text-light"
        style={{ height: "40px", backgroundColor: "#bb0100" }}
      >
        <h6
          className="text-center text-light"
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "15px" }}
        >
          ©Neostore - All Rights Reserved
        </h6>
      </div>
    </div>
  );
}

export default FooterBar;
