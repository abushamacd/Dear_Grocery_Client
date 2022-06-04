import React from "react";
import Categorys from "../../Sections/Home/Categorys";
import Hero from "../../Sections/Home/Hero";
import Products from "../../Sections/Home/Products";
import Promo from "../../Sections/Home/Promo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categorys />
      <Promo />
      <Products />
    </div>
  );
};

export default Home;
