import React from "react";
import { FaGoogle, FaGithub, FaFacebookSquare } from "react-icons/fa";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // Facebook
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  // navigate
  const navigate = useNavigate();

  // Loading
  if (googleLoading || fbLoading) {
    return <Loading />;
  }
  // Error
  let errorMessage;
  if (googleError || fbError) {
    errorMessage = (
      <p className="text-red-600">
        {" "}
        {googleError?.message} {fbError?.message}{" "}
      </p>
    );
  }

  // user
  if (googleUser || fbUser) {
    navigate("/home");
  }
  console.log(googleUser, fbUser);
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
          onClick={() => signInWithFacebook()}
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
