import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/img/search.png";
import heart from "../../assets/img/heart.png";
import shoppingBag from "../../assets/img/u_shopping-bag.png";
import menuRight from "../../assets/img/menu-right.png";
import chevronDown from "../../assets/img/chevron-down.png";
import uPercentage from "../../assets/img/u_percentage.png";
import Logo from "../../Components/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  // get user
  const [user, loading] = useAuthState(auth);
  // sign out
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const mainMenu = (
    <>
      <li>
        <Link to="/">Home </Link>
      </li>
      <li>
        <Link to="/shop">Shop </Link>
      </li>
      <li>
        <Link to="/">Orders </Link>
      </li>
      <li>
        <Link to="/">Blogs </Link>
      </li>
      <li>
        <Link to="/">Contact </Link>
      </li>
      <li>
        <Link to="/">Track Order </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between lg:p-0">
        <div className="">
          <Logo />
        </div>
        <div className="hidden lg:block">
          <div className="border border-primary rounded-full flex items-center">
            <div className="min-w-max px-3">
              <img src={search} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="input rounded-full   focus:outline-none "
            />
            <button
              className="bg-neutral bs-button-bg px-6 rounded-full py-2 mr-1 text-base-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={heart} alt="" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={shoppingBag} alt="" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt=""
                  referrerPolicy="no-referrer"
                  src={user?.photoURL || "https://i.ibb.co/MgsTCcv/avater.jpg"}
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Profile
                </Link>
              </li>

              <li>
                {user ? (
                  <button className="" onClick={logout}>
                    Log out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex="0"
                className="btn btn-ghost bg-primary rounded-full hover:bg-neutral"
              >
                <img src={menuRight} alt="" />
                <span className="mx-4 text-base-100 hidden lg:block">
                  All Catagories
                </span>
                <img src={chevronDown} alt="" className=" hidden lg:block" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/">Portfolio</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                Main Menu
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {mainMenu}
              </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">{mainMenu}</ul>
            </div>
          </div>
          <div className="navbar-end text-secondary">
            <img src={uPercentage} alt="" />
            <span className="text-sm">Special Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
