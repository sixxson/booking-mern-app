import { useFormContext } from 'react-hook-form';
import { hotelTypes } from '../../config/hotel-options-config';
import { HotelFormData } from './ManageHotelForm';


const TypeSection = () => {
    const {
        register,
        watch,
        formState: { errors }
    } = useFormContext<HotelFormData>();
    const typeWatch = watch('type');

    return (
        <div className='w-full lg:mx-auto lg:w-1/2'>
            <h2 className='text-base font-bold mt-1 px-3 py-2'>Type</h2>
            <div className='grid grid-cols-5'>
                {hotelTypes.map((type) => (
                    <label
                        className={
                            typeWatch === type
                                ? " bg-blue-500 text-sm text-center rounded-full font-semibold py-2 m-1 text-white"
                                : " bg-gray-300 text-sm text-center rounded-full font-semibold py-2 m-1 "
                        }>
                        <input
                            type='radio'
                            value={type}
                            className='hidden'
                            {...register('type', {
                                required: 'Please select at least one type'
                            })}
                        />
                        <span>
                            {type}
                        </span>
                    </label>
                ))}
            </div>
            {errors.type && (
                <span className='text-red-500 text-sm font-bold'>
                    {errors.type.message}
                </span>
            )}
        </div>
    )
}

export default TypeSection;