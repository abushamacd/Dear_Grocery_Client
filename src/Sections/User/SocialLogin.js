import React, { useEffect } from "react";
import { FaGoogle, FaGithub, FaFacebookSquare } from "react-icons/fa";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const SocialLogin = () => {
  // Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // Facebook
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  // Github
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // use hooks
  const [token] = useToken(googleUser || fbUser || githubUser);

  // navigate
  const navigate = useNavigate();

  // For required auth
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // user
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // Loading
  if (googleLoading || fbLoading || githubLoading) {
    return <Loading />;
  }
  // Error
  let errorMessage;
  if (googleError || fbError || githubError) {
    errorMessage = (
      <p className="text-red-600">
        {" "}
        {googleError?.message} {fbError?.message} {githubError?.message}{" "}
      </p>
    );
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
          onClick={() => signInWithGithub()}
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
