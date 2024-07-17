import { useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";
import StarRatingFilter from "../components/StarRatingFilter";
import HotelTypesFilter from "../components/HotelTypesFilter";
import FacilitiesFilter from "../components/FacilitiesFilter";
import PriceFilter from "../components/PriceFilter";

export default function Search() {
    const search = useSearchContext();
    const [page, setPage] = useState<number>(1);
    const [selectedStars, setSelectedStars] = useState<string[]>([]);
    const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
    const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
    const [sortOption, setSortOption] = useState<string>("");

    const searchParams = {
        location: search.location,
        checkIn: search.checkIn.toISOString(),
        checkOut: search.checkOut.toISOString(),
        adults: search.adultCount.toString(),
        children: search.childCount.toString(),
        page: page.toString(),
        stars: selectedStars,
        types: selectedHotelTypes,
        facilities: selectedFacilities,
        maxPrice: selectedPrice?.toString(),
        sortOption,
    };

    const { data: hotelData } = useQuery(["searchHotels", searchParams], () =>
        apiClient.searchHotels(searchParams),
    );

    const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const starRating = event.target.value;

        setSelectedStars((prevStars) =>
            event.target.checked
                ? [...prevStars, starRating]
                : prevStars.filter((star) => star !== starRating)
        );
    };

    const handleHotelTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const hotelType = event.target.value;

        setSelectedHotelTypes((prevHotelTypes) =>
            event.target.checked
                ? [...prevHotelTypes, hotelType]
                : prevHotelTypes.filter((hotelType) => hotelType !== hotelType)
        );
    };

    const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const facility = event.target.value;

        setSelectedFacilities((prevFacilities) =>
            event.target.checked
                ? [...prevFacilities, facility]
                : prevFacilities.filter((prevFacility) => prevFacility !== facility)
        );
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 px-5">
            <div className=" rounded-lg border border-slate-300 p-5 h-fit  top-10">
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold border-b border-stale-300 pb-5">
                        Filter by:
                    </h3>
                    {/* Tool Filter */}
                    <StarRatingFilter
                        selectedStars={selectedStars}
                        onChange={handleStarsChange}
                    />
                    <HotelTypesFilter
                        selectedHotelTypes={selectedHotelTypes}
                        onChange={handleHotelTypeChange}
                    />
                    <FacilitiesFilter
                        selectedFacilities={selectedFacilities}
                        onChange={handleFacilityChange}
                    />
                    <PriceFilter
                        selectedPrice={selectedPrice}
                        onChange={(value?: number) => setSelectedPrice(value)}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        {hotelData?.pagination.total} Hotel found
                        {search.location ? ` in ${search.location}` : ""}
                        {search.checkIn ? ` from ${search.checkIn.toLocaleDateString()}` : ""}
                        {search.checkOut ? ` to ${search.checkOut.toLocaleDateString()}` : ""}
                    </span>
                    {/* ToDo sort options */}
                    <select
                        value={sortOption}
                        onChange={(event) => setSortOption(event.target.value)}
                        className="p-2 border rounded-md bg-white"
                    >
                        <option value="">Sort By</option>
                        <option value="starRating">Star Rating</option>
                        <option value="pricePerNightAsc">
                            Price Per Night (low to high)
                        </option>
                        <option value="pricePerNightDesc">
                            Price Per Night (high to low)
                        </option>
                    </select>
                </div>
                {hotelData?.data.map((hotel) => (
                    <SearchResultsCard hotel={hotel} />
                ))}
                <div >
                    <Pagination
                        page={hotelData?.pagination.page || 1}
                        pages={hotelData?.pagination.pages || 1}
                        onPageChange={(page) => setPage(page)}
                    />
                </div>
            </div>

        </div>
    )
}

