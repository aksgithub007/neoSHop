import React from "react";
import "./breadcrumbPage.css";
function BreadcrumbPage({ breadcrumbLink }) {
  return (
    <>
      <div className="breadcrumb_outer_wapper">
        <div className="breadcrumb_inner_wapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <ul>
                  <li>
                    <a href="/">Home</a> <span>/</span>
                  </li>
                  <li>
                    <a href="#" className="active">
                      {breadcrumbLink}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadcrumbPage;
