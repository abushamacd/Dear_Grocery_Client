import React from "react";

import { FaGoogle, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className="flex justify-evenly">
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12 rounded-full"
      >
        <FaGoogle />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12 rounded-full"
      >
        <FaGithub />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12 rounded-full"
      >
        <BsApple />
      </button>
      <button
        //   onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-primary w-12 rounded-full"
      >
        <FaFacebookSquare />
      </button>
    </div>
  );
};

export default SocialLogin;
