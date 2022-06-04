import React from "react";

const AddToCartModal = ({ productModal }) => {
  const { name, img, quantity, price, description } = productModal;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex">
            <figure>
              <img className="" src={img} alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p>{description}</p>
              <p className="text-primary">$ {price}</p>
              <p className="text-sm">Available: {quantity}</p>
              <input
                type="number"
                min={1}
                placeholder="Quantity"
                class="input input-bordered input-primary input-primary w-full max-w-xs"
              />
              <div class="card-actions">
                <button class="btn btn-primary rounded-full px-12">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
