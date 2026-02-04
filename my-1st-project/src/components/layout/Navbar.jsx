import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="flex items-center sticky top-0 bg-slate-900 w-[100%] justify-between pz-6 py-4 border-b border-slate-800 z-0">

            <div className="flex items-center p-2 gap-4 w-2/3">
                <h1 className="text-lg font-semibold">Dashboard</h1>

                <div className="relative flex-1 hidden md:flex">
                
                    <input
                        placeholder="search transactions, tags, or reports...."
                        className="w-3/4 pl-5  pr-4 py-2 bg-slate-800 rounded-md text-1xl outline-none focus:ring sky-500"
                    />
                    <button className="p-2 m-1  bg-slate-800 rounded-md hover:bg-slate-700">
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3 p-3">
                <button className="p-2 bg-slate-800 rounded-md hover:bg-slate-700">
                    <FaBell />
                </button>

                <button className="px-3 py-1.5 bg-slate-800 rounded-md text-sm font-medium hover:bg-sky-600">
                    Manual
                </button>

                <button className="px-5 py-1.5 bg-sky-500 rounded-md text-sm font-medium hover:bg-sky-600">
                   Upload
                </button>
            </div>

        </header>
    )
}

export default Navbar;