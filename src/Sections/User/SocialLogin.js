import React from "react";

import { FaGoogle, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className="flex justify-evenly">
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12"
      >
        <FaGoogle />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12"
      >
        <FaGithub />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12"
      >
        <BsApple />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12"
      >
        <FaFacebookSquare />
      </button>
    </div>
  );
};

export default SocialLogin;
