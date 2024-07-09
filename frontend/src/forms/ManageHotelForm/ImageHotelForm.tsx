import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {

    const {
        register,
        formState: { errors }
    } = useFormContext<HotelFormData>();

    return (
        <div className="w-full lg:mx-auto lg:w-1/2">
            <h2 className="mx-3 text-base font-bold mb-3">
                Images
            </h2>
            <div className="border rounded mx-3 p-4 flex flex-col gap-4">
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className=" border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    {...register("imageFiles", {
                        validate: (imageFiles) => {
                            const totalLength = imageFiles.length;

                            if (totalLength === 0) {
                                return "Please upload at least one image";
                            }
                            if (totalLength > 6) {
                                return "Please upload a maximum of 5 images"
                            }

                            return true;
                        }
                    })}
                />
            </div>
            {errors.imageFiles && (
                <span className="text-red-500 text-sm font-bold">
                    {errors.imageFiles.message}
                </span>
            )}
        </div>
    )
};

export default ImagesSection;