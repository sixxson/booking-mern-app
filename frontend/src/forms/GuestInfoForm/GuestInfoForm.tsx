import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
    hotelId: string;
    pricePerNight: number;

}

type GuestInfoFormData = {
    checkIn: Date;
    checkOut: Date;
    adultCount: number;
    childCount: number;
}

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {

    const search = useSearchContext();
    const { isLoggedIn } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        watch,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<GuestInfoFormData>({
        defaultValues: {
            checkIn: search.checkIn,
            checkOut: search.checkOut,
            adultCount: search.adultCount,
            childCount: search.childCount,
        }
    });

    const checkIn = watch('checkIn');
    const checkOut = watch('checkOut');

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    const onSignInCLick = (data: GuestInfoFormData) => {
        search.saveSearchValues(
            "",
            data.checkIn,
            data.checkOut,
            data.adultCount,
            data.childCount,
        );
        navigate("/signIn", { state: { from: location } })
    };

    const onSubmit = (data: GuestInfoFormData) => {
        search.saveSearchValues(
            "",
            data.checkIn,
            data.checkOut,
            data.adultCount,
            data.childCount,
        );
        navigate(`/hotel/${hotelId}/booking`)
    };

    return (
        <div className="flex flex-col p-4 bg-blue-200 gap-4">
            <h3 className="text-md font-bold">{pricePerNight}$</h3>
            <form onSubmit={isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInCLick)}>
                <div className="grid grid-cols-1 gap-4 items-center">
                    <div>
                        <DatePicker
                            required
                            selected={checkIn}
                            onChange={(date) => setValue("checkIn", date as Date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={minDate}
                            maxDate={maxDate}
                            placeholderText="Check In"
                            className="min-w-full p-2 bg-white focus:outline-none"
                            wrapperClassName="min-w-full "
                        />
                    </div>
                    <div>
                        <DatePicker
                            required
                            selected={checkOut}
                            onChange={(date) => setValue("checkOut", date as Date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={minDate}
                            maxDate={maxDate}
                            placeholderText="Check Out"
                            className="min-w-full p-2 bg-white focus:outline-none"
                            wrapperClassName="min-w-full "
                        />
                    </div>

                    <div className="flex bg-white px-2 justify-around py-1 gap-2">
                        <label className="flex items-center border-1">
                            Adults:
                            <input className="w-full p-1 focus:outline-none font-bold bg-white"
                                type="number"
                                min={1}
                                max={20}
                                {...register("adultCount", {
                                    required: "This field is required",
                                    min: {
                                        value: 1,
                                        message: "asd",
                                    },
                                    valueAsNumber: true,
                                })}
                            />
                        </label>
                        <label className="flex items-center">
                            Children:
                            <input className="w-full p-1 focus:outline-none font-bold bg-white"
                                type="number"
                                min={0}
                                max={20}
                                {...register("childCount", {
                                    valueAsNumber: true,
                                })}
                            />
                        </label>
                        {errors.adultCount && (
                            <span className="text-red-500 font-semibold text-sm">
                                {errors.adultCount.message}
                            </span>
                        )}
                    </div>
                    {isLoggedIn ? (<button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-slate-500 text-xl">Book Now</button>
                    ) : (
                        <button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-slate-500 text-xl">Sign in to book</button>
                    )}
                </div>
            </form>
        </div>
    )

}

export default GuestInfoForm;