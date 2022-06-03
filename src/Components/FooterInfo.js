import React from "react";

const FooterInfo = ({ img, title, desc }) => {
  return (
    <div className={`lg:card lg:card-side flex items-center`}>
      <figure className="">
        <img src={img} alt="Album" className="lg:mt-0 mt-4 w-16 mr-4" />
      </figure>
      <div className=" text-neutral mt-2">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default FooterInfo;
