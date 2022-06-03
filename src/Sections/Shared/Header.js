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
    <div>
      <div class="navbar bg-base-100 flex justify-between p-0">
        <div class="">
          <Logo />
        </div>
        <div className="hidden lg:block">
          <div class="border border-primary rounded-full flex items-center">
            <div class="min-w-max px-3">
              <img src={search} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search"
              class="input  focus:outline-none "
            />
            <button
              class="bg-neutral bs-button-bg px-6 rounded-full py-2 mr-1 text-base-100"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <img src={heart} alt="" />
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabindex="0"
              class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <img src={shoppingBag} alt="" />
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabindex="0"
              class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  alt=""
                  src="https://api.lorem.space/image/face?hash=33791"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
