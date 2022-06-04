import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Products.css";

const Products = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product mb-12">
      <h3 class="text-2xl lg:text-4xl mb-6 font-bold">Deals of the week</h3>
      <div class="flex items-center mb-10">
        <div style={{ height: "3px" }} class="w-32 bg-primary"></div>
        <div style={{ height: "2px" }} class="w-full bg-gray-200"></div>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div key={product._id} class="card lg:max-w-lg bg-base-100 border">
              <figure class="px-10 pt-10">
                <img src={product.img} alt="Shoes" class="rounded-xl " />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="text-sm font-medium">{product.name}</h2>
                <p className="text-sm font-medium">$ {product.price}</p>
                <div class="card-actions">
                  <button class="btn btn-accent rounded-full px-12">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Products;
