import React from "react";
import { Link } from "react-router-dom";

const AddToCartModal = ({ productModal }) => {
  console.log(productModal)
  const { name, img, brand, capacity, category, price, desc, tag } = productModal;
  return (
    <div>
      <input type="checkbox" id="addToCartModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="addToCartModal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full rounded" src={img} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {name} </h1>
                  <p className="leading-relaxed"> {desc} </p>
                  <div className="flex border-t pt-2">
                    <span className="title-font font-medium text-2xl text-gray-900">$ {price}<span className="text-gray-500 text-sm"> / {capacity}</span> </span>
                    <button className="flex ml-auto text-white btn btn-primary border-0 py-2 focus:outline-none  rounded-full px-12 ">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
