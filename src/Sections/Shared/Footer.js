import React from "react";
import customerSupport from "../../assets/img/customer-support.png";
import authenticProducts from "../../assets/img/authentic-products.png";
import securePayment from "../../assets/img/secure-payment.png";
import bestPrice from "../../assets/img/best-price.png";
import playstore from "../../assets/img/playstore.png";
import appstore from "../../assets/img/appstore.png";
import payments from "../../assets/img/payments.png";
import Logo from "../../Components/Logo";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="flex -mx-4 mb-16">
          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <img width="80" src={customerSupport} alt="" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">24 Customer Support</h3>
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <img width="80" src={authenticProducts} alt="" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Authentic Products</h3>
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <img width="80" src={securePayment} alt="" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Secure Payment</h3>
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <img width="80" src={bestPrice} alt="" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">
                Best Prices &#38; Offers
              </h3>
              Contact us 24 hours
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent py-10">
        <div className="container">
          <div className="flex">
            <div className="w-3/5 pr-10">
              <Logo />
              <p className="my-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                diam ornare nam est gravida. Netus viverra rhoncus sit magna
                sapien ac eget parturient id. Est luctus dapibus quam aliquam in
                nisl turpis. Elit et dictum lacus morbi nec accumsan a in.
              </p>

              <div className="flex">
                <a className="mr-4" href="/" target="blank">
                  <img src={playstore} alt="" />
                </a>
                <a href="/" target="blank">
                  <img src={appstore} alt="" />
                </a>
              </div>
            </div>
            <div className="w-1/5 pl-6">
              <h3 className="text-2xl mb-6">About Us</h3>
              <ul className="leading-loose">
                <li>
                  <nuxt-link to="/">About Karte</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Contact</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Career</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Terms & Conditions</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Category</nuxt-link>
                </li>
              </ul>
            </div>

            <div className="w-1/5 pl-6">
              <h3 className="text-2xl mb-6">About Us</h3>
              <ul className="leading-loose">
                <li>
                  <nuxt-link to="/">About Karte</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Contact</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Career</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Terms &#38; Conditions</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">Category</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex -mx-6 mt-10 items-center text-xs">
            <div className="w-1/3 px-6"></div>
            <div className="w-1/3 px-6 text-center">
              @2022 Copyright All Right Reserved by Bengal Shop
            </div>
            <div className="w-1/3 px-6 text-right">
              <img src={payments} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
