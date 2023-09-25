import React from "react";

function SectionHeader({ heading, subHeading, isLine }) {
  return (
    <>
      <div className="sectionHeader">
        <h4>{heading}</h4>
        <p>{subHeading}</p>
        {isLine ? <hr /> : null}
      </div>
    </>
  );
}

export default SectionHeader;
