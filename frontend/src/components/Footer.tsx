

export default function Footer() {
    return (
        <footer className="bg-[#013B94] py-10">
            <div className="container mx-auto flex justify-between items-center">
                <img
                    className="h-12 w-auto"
                    src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                    alt=""
                />
                <span className="text-white font-semibold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </footer>
    )
}
