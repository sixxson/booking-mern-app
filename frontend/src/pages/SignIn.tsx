import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from "../api-client"
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
    email: string;
    password: string;
};

export default function SignIn() {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const navigate = useNavigate();
    const { register,
        formState:
        {
            errors
        },
        handleSubmit
    } = useForm<SignInFormData>()

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            // 1. show the toast
            showToast({ message: "Sign in Successful!", type: "success" });
            // 2. redirect the user to the home page
            await queryClient.invalidateQueries("validateToken");
            navigate("/");
        }, onError: (error: Error) => {
            //show the toast
            showToast({ message: error.message, type: "error" });
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    })

    return (
        <div className="flex justify-center  " >
            <div className=" flex flex-col justify-center  p-4 mx-2 lg:w-1/2 w-full">
                <h2 className="text-3xl text-center text-[#4A55A2] underline capitalize">sign in</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-y-5 pt-10">
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
                    <a href="#" className="text-[#4A55A2] underline capitalize hover:text-[#7895CB]">forgot your password?</a>
                    <span className="text-[#4A55A2]   ">not registered ?
                        <Link className="ml-1 hover:text-[#7895CB] underline" to="/Register">  Create an account here </Link>
                    </span>

                    <button
                        type="submit"
                        className="tracking-wide capitalize text-white bg-[#A0BFE0] p-3 rounded-md shadow-sm cursor-pointer 
                        transition-all  ease-in-out delay-150 duration-300 hover:bg-[#4A55A2]">
                        Login
                    </button>
                    <div className="d-flex items-center text-center">
                        <span className="w-full relative inline-block px-10 font-bold text-sm text-[#4A55A2] tracking-wide after:content-[''] 
                    after:flex after:relative  after:-mt-2.5 after:w-2/5 after:h-0.5 after:bg-[#4A55A2] after:left-0 before:content-[''] 
                    before:flex before:relative before:top-[13px] before:w-2/5 before:h-0.5 before:bg-[#4A55A2] before:mt-2.5 before:left-[60%]">
                            or
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <a className="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded 
                    bg-[#4A55A2] text-white hover:bg-[#7895CB]">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                className="relative w-10 h-10 ml-0 mr-2  rounded" alt="google logo" />
                            <span className="w-5/6">
                                Login  with Google
                            </span>
                        </a>
                        <a className="flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg 
                    rounded bg-[#4A55A2] text-white hover:bg-[#7895CB]">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                                className="relative w-10 h-10 ml-0 mr-2" alt="facebook logo" />
                            <span className="w-5/6">
                                Login with Facebook
                            </span>
                        </a>
                    </div>
                </form>
            </div>
        </div >

    )
}
