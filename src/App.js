import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Sections/Shared/Header";
import Footer from "./Sections/Shared/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import SignUp from "./Pages/User/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequiredAuth from "./Hooks/RequiredAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Dashboard/Profile";
import AllUser from "./Pages/Dashboard/AllUser";
import RequiredAdmin from "./Hooks/RequiredAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Shop from "./Pages/Shop/Shop";
import { useState } from "react";
import { addToDb, getStoredCart, removeFromDb } from "./Hooks/cart";
import { useQuery } from 'react-query';
import { useEffect } from "react";
import Loading from "./Sections/Shared/Loading";

function App() {
  const [cart, setCart] = useState([]);
  // Load product
  const { data: products, isLoading } = useQuery("products", () =>
    fetch(`https://true-zed-03420.herokuapp.com/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  // Get Local storage data
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addProduct = products?.find((product) => product._id === id);
      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        savedCart.push(addProduct);
      }
    }
    setCart(savedCart);
  }, [products, cart.length]);

  if (isLoading) {
    return <Loading />;
  }

  // Step 6
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  // Step 6
  const handleRemoveFromCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product._id === selectedProduct._id)
    if (exists) {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity - 1;
      if (exists.quantity <= 0) {
        newCart = [...rest];
      } else {
        newCart = [...rest, exists];
      }
    }
    setCart(newCart);
    removeFromDb(selectedProduct._id);
  };

  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
    setCart([])
  }
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header cart={cart} handleAddToCart={handleAddToCart} deleteShoppingCart={deleteShoppingCart} handleRemoveFromCart={handleRemoveFromCart} />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/home" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route
            path="dashboard"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          >
            <Route index element={<Profile></Profile>}></Route>
            {/* <Route path="orders" element={<Orders></Orders>}></Route> */}
            {/* <Route path="addreview" element={<AddReview></AddReview>}></Route> */}
            {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
            <Route
              path="alluser"
              element={
                <RequiredAdmin>
                  <AllUser></AllUser>
                </RequiredAdmin>
              }
            ></Route>
            {/* <Route
            path="allorder"
            element={
              <RequiredAdmin>
                <AllOrders></AllOrders>
              </RequiredAdmin>
            }
          ></Route> */}
            <Route
              path="addproduct"
              element={
                <RequiredAdmin>
                  <AddProduct></AddProduct>
                </RequiredAdmin>
              }
            ></Route>
            <Route
              path="manageproduct"
              element={
                <RequiredAdmin>
                  <ManageProduct></ManageProduct>
                </RequiredAdmin>
              }
            ></Route>
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
