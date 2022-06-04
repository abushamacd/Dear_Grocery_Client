import React from "react";
import Brands from "../../Sections/Home/Brands";
import Categorys from "../../Sections/Home/Categorys";
import Hero from "../../Sections/Home/Hero";
import Products from "../../Sections/Home/Products";
import Promo from "../../Sections/Home/Promo";
import Collections from "../../Sections/Home/Collections";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categorys />
      <Promo />
      <Products />
      <Brands />
      <Collections />
    </div>
  );
};

export default Home;
