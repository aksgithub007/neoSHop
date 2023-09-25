import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./tabcontent.css";
function TabContent() {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="DESCRIPTION">
          <p className="custom_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue
            interdum velit euismod in pellentesque massa placerat. Pharetra diam
            sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit
            amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis
            mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula
            ipsum.
          </p>
        </Tab>
        <Tab eventKey="profile" title="ADDITIONAL INFORMATION">
          <p className="custom_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue
            interdum velit euismod in pellentesque massa placerat. Pharetra diam
            sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit
            amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis
            mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula
            ipsum.
          </p>
        </Tab>
        <Tab eventKey="contact" title="REVIEWS">
          <p className="custom_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue
            interdum velit euismod in pellentesque massa placerat. Pharetra diam
            sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit
            amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis
            mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula
            ipsum.
          </p>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabContent;
