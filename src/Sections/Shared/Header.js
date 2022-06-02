import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import heart from "../../assets/img/heart.png";
import shoppingBag from "../../assets/img/u_shopping-bag.png";
import user from "../../assets/img/user.png";
import menuRight from "../../assets/img/menu-right.png";
import chevronDown from "../../assets/img/chevron-down.png";
import uPercentage from "../../assets/img/u_percentage.png";

const Header = () => {
  return (
    <div className="container">
      <div className=" py-6 flex justify-between items-center ">
        <Link to="/" className="flex font-32 font-medium items-center">
          <img class="mr-3" src={logo} alt="" /> Dear Grocery
        </Link>
        <div class="w-96">
          <div class="border border-gray-100 p-1 flex rounded-full items-center">
            <div class="min-w-max px-3">
              <img src={search} alt="" />
            </div>
            <input
              class="w-full px-3 pxy-1 focus:outline-none"
              type="search"
              placeholder="Search here ..."
            />
            <button
              class="bg-gray bg-neutral px-6 rounded-full py-2 text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

        <div class="min-w-max flex items-center">
          <Link to="/wishlist">
            <span class="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={heart} alt="" />
            </span>
          </Link>
          <Link class="relative mx-4" to="/cart">
            <span class="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={shoppingBag} alt="" />
            </span>{" "}
            <span class="absolute bg-red-600 px-1 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">
              {3}
            </span>
          </Link>
          <Link to="/my-account" class="flex items-center">
            <span class="icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <img src={user} alt="" />
            </span>{" "}
            <span>Account</span>
          </Link>
        </div>
      </div>

      <div class="flex items-center">
        <div v-click-outside="menuClose" class="w-96 relative">
          <div class="bg-primary relative z-20 flex rounded-full px-4 py-2 cursor-pointer">
            <div class="min-w-max">
              <img src={menuRight} alt="" />
            </div>
            <div class="w-full text-center px-6 text-white">All Categories</div>
            <div class="min-w-max">
              <img src={chevronDown} alt="" />
            </div>
          </div>

          <div
            // v-bind:class="allCategoryMenu ? 'block visible' : 'hidden invisible'"
            class="absolute bg-primany z-10 w-full -mt-5 pt-6 pb-4 rounded-b-2xl"
          >
            <ul>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
              <li>
                <Link
                  class="block text-white py-2 px-4 hover:text-black"
                  to="/"
                >
                  Lorem ispum category
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <ul class="flex justify-center">
            <li>
              <Link class="p-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="p-4" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link class="p-4" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link class="p-4" to="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link class="p-4" to="/order-tracking">
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/offers" class="min-w-max text-secondary flex">
          <img src={uPercentage} class="mr-3" alt="" /> Special Offers!
        </Link>
      </div>
    </div>
  );
};

export default Header;
