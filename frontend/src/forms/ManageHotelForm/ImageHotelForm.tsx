import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";


const ImagesSection = () => {

    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext<HotelFormData>();

    const existingImageUrls = watch("imageUrls");

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        imageUrl: string
    ) => {
        event.preventDefault();
        const newImageUrls = existingImageUrls.filter((url) => url !== imageUrl);
        setValue("imageUrls", newImageUrls);
    };

    return (
        <div className="w-full lg:mx-auto lg:w-1/2">
            <h2 className="mx-3 text-base font-bold mb-3">
                Images
            </h2>
            <div className="border rounded mx-3 p-4 flex flex-col gap-4">
                {existingImageUrls && (
                    <div className="grid grid-cols-6 gap-4">
                        {existingImageUrls.map((url) => (
                            <div className="relative group">
                                <img src={url} className="min-h-full object-cover" />
                                <button
                                    onClick={(e) => handleDelete(e, url)}
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white">Delete</button>
                            </div>
                        ))}
                    </div>
                )}

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className=" border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    {...register("imageFiles", {
                        validate: (imageFiles) => {
                            const totalLength =
                                imageFiles.length + (existingImageUrls?.length || 0);

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