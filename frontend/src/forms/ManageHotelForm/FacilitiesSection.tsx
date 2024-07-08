import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
    const {
        register,
        formState: { errors }
    } = useFormContext<HotelFormData>();

    return (
        <div className="w-full lg:mx-auto lg:w-1/2 ">
            <h2 className="mx-2 text-base font-bold mb-3">
                Facilities
            </h2>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 mx-2 ">
                {hotelFacilities.map((facility) => (
                    <label
                        className="flex text-sm text-gray-700 itmes-center "
                    >
                        <input
                            type="checkbox"
                            value={facility}
                            className="flex text-sm gap-1 text-gray-700"
                            {...register("facilities", {
                                validate: (facilities) => {
                                    if (facilities && facilities.length > 0) {
                                        return true;
                                    } else {
                                        return "Please select at least one facility";
                                    }
                                }
                            })}
                        />
                        <span className="mx-2">
                            {facility}
                        </span>
                    </label>
                ))}
            </div>
            {errors.facilities && (
                <span className="text-red-500 text-sm font-bold">
                    {errors.facilities.message}
                </span>
            )}
        </div>
    )
}

export default FacilitiesSection;