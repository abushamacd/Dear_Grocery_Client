import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../Components/Logo";
import { Link } from "react-router-dom";
import SocialLogin from "../../Sections/User/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Sections/Shared/Loading";
import { toast } from "react-toastify";

const SignUp = () => {
  // Email sign up
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);

  // Update name
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Loading
  if (emailLoading || updating) {
    return <Loading />;
  }

  // Error
  let errorMessage;
  if (emailError || updateError) {
    errorMessage = (
      <p className="text-secondary">
        {" "}
        {emailError?.message} {updateError?.message}{" "}
      </p>
    );
  }
  // handle submit
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // navigate("/home");
  };
  console.log(emailUser?.user.displayName);
  // Conformation
  if (emailUser) {
    toast(`Wow! ${emailUser?.user.displayName}, now you our member`);
  }
  return (
    <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 lg:mb-12 md:mb-0 flex justify-center">
              <Logo />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="flex lg:h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">
                      Sign Up
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Name */}
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is required",
                            },
                          })}
                          type="text"
                          placeholder="Type your name"
                          className="input rounded-full  input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                          {errors.name?.type === "required" && (
                            <span className="label-text-alt text-secondary">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                      </div>
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
                          className="input rounded-full  input-bordered input-primary  w-full max-w-xs"
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
                      {/* Navigate Login */}
                      <p>
                        <small>
                          Already have an account{" "}
                          <Link to="/login" className="text-primary">
                            Please Login
                          </Link>{" "}
                        </small>
                      </p>
                      <p className="mb-2">{errorMessage}</p>
                      <input
                        className="btn btn-primary w-full max-w-xs rounded-full"
                        value="Sign Up"
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

export default SignUp;
