import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Register() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { showToast } = useAppContext()
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: async () => {
            showToast({
                message: "Registration Success!",
                type: "success",
            });
            await queryClient.invalidateQueries("validateToken");
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({
                message: error.message,
                type: "error",
            });
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <div className="flex flex-col md:flex-row justify-center font-sans gap-5">
            <div className="w-full md:w-1/2 bg-second p-8">
                <h2 className="text-3xl text-blue-700 text-center capitalize font-bold">
                    Create an Account
                </h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-5 pt-5">
                    <div className="flex flex-1 max-lg:flex-col gap-y-3">
                        <label className="text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                            First Name
                            <input
                                type="text"
                                className="text-base placeholder:text-base mt-1 
                            px-3 py-2 bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none focus:border-sky-500
                            focus:ring-sky-500 block w-full rounded-md focus:ring-1"
                                {...register("firstName", {
                                    required: "this field is required",
                                })} placeholder="First Name"
                            ></input>
                            {errors.firstName && (
                                <span className="text-red-500 text-sm">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </label>
                        <label className="text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                            Last Name
                            <input
                                type="text"
                                className="text-base placeholder:text-base mt-1 
                                px-3 py-2 bg-white border shadow-sm border-slate-300 
                                placeholder-slate-400 focus:outline-none 
                                focus:border-sky-500 focus:ring-sky-500 block w-full 
                                rounded-md focus:ring-1"
                                {...register("lastName", {
                                    required: "this field is required",
                                })} placeholder="Last Name"
                            ></input>
                            {errors.lastName && (
                                <span className="text-red-500 text-sm">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                        Email
                        <input
                            type="email"
                            className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                            {...register("email", { required: "this field is required" })}
                            placeholder="Email"
                        ></input>
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                    <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                        Password
                        <input
                            type="password"
                            className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                            {...register("password", {
                                required: "this field is required",
                                minLength: 6,
                            })} placeholder="Password"
                        ></input>
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </label>
                    <label className="blo'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                        Confirm Password
                        <input
                            type="password"
                            className="text-base placeholder:text-base mt-1 px-3 py-2 
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md sm:text-sm focus:ring-1"
                            {...register("confirmPassword", {
                                validate: (val) => {
                                    if (!val) {
                                        return "this field is required";
                                    } else if (watch("password") !== val) {
                                        return "passwords do not match";
                                    }
                                },
                            })} placeholder="Confirm Password"
                        ></input>
                        {errors.confirmPassword && (
                            <span className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </label>
                    <span className="text-[#4A55A2]  capitalize ">
                        Already registered?
                        <Link to="/signin" className="ml-1 hover:text-[#7895CB] underline">
                            Sign in here
                        </Link>
                    </span>

                    <button
                        type="submit"
                        className="btn btn-primary text-xl text-white hover:bg-[#013B96]"
                    >
                        Create Account
                    </button>
                    {/* <Link to="" className="btn bg-green-700 hover:bg-green-600 border-none font-bold text-xl text-white   " > I Have Account</Link> */}
                    <div className="d-flex items-center text-center">
                        <span
                            className="w-full relative inline-block px-10 font-bold 
                            text-sm text-blue-700 tracking-wide after:content-[''] 
                            after:flex after:relative  after:-mt-2.5 after:w-2/5 after:h-0.5
                        after:bg-[#013B94] after:left-0 before:content-[''] 
                        before:flex before:relative before:top-[13px] before:w-2/5 
                        before:h-0.5 before:bg-[#013B94] before:mt-2.5 before:left-[60%]"
                        >
                            or
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <a className="flex justify-around items-center text-center 
                        w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded 
                        bg-white hover:bg-[#7895CB] ">
                            <img
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                className="relative w-10 h-10 ml-0 mr-2"
                                alt="google logo"
                            />{" "}
                            <span className="w-5/6">Sign up with Google</span>
                        </a>
                        <a className=" flex justify-around items-center text-center 
                        w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded 
                        bg-white hover:bg-[#7895CB]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                                className="relative w-10 h-10 ml-0 mr-2"
                                alt="facebook logo"
                            />{" "}
                            <span className="w-5/6">Sign up with Facebook</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
