import React, { useState } from "react";
import AddToCartModal from "../../Components/AddToCartModal";

const SingleItem = ({ product }) => {
  const { _id, name, img, brand, desc, price } = product;
  const [productModal, setProductModal] = useState(null);

  return (
    <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="lg:max-h-40" src={img} alt="items" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary hover:text-secondary transition duration-0 hover:duration-200">
          {name}
        </h2>
        <p title={desc}>
          {desc.length > 100
            ? desc.slice(0, 100) + "..."
            : desc}
        </p>

        <div className="flex">
          <p className="text-sm">
            Price: $ <span className="text-secondary">{price}</span>{" "}
          </p>
          <p className="text-sm">
            Brand:<span className="text-secondary"> {brand}</span>{" "}
          </p>
        </div>
        <div className="card-actions">
          <label
            onClick={() => setProductModal(product)}
            htmlFor="addToCartModal"
            className="w-full modal-button btn btn-primary rounded-full px-12"
          >
            Add to Cart
          </label>
        </div>
      </div>
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

export default SingleItem;
