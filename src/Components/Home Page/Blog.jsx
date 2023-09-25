import React from "react";
import SectionHeader from "../SharedComponent/SectionHeader";
import pic1 from "../../image/Blog/1.png";
import pic2 from "../../image/Blog/2.png";
import pic3 from "../../image/Blog/3.png";
import "./blog.css";

function Blog() {
  return (
    <>
      <div className="Blog_Outer_Wrapper">
        <SectionHeader
          heading="From Our Blog"
          subHeading="See how our customers have styled davici products in their home"
          isLine={true}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="blog_wrapper">
                <div className="img_wrapper">
                  <img
                    src={pic1}
                    alt="Blog"
                    title="Blog"
                    className="img-fluid"
                  />
                  <div className="date_Wrapper">
                    <h2>28</h2>
                    <hr />
                    <h2>NOV</h2>
                  </div>
                </div>
                <div className="blog_content_wrapper">
                  <h5>Bedroom Chair</h5>
                  <h3>Perfect Bedroom Corner Chair </h3>
                  <hr />
                  <p>
                    An accent chair is a great focal point, adds contrast, and
                    complements the room’s decor.{" "}
                  </p>
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="blog_wrapper">
                <div className="img_wrapper">
                  <img
                    src={pic2}
                    alt="Blog"
                    title="Blog"
                    className="img-fluid"
                  />
                  <div className="date_Wrapper">
                    <h2>28</h2>
                    <hr />
                    <h2>NOV</h2>
                  </div>
                </div>
                <div className="blog_content_wrapper">
                  <h5>FURNITURE</h5>
                  <h3>A Beautiful Sunday Morning</h3>
                  <hr />
                  <p>
                    Color sets the tone for any space and dramatically impacts
                    the room’s atmosphere.
                  </p>
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="blog_wrapper">
                <div className="img_wrapper">
                  <img
                    src={pic3}
                    alt="Blog"
                    title="Blog"
                    className="img-fluid"
                  />
                  <div className="date_Wrapper">
                    <h2>28</h2>
                    <hr />
                    <h2>NOV</h2>
                  </div>
                </div>
                <div className="blog_content_wrapper">
                  <h5>DINING CHAIR</h5>
                  <h3>Maximalism Design Style</h3>
                  <hr />
                  <p>
                    A maximalist space is interesting to look at. Contrast and
                    color are everything.
                  </p>
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
