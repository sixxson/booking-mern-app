"use client";

import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChatBubbleLeftIcon,
    ChevronDownIcon,
    HomeIcon,
    PaperAirplaneIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const products = [
    {
        name: "Book a Stay",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: HomeIcon,
    },
    {
        name: "Book a Flight",
        description: "Speak directly to your customers",
        href: "#",
        icon: PaperAirplaneIcon,
    },
    {
        name: "Contact our Support Team",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: ChatBubbleLeftIcon,
    },
];

const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { isLoggedIn } = useAppContext();

    return (
        <header className="bg-[#013B94]">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <img
                            className="h-12 w-auto"
                            src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                            alt=""
                        />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Stays
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-white"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                                                <item.icon
                                                    className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-[#013B94]"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-[#013B94]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                                        >
                                            <item.icon
                                                className="h-5 w-5 flex-none text-[#013B94]"
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Flights
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Car Rentals
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Attractions
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Flight + Hotel
                    </a>
                </Popover.Group> */}



                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center ">
                    {/* <Link to="/" className="text-base font-bold leading-6 text-white p-4 btn-ghost  rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className=" w-5 font-bold " viewBox="0 0 24 24">
                            <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75
                            3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 
                            1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 
                            .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 
                            12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 
                            0 12s5.373 12 12 12 12-5.373 12-12"></path>
                        </svg>
                    </Link>
                    <Link to="/" className=" text-white p-4 text-base font-bold btn-ghost 
                    rounded-md">
                        List your property
                    </Link> */}
                    {isLoggedIn ?
                        (<div>
                            <Link to="/my-booking" className="btn text-sm font-bold bg-white mx-2 border-none  hover:text-white hover:bg-blue-600
                            text-blue-600 ">
                                My Booking
                            </Link>
                            <Link to="/my-hotels" className="text-sm font-bold btn bg-white mx-2 border-none  hover:text-white hover:bg-blue-600
                            text-blue-600 ">
                                My Hotels
                            </Link>
                            <SignOutButton />
                        </div>) :
                        (<>
                            <Link to="/Register" className="text-sm font-semibold leading-6 hover:bg-blue-800 rounded-md btn btn-ghost
                            text-white ">
                                Sign Up
                            </Link>
                            <Link to="/SignIn" className="text-sm font-semibold leading-6 hover:bg-blue-800 rounded-md btn btn-ghost
                            text-white ">
                                Sign In
                                {/* <span aria-hidden="true">&rarr;</span> */}
                            </Link>
                        </>)
                    }

                </div>
            </nav>

            <div className="mx-auto flex max-w-7xl items-center justify-start p-6 lg:px-8">
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm 
                        font-semibold leading-6 text-white">
                            Stays
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-white"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute bg-white -left-8 top-full 
                            z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 
                                            rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center 
                                            justify-center rounded-lg bg-gray-50 
                                            group-hover:bg-gray-200">
                                                <item.icon
                                                    className="h-6 w-6 text-[#013B94] 
                                                    group-hover:text-blue-600"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold 
                                                    text-[#013B94]"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-[#013B94]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 
                                bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 
                                            p-3 text-sm font-semibold leading-6 text-[#013B94] 
                                            hover:bg-gray-100"
                                        >
                                            <item.icon
                                                className="h-5 w-5 flex-none text-[#013B94]"
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Flights
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Car Rentals
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Attractions
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Flight + Hotel
                    </a>
                </Popover.Group>

            </div>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />

                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full 
                        overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm 
                        sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Booking.com</span>
                            <img
                                className="h-8 w-auto"
                                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581
                                e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/16561162549
                                83/booking+logo+white.png?format=1500w"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center 
                                                justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                                                font-semibold leading-7 text-white hover:bg-blue-800">
                                                Stays
                                                <ChevronDownIcon
                                                    className={cn(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm 
                                                        font-semibold leading-7 text-white hover:bg-blue-800"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800"
                                >
                                    Flights
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800"
                                >
                                    Car Rentals
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800"
                                >
                                    Attractions
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800"
                                >
                                    Flight + Hotel
                                </a>
                            </div>

                            <div className="flex flex-col py-6 justify-end">
                                {isLoggedIn ?
                                    (<>
                                        <Link to="/my-booking" className="text-sm font-semibold leading-6 text-white p-2 my-2  hover:bg-blue-800 rounded-md">
                                            My Booking
                                        </Link>
                                        <Link to="/my-hotels" className="text-sm font-semibold leading-6 text-white p-2 my-2  hover:bg-blue-800 rounded-md">
                                            My Hotels
                                        </Link>
                                        <SignOutButton />
                                    </>) :
                                    (<>
                                        <Link to="/Register" className="text-sm font-semibold leading-6 
                            text-white px-2 py-4 hover:bg-blue-800 rounded-md">
                                            Sign Up
                                        </Link>
                                        <Link to="/SignIn" className="text-sm font-semibold leading-6 
                            text-white px-2 py-4 hover:bg-blue-800 rounded-md">
                                            Sign In
                                            {/* <span aria-hidden="true">&rarr;</span> */}
                                        </Link>
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default Header;
