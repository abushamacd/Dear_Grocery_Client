import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Products.css";
import AddToCartModal from "../../Components/AddToCartModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

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
  const [productModal, setProductModal] = useState(null);

  // Load product
  const { data: products, isLoading } = useQuery("products", () =>
    fetch(`https://true-zed-03420.herokuapp.com/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="product mb-12">
      <h3 className="text-2xl lg:text-4xl mb-6 font-bold">Deals of the week</h3>
      <div className="flex items-center mb-10">
        <div style={{ height: "3px" }} className="w-32 bg-primary"></div>
        <div style={{ height: "2px" }} className="w-full bg-gray-200"></div>
      </div>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className="card lg:max-w-lg bg-base-100 border"
            >
              <figure className="px-10 pt-10 product_img">
                <img src={product.img} alt="Shoes" className="rounded-xl " />
              </figure>
              {/* <div className="product_view">
                <GrView className="bg-[#fff] text-5xl text-primary" />
              </div> */}
              <div className="card-body items-center text-center">
                <h2 className="text-sm font-medium product_title">
                  {product.name}
                </h2>
                <p className="text-sm font-medium">$ {product.price}</p>
                <div className="card-actions">
                  <label
                    onClick={() => setProductModal(product)}
                    htmlFor="addToCartModal"
                    className=" modal-button btn btn-accent rounded-full px-12"
                  >
                    Add to Cart
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* Load Modal */}
      {productModal && (
        <AddToCartModal
          productModal={productModal}
          // refetch={refetch}
          setProductModal={setProductModal}
        ></AddToCartModal>
      )}
    </div>
  );
};

export default Products;
