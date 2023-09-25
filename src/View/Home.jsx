import React from "react";
import Slider from "../Components/Home Page/Slider";
import DepartmentSlider from "../Components/Home Page/DepartmentSlider";
import SectionHeader from "../Components/SharedComponent/SectionHeader";
import TrendingSlider from "../Components/Home Page/TrendingSlider";
import BudgetSlider from "../Components/Home Page/BudgetSilder";
import Subscripe from "../Components/Home Page/Subscripe";
import Blog from "../Components/Home Page/Blog";
import Feature from "../Components/Home Page/Feature";
import BestSeller from "../Components/Home Page/BestSeller";
import SpecialOffer from "../Components/Home Page/SpecialOffer";
import SellingInfo from "../Components/Home Page/SellingInfo";
import NeoFurniture from "../Components/Home Page/NeoFurniture";

function Home() {
  return (
    <>
      <div>
        <Slider />
        <DepartmentSlider />
        <TrendingSlider />
        <SpecialOffer />
        <SellingInfo />
        <BudgetSlider />
        <BestSeller />
        <Feature />
        <Blog />
        <NeoFurniture />
        <Subscripe />
      </div>
    </>
  );
}

export default Home;
