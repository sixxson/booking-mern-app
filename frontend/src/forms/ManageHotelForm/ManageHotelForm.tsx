import { FormProvider, useForm } from "react-hook-form"
import DetailsSection from "./DetailsSection"
import TypeSection from "./TypeSection"
import FacilitiesSection from "./FacilitiesSection"
import GuestsSection from "./GuestsSection"
import ImagesSection from "./ImageHotelForm"



export type HotelFormData = {
    name: string
    city: string
    country: string
    description: string
    type: string
    pricePerNight: number
    starRating: number
    facilities: string[]
    imageFiles: FileList
    adultCount: number
    childCount: number
}

export type Props = {
    onSave: (formData: FormData) => void
    isLoading: boolean

}

export default function ManageHotelForm(
    { onSave, isLoading }: Props
) {

    const formMethods = useForm<HotelFormData>()
    const { handleSubmit, } = formMethods;


    const onSubmit = handleSubmit((formDataJson: HotelFormData) => {
        const formData = new FormData()
        formData.append("name", formDataJson.name)
        formData.append("city", formDataJson.city)
        formData.append("country", formDataJson.country)
        formData.append("description", formDataJson.description)
        formData.append("type", formDataJson.type)
        formData.append("pricePerNight", formDataJson.pricePerNight.toString())
        formData.append("starRating", formDataJson.starRating.toString())
        formData.append("adultCount", formDataJson.adultCount.toString())
        formData.append("childCount", formDataJson.childCount.toString())
        formDataJson.facilities.forEach((facility, index) => {
            formData.append(`facilities[${index}]`, facility)
        })
        Array.from(formDataJson.imageFiles).forEach((imageFile) => {
            formData.append(`imageFiles`, imageFile)
        })

        onSave(formData)
        console.log(formDataJson);

    })


    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col" onSubmit={onSubmit}>
                <DetailsSection />``
                <TypeSection />
                <FacilitiesSection />
                <GuestsSection />
                <ImagesSection />
                <span className="flex lg:justify-center mt-10 justify-end mx-3 ">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="btn btn-info text-white lg:w-1/2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-black"
                    >
                        {isLoading ? "Create..." : "Create Hotel"}

                    </button>
                </span>
            </form>
        </FormProvider>

    )
}
