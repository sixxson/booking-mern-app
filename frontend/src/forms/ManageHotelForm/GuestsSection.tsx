import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
    const {
        register,
        formState: { errors }
    } = useFormContext<HotelFormData>();

    return (
        <div className="w-full lg:mx-auto lg:w-1/2 ">
            <h2 className="mx-3 text-base font-bold mb-3">
                Guests
            </h2>
            <div className="grid grid-cols-1 gap-0 bg-gray-300 rounded-md lg:gap-5 lg:grid-cols-2 lg:w-full py-5 m-2">
                <label className=" text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                    <span className="mx-2">Adults</span>
                    <input
                        type="number"
                        className=" text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                        min={1}

                        {...register("adultCount", {
                            required: "Please enter the number of adults"
                        })}
                    />
                </label>
                {errors.adultCount?.message && (
                    <span className="text-red-500 text-sm font-bold">
                        {errors.adultCount?.message}
                    </span>
                )}
                <label className="text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                    <span className="mx-2">Children</span>
                    <input
                        type="number"
                        className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                        min={0}

                        {...register("childCount", {
                            required: "Please enter the number of children"
                        })}
                    />
                </label>
                {errors.childCount?.message && (
                    <span className="text-red-500 text-sm font-bold">
                        {errors.childCount?.message}
                    </span>
                )}
            </div>
        </div>
    )
}

export default GuestsSection;