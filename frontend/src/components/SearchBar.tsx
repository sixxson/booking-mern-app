import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
    const search = useSearchContext();

    const [location, setLocation] = useState<string>(search.location);
    const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
    const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
    const [adultCount, setAdultCount] = useState<number>(search.adultCount);
    const [childCount, setChildCount] = useState<number>(search.childCount);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        search.saveSearchValues(
            location,
            checkIn,
            checkOut,
            adultCount,
            childCount
        );

        console.log({ location, checkIn, checkOut, adultCount, childCount });

    };

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    return (
        <form
            onSubmit={handleSubmit}
            className="-mt-8 p-3 bg-orange-400 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4 w-full"
        >
            <div className="flex flex-row items-center flex-1 bg-white p-2">
                <MdTravelExplore size={25} className="mr-2" />
                <input placeholder="Where are you going?"
                    className="text-md w-full focus:outline-none bg-white"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)} />
            </div>
            <div className="flex bg-white px-2 justify-around py-1 gap-2">
                <label className="flex items-center border-1">
                    Adults:
                    <input className="w-full p-1 focus:outline-none font-bold bg-white"
                        type="number"
                        min={1}
                        max={20}
                        value={adultCount}
                        onChange={(event) => setAdultCount(parseInt(event.target.value))}
                    />
                </label>
                <label className="flex items-center">
                    Childrens:
                    <input className="w-full p-1 focus:outline-none font-bold bg-white"
                        type="number"
                        min={1}
                        max={20}
                        value={childCount}
                        onChange={(event) => setChildCount(parseInt(event.target.value))}
                    />
                </label>
            </div>
            <div className="flex flex-1 gap-2">

                <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date as Date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholderText="asdasda"
                    className="min-w-full p-2 bg-white focus:outline-none"
                />

                <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date as Date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholderText="asdasda"
                    className="min-w-full p-2 bg-white focus:outline-none"
                />
                <button className="btn btn-primary">
                    Search
                </button>

            </div>

        </form>
    );
};

export default SearchBar;