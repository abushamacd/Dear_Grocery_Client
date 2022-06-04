import React from "react";
import Slider from "react-slick";
import "./Brands.css";
import logo1 from "../../assets/img/brand-1.png";
import logo2 from "../../assets/img/brand-2.png";
import logo3 from "../../assets/img/brand-3.png";
import logo4 from "../../assets/img/brand-4.png";
import logo5 from "../../assets/img/brand-5.png";
import logo6 from "../../assets/img/brand-6.png";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // brands data
  const brands = [
    {
      _id: 1,
      img: logo1,
    },
    {
      _id: 2,
      img: logo2,
    },
    {
      _id: 3,
      img: logo3,
    },
    {
      _id: 4,
      img: logo4,
    },
    {
      _id: 5,
      img: logo5,
    },
    {
      _id: 6,
      img: logo6,
    },
    {
      _id: 7,
      img: logo4,
    },
  ];

  return (
    <div className="brand mb-12">
      <h3 className="text-2xl lg:text-4xl mb-6 font-bold">Popular Brands</h3>
      <div className="flex items-center mb-10">
        <div style={{ height: "3px" }} className="w-32 bg-primary"></div>
        <div style={{ height: "2px" }} className="w-full bg-gray-200"></div>
      </div>

      <Slider {...settings}>
        {brands.map((brand, index) => {
          return (
            <div
              key={brand._id}
              className="card lg:w-full bg-base-100 flex items-center"
            >
              <figure className="">
                <img src={brand.img} alt="Shoes" className="rounded-xl w-32" />
              </figure>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Brands;
