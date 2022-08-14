import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);

  const imgStorageKey = "0d249f6ebce01b322c3e885d02f76781";
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          // Create Product
          const product = {
            name: data.name,
            price: data.price,
            desc: data.description,
            img: img,
            capacity: data.capacity,
            stockQty: data.quantity,
            brand: data.brand,
            category: data.category,
            tag: data.tag,
          };
          // Send to DB
          fetch("https://true-zed-03420.herokuapp.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")} `,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Product added successfully");
                reset();
              } else {
                toast.error("Product not added");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center mb-3 text-primary">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-evenly">
          {/* Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="Type product name"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          {/* Price */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
              type="number"
              placeholder="Type your price "
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-evenly">
          {/* Capacity */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Items Capacity</span>
            </label>
            <input
              {...register("capacity", {
                required: {
                  value: true,
                  message: "Capacity is required",
                },
              })}
              type="text"
              placeholder="Items Capacity (like 1kg/250gm) "
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.capacity?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.capacity.message}
                </span>
              )}
            </label>
          </div>
          {/* quantity */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Stock quantity</span>
            </label>
            <input
              {...register("quantity", {
                required: {
                  value: true,
                  message: "quantity is required",
                },
              })}
              type="number"
              placeholder="Type your stock quantity"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-evenly">
          {/* Brand */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Items Brand Name</span>
            </label>
            <input
              {...register("brand", {
                required: {
                  value: true,
                  message: "Brand is required",
                },
              })}
              type="text"
              placeholder="Product brand name"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.brand?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.brand.message}
                </span>
              )}
            </label>
          </div>
          {/* Category */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Items Category</span>
            </label>
            <select
              {...register("category", {
                required: {
                  value: true,
                  message: "Category is required",
                },
              })}
              type="text"
              placeholder="Items Category"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            >
              <option value=" "></option>
              <option value="dry food">Dry Food</option>
              <option value="vagetable">Vegetable</option>
              <option value="fruits">Fruits</option>
              <option value="oil">Oil</option>
              <option value="spice">Spices</option>
            </select>
            <label className="label">
              {errors.category?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.category.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="flex justify-evenly">
          {/* Description */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
              type="text"
              placeholder="Description here"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          {/* Product Tag */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Tag</span>
            </label>
            <select
              {...register("tag", {
                required: {
                  value: true,
                  message: "Product Tag is required",
                },
              })}
              type="text"
              placeholder="Product Tag here"
              className="input input-bordered input-primary rounded-full w-full max-w-xs"
            >
              <option value=" "></option>
              <option value="new arrival">New Arrivel</option>
              <option value="best selling">Best Selling</option>
            </select>
            <label className="label">
              {errors.tag?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.tag.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          {/* Photo */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Photo is required",
                },
              })}
              type="file"
              className="input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="text-center">
          <input
            className="btn w-full max-w-xs mt-4 btn-primary rounded-full "
            value="Add Product"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
