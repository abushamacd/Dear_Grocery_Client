import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../Components/Logo";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Sections/User/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Sections/Shared/Loading";

const Login = () => {
  // Email sign in
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Error
  let errorMessage;
  if (emailError) {
    errorMessage = <p className="text-secondary"> {emailError?.message} </p>;
  }
  // Loading
  if (emailLoading) {
    return <Loading />;
  }
  // handle submit
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // User
  if (emailUser) {
    // navigate(from, { replace: true });
    navigate("/");
  }
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 lg:mb-12 md:mb-0 flex justify-center">
              <Logo />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="flex lg:h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">
                      Sign In
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Email */}
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide valid email",
                            },
                          })}
                          type="email"
                          placeholder="Type your email"
                          className="input rounded-full  input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-secondary">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-secondary">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                      {/* Password */}
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Password is required",
                            },
                            minLength: {
                              value: 6,
                              message: "Minumum 6 charcter",
                            },
                          })}
                          type="password"
                          placeholder="Type your password"
                          className="input rounded-full  input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                          {errors.password?.type === "required" && (
                            <span className="label-text-alt text-secondary">
                              {errors.password.message}
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-secondary">
                              {errors.password.message}
                            </span>
                          )}
                        </label>
                      </div>
                      {/* Navigate Signup form */}
                      <p>
                        <small>
                          New to Electric Cart{" "}
                          <Link to="/signup" className="text-primary">
                            Create Account
                          </Link>{" "}
                        </small>
                      </p>
                      <p className="mb-2">{errorMessage}</p>
                      <input
                        className="btn btn-primary w-full max-w-xs rounded-full"
                        value="Sign In"
                        type="submit"
                      />
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
