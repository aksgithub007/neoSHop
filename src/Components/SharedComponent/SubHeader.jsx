import React from "react";

function SubHeader() {
  return (
    <>
      <div className="container-fluid">
        <h2
          className="mt-4 ms-5 fw-bold fs-2"
          style={{
            color: " #bb0100",
            letterSpacing: "0.8px",
            lineHeight: "45px",
          }}
        >
          Neo<span className="text-uppercase">Store</span>
        </h2>
      </div>
    </>
  );
}

export default SubHeader;
