import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/img/search.png";
import heart from "../../assets/img/heart.png";
import shoppingBag from "../../assets/img/u_shopping-bag.png";
import user from "../../assets/img/user.png";
import menuRight from "../../assets/img/menu-right.png";
import chevronDown from "../../assets/img/chevron-down.png";
import uPercentage from "../../assets/img/u_percentage.png";
import Logo from "../../Components/Logo";

const Header = () => {
  return (
    <div className="container">
      <div className=" py-6 flex justify-between items-center ">
        <Logo />
        <div className="w-96">
          <div className="border border-gray-100 p-1 flex rounded-full items-center">
            <div className="min-w-max px-3">
              <img src={search} alt="" />
            </div>
            <input
              className="w-full px-3 pxy-1 focus:outline-none"
              type="search"
              placeholder="Search here ..."
            />
            <button
              className="bg-gray bg-neutral px-6 rounded-full py-2 text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

        <div className="min-w-max flex items-center">
          <Link to="/wishlist">
            <span className="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={heart} alt="" />
            </span>
          </Link>
          <Link className="relative mx-4" to="/cart">
            <span className="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={shoppingBag} alt="" />
            </span>{" "}
            <span className="absolute bg-red-600 px-1 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">
              {3}
            </span>
          </Link>
          <Link to="/my-account" className="flex items-center">
            <span className="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={user} alt="" />
            </span>{" "}
            <span>Account</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <div v-click-outside="menuClose" className="w-96 relative">
          <div className="bg-primary relative z-20 flex rounded-full px-4 py-2 cursor-pointer">
            <div className="min-w-max">
              <img src={menuRight} alt="" />
            </div>
            <div className="w-full text-center px-6 text-white">
              All Categories
            </div>
            <div className="min-w-max">
              <img src={chevronDown} alt="" />
            </div>
          </div>

          <div
            // v-bind:className="allCategoryMenu ? 'block visible' : 'hidden invisible'"
            className="absolute bg-primany z-10 w-full -mt-5 pt-6 pb-4 rounded-b-2xl"
          >
            <ul>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <ul className="flex justify-center">
            <li>
              <Link className="p-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-4" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="p-4" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="p-4" to="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="p-4" to="/order-tracking">
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/offers" className="min-w-max text-secondary flex">
          <img src={uPercentage} className="mr-3" alt="" /> Special Offers!
        </Link>
      </div>
    </div>
  );
};

export default Header;
