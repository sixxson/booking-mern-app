
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom"
import * as apiClient from "../api-client"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";

const EditHotel = () => {
    const { hotelId } = useParams();
    const { showToast } = useAppContext();

    const { data: hotel } = useQuery(
        "fetchMyHotelById",
        () => apiClient.fetchMyHotelById(hotelId || ''),
        {
            enabled: !!hotelId,
        }
    );

    const { mutate, isLoading } = useMutation(apiClient.updatedMyHotelById, {
        onSuccess: () => {
            showToast({ message: "Hotel Saved!", type: "success" })
        },
        onError: () => {
            showToast({ message: "Failed to save hotel", type: "error" })
        },
    });

    const handleSave = (hotelFormData: FormData) => {
        mutate(hotelFormData);
    };

    return <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />;

}


export default EditHotel; 