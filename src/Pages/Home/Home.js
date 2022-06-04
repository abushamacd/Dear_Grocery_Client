import React from "react";
import Category from "../../Sections/Home/Category";
import Hero from "../../Sections/Home/Hero";
import Products from "../../Sections/Home/Products";
import Promo from "../../Sections/Home/Promo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Promo />
      <Products />
    </div>
  );
};

export default Home;
