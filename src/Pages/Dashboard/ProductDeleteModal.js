import React from "react";
import { toast } from "react-toastify";

const ProductDeleteModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { _id, name } = deletingProduct;
  // Delete product from db
  const handleDelete = () => {
    fetch(`https://dear-grocery-server.onrender.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleteProductModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg ">
            Are you sure you want to delete{" "}
            <span className="text-secondary">{name}</span> !
          </h3>
          <p className="py-4">
            This product is deleted from database, you can't undue it. So be
            carefule
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-secondary"
            >
              Delete
            </button>
            <label
              htmlFor="deleteProductModal"
              className="btn btn-xs btn-primary"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
