import React from "react";
import SubHeader from "./SubHeader";

function Header({ isNav }) {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center text-light"
        style={{ height: "40px", backgroundColor: "#bb0100" }}
      >
        <h6
          className="text-center"
          style={{ fontSize: "16px", fontWeight: "700", lineHeight: "20px" }}
        >
          MARKDOWNS: UP TO 70% OFF{" "}
          <a href="#" className="text-light text-decoration-none">
            SHOP NOW
          </a>
        </h6>
      </div>
      {!isNav ? <SubHeader /> : null}
    </>
  );
}

export default Header;
