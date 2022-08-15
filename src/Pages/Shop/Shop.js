import React from "react";
import SingleItem from "./SingleItem";
import { useQuery } from "react-query";
import Loading from "../../Sections/Shared/Loading";

const Shop = ({ handleAddToCart }) => {
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
    <div className="mt-10">
      <div className="text-center">
        <h2 className="text-xl capitalize text-primary">All Products</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16">
        {products?.map((product) => (
          <SingleItem key={product._id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
