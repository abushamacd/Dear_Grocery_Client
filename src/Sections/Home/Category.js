import React, { Component } from "react";
import Slider from "react-slick";
import Groceries from "../../assets/img/carousel-img-1.png";
import Fish from "../../assets/img/carousel-img-2.png";
import Meat from "../../assets/img/carousel-img-3.png";
import Vegetables from "../../assets/img/carousel-img-4.png";
import Fruits from "../../assets/img/carousel-img-5.png";
import Ice from "../../assets/img/carousel-img-6.png";

const Category = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-8">
      <div>
        <h3 class="text-4xl mb-6">Search by Category</h3>
        <div class="flex items-center mb-10">
          <div style={{ height: "3px" }} class="w-32 bg-primary"></div>
          <div style={{ height: "2px" }} class="w-full bg-gray-200"></div>
        </div>
        <Slider {...settings}>
          <div className="px-2 ">
            <div className="text-center p-4 bg-gray-100 rounded">
              <img className="mx-auto" src={Groceries} alt="" />
              <h6 className="text-md font-medium">Groceries</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-gray-100 rounded">
              <img className="mx-auto" src={Fish} alt="" />
              <h6 className="text-md font-medium">Fish</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-accent rounded">
              <img className="mx-auto" src={Meat} alt="" />
              <h6 className="text-md font-medium">Meat</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-gray-100 rounded">
              <img className="mx-auto" src={Vegetables} alt="" />
              <h6 className="text-md font-medium">Vegetables</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-gray-100 rounded">
              <img className="mx-auto" src={Fruits} alt="" />
              <h6 className="text-md font-medium">Fruits</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-gray-100 rounded">
              <img className="mx-auto" src={Ice} alt="" />
              <h6 className="text-md font-medium">Ice Cream</h6>
            </div>
          </div>
          <div className="px-2">
            <div className="text-center p-4 bg-accent rounded">
              <img className="mx-auto" src={Meat} alt="" />
              <h6 className="text-md font-medium">Meat</h6>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
