import React from "react";
import bg1 from "../../assets/img/promo-bg-1.png";
import bg2 from "../../assets/img/promo-bg-2.png";

const Promo = () => {
  return (
    <div className="lg:flex lg:-mx-6 -mx-2 mb-14">
      <div className="lg:w-1/2 px-6 mb-2 lg:mb-0">
        <div
          style={{
            background: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" p-12 lg:py-32 rounded"
        >
          <div className="w-2/3">
            <p className="text-secondary text-2xl mb-6">Buy 1 Get 1</p>
            <h3 className="font-bold font-size-46 mb-8 leading-tight">
              Fresh Fruits Collection
            </h3>
            <button className="btn btn-accent text-secondary border border-white bg-white rounded-full px-8 mb-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 px-6">
        <div
          style={{
            background: `url(${bg2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" p-12 lg:py-32 rounded"
        >
          <div className="w-2/3">
            <p className="text-secondary text-2xl mb-6">Buy 1 Get 1</p>
            <h3 className="font-bold font-size-46 mb-8 leading-tight">
              Fresh Fruits Collection
            </h3>
            <button className="btn btn-accent text-secondary border border-white bg-white rounded-full px-8 mb-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
