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

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
            {/* <Route
            path="manageproduct"
            element={
              <RequiredAdmin>
                <ManageProduct></ManageProduct>
              </RequiredAdmin>
            }
          ></Route> */}
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
