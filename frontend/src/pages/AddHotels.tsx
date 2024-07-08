import { useAppContext } from "../contexts/AppContext";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";

export default function AddHotels() {
    const { showToast } = useAppContext()
    const {
        mutate,
        isLoading,
    } = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
            showToast({ message: "Hotel added successfully", type: "success" })
        },
        onError: () => {
            showToast({ message: "Failed to add hotel", type: "error" })
        }
    })

    const handleSave = (hotelFormData: FormData) => {
        mutate(hotelFormData)
    }

    return (
        <ManageHotelForm
            onSave={handleSave}
            isLoading={isLoading}
        />
    )
}
