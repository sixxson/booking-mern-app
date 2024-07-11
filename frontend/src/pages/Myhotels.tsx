import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import * as apiClient from '../api-client'
import { BsMap, BsBuilding, } from 'react-icons/bs'
import { BiMoney, BiHotel, BiStar } from 'react-icons/bi'

export default function Myhotels() {

    const { data: hotelData } = useQuery(
        "fetchMyHotels",
        apiClient.fetchMyHotels, {
        onError: () => {

        }
    })

    if (!hotelData) return <span className='text-blue-700 text-3xl text-center'> No Hotels Found 404</span>

    const handleShowMore = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("overflow-y-hidden")) {
            target.classList.remove("overflow-y-hidden");
            target.classList.remove("h-40");
            target.classList.add("overflow-none");

        } else {
            target.classList.remove("overflow-none");
            target.classList.add("overflow-y-hidden");
            target.classList.add("h-40");

        }
    }



    return (
        <section className='min-h-screen'>
            <div className='min-h-screen w-[97%] lg:w-2/3 mx-3 lg:mx-auto'>
                <span className='bg-slate-200 p-5 rounded-md mt-6 flex justify-between items-center'>
                    <h1 className='text-3xl font-bold text-blue-600'>
                        My Hotels
                    </h1>
                    <Link
                        to="/add-hotel"
                        className="btn bg-blue-500 border-none 
                    hover:bg-blue-700 text-white font-bold"
                    >Add Hotel</Link>
                </span>
                <div className=' grid grid-cols-1 gap-5 mt-5'>
                    {hotelData && hotelData.map((hotel) => (
                        <div className='flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5'>
                            <h2 className='text-2xl font-bold'>{hotel.name}</h2>
                            <p className='whitespace-pre-line h-40 overflow-hidden'
                                onClick={handleShowMore}
                            >
                                {hotel.description}
                            </p>
                            <div className='grid grid-flow-row lg:grid-cols-5 gap-2 '>
                                <div className='border border-slate-300 rounded-sm p-3 flex items-center'>
                                    <BsMap className='text-blue-700 text-xl mr-2' />
                                    {hotel.city}, {hotel.country}
                                </div>
                                <div className='border border-slate-300 rounded-sm p-3 flex items-center'>
                                    <BsBuilding className='text-blue-700 text-xl mr-2' />
                                    {hotel.type}
                                </div>
                                <div className='border border-slate-300 rounded-sm p-3 flex items-center'>
                                    <BiMoney className='text-blue-700 text-xl mr-2' />
                                    $ {hotel.pricePerNight} preson night
                                </div>
                                <div className='border border-slate-300 rounded-sm p-3 flex items-center'>
                                    <BiHotel className='text-blue-700 text-xl mr-2' />
                                    {hotel.adultCount} Adults, {hotel.childCount} Childrens
                                </div>
                                <div className='border border-slate-300 rounded-sm p-3 flex items-center'>
                                    <BiStar className='text-yellow-400 text-xl mr-2' />
                                    {hotel.starRating} Star Rating
                                </div>
                            </div>

                            <Link
                                className='btn btn-primary text-white '
                                to={`/edit-hotel/${hotel._id}`}
                            >
                                View Hotel
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

