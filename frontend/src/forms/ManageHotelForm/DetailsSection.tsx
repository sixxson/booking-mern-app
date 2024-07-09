import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotelForm'

export default function DetailsSection() {

    const { register,
        formState:
        {
            errors
        }
    } = useFormContext<HotelFormData>()


    return (
        <div className='p-4 flex flex-col gap-4 lg:w-1/2 lg:mx-auto'>
            <h1 className='text-3xl font-bold mb-3'>
                Add Hotel
            </h1>
            <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                Name
                <input
                    type="text"
                    className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                    {...register("name", { required: "this field is required" })}
                    placeholder="Name"
                ></input>
                {errors.name && (
                    <span className="text-red-500 text-sm">
                        {errors.name.message}
                    </span>
                )}
            </label>
            <div className="flex gap-4">
                <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                    City
                    <input
                        type="text"
                        className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                        {...register("city", { required: "this field is required" })}
                        placeholder="City"
                    ></input>
                    {errors.city && (
                        <span className="text-red-500 text-sm">
                            {errors.city.message}
                        </span>
                    )}
                </label>
                <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                    Country
                    <input
                        type="text"
                        className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                        {...register("country", { required: "this field is required" })}
                        placeholder="Country"
                    ></input>
                    {errors.country && (
                        <span className="text-red-500 text-sm">
                            {errors.country.message}
                        </span>
                    )}
                </label>
            </div>
            <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                Description
                <textarea
                    rows={10}
                    className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                    {...register("description", { required: "this field is required" })}
                    placeholder="Description"
                ></textarea>
                {errors.description && (
                    <span className="text-red-500 text-sm">
                        {errors.description.message}
                    </span>
                )}
            </label>
            <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7 ">
                Price Person Night
                <input
                    type="number"
                    min={1}
                    className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1"
                    {...register("pricePerNight", { required: "this field is required" })}
                    placeholder="Price Person Night"
                ></input>
                {errors.pricePerNight && (
                    <span className="text-red-500 text-sm">
                        {errors.pricePerNight.message}
                    </span>
                )}
            </label>
            <label className="'text-gray-700 px-3 text-sm font-bold flex-1 leading-7">
                Star Rating
                <select
                    {...register("starRating", { required: "this field is required" })}
                    className="text-base placeholder:text-base mt-1 px-3 py-2
                            bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none 
                            focus:border-sky-500 focus:ring-sky-500 block w-full 
                            rounded-md focus:ring-1">
                    <option value="" className='text-sm font-bold'> Select as Rating </option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option value={num} key={num} className='text-sm font-bold'>{num}</option>
                    ))}
                </select>
                {errors.starRating && (
                    <span className="text-red-500 text-sm">
                        {errors.starRating.message}
                    </span>
                )}
            </label>
        </div >
    )
}
