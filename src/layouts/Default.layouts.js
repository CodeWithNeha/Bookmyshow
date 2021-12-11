
import React from "react";

//Components
import Navbar from "../component/Navbar/navbar.component.js";
import HeroCarousel from "../component/HeroCarousel/HerCarousel.component.js";
const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </div>
  );
};

export default DefaultLayout;