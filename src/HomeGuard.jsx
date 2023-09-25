import React from "react";
import Header from "./Components/SharedComponent/Header";
import Footer from "./Components/SharedComponent/Footer";
import FooterBar from "./Components/SharedComponent/FooterBar";

function HomeGuard({ Component }) {
  return (
    <>
      <Header />
      <Component />
      <Footer />
      <FooterBar />
    </>
  );
}

export default HomeGuard;
