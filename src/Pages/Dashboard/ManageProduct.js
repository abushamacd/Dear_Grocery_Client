import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductDeleteModal from "./ProductDeleteModal";
import Loading from "../../Sections/Shared/Loading";

const ManageProduct = () => {
  // set state
  const [deletingProduct, setDeletingProduct] = useState(null);
  // Load product
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch(`https://dear-grocery-server.onrender.com/product`, {
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
    <div>
      <h2>Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor="deleteProductModal"
                    className="btn btn-xs btn-secondary text-base-100"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Load Modal */}
      {deletingProduct && (
        <ProductDeleteModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        ></ProductDeleteModal>
      )}
    </div>
  );
};

export default ManageProduct;
