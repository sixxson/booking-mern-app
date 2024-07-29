import React, { useContext, useState } from "react";

type SearchContext = {
    location: string;
    checkIn: Date;
    checkOut: Date;
    adultCount: number;
    childCount: number;
    hotelId: string;
    saveSearchValues: (
        location: string,
        checkIn: Date,
        checkOut: Date,
        adultCount: number,
        childCount: number
    ) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
    children: React.ReactNode;
};

export const SearchContextProvider = ({
    children,
}: SearchContextProviderProps) => {
    const [location, setDestination] = useState<string>(
        () => sessionStorage.getItem("location") || ""
    );
    const [checkIn, setCheckIn] = useState<Date>(
        () =>
            new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
    );
    const [checkOut, setCheckOut] = useState<Date>(
        () =>
            new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
    );
    const [adultCount, setAdultCount] = useState<number>(() =>
        parseInt(sessionStorage.getItem("adultCount") || "1")
    );
    const [childCount, setChildCount] = useState<number>(() =>
        parseInt(sessionStorage.getItem("childCount") || "1")
    );
    const [hotelId, setHotelId] = useState<string>(
        () => sessionStorage.getItem("hotelID") || ""
    );

    const saveSearchValues = (
        location: string,
        checkIn: Date,
        checkOut: Date,
        adultCount: number,
        childCount: number,
        hotelId?: string
    ) => {
        setDestination(location);
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        setAdultCount(adultCount);
        setChildCount(childCount);
        if (hotelId) {
            setHotelId(hotelId);
        }

        sessionStorage.setItem("location", location);
        sessionStorage.setItem("checkIn", checkIn.toISOString());
        sessionStorage.setItem("checkOut", checkOut.toISOString());
        sessionStorage.setItem("adultCount", adultCount.toString());
        sessionStorage.setItem("childCount", childCount.toString());

        if (hotelId) {
            sessionStorage.setItem("hotelId", hotelId);
        }
    };

    return (
        <SearchContext.Provider
            value={{
                location,
                checkIn,
                checkOut,
                adultCount,
                childCount,
                hotelId,
                saveSearchValues,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    return context as SearchContext;
};
