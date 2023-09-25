import React from "react";
import Header from "./Components/SharedComponent/Header";
import Footer from "./Components/SharedComponent/Footer";
import FooterBar from "./Components/SharedComponent/FooterBar";
import MainHeader from "./Components/SharedComponent/MainHeader";
import { Navigate } from "react-router-dom";
function AuthGuard({ Component, isAuth }) {
  const id = sessionStorage.getItem("id");
  if (id) {
    isAuth = true;
  }
  return (
    <>
      <Header isNav={true} />
      <MainHeader />
      {isAuth === true ? <Component /> : <Navigate to="/login" />}
      <Footer />
      <FooterBar />
    </>
  );
}

export default AuthGuard;
