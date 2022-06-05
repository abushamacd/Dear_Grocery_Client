import React from "react";
import { FaGoogle, FaGithub, FaFacebookSquare } from "react-icons/fa";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // navigate
  const navigate = useNavigate();

  // Loading
  if (googleLoading) {
    return <Loading />;
  }
  console.log(googleUser);
  // Error
  let errorMessage;
  if (googleError) {
    errorMessage = <p className="text-red-600"> {googleError?.message} </p>;
  }

  // user
  if (googleUser) {
    navigate("/home");
  }
  return (
    <div>
      <div className="flex justify-evenly">
        <button
          onClick={() => signInWithGoogle()}
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
          <FaFacebookSquare />
        </button>
      </div>
      <p className="mb-2">{errorMessage}</p>
    </div>
  );
};

export default SocialLogin;
