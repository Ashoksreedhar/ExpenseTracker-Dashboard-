import React from 'react'
import { MdDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoReceiptSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <aside className='w-60 hidden lg:flex  h-[100vh] fixed top-0 left-0 bg-slate-950 border-r border-slate-800 p-4 flex flex-col z-40'>
            <div className='text-xl font-semibold text-sky-400 mb-6'>
                SmartLedger
            </div>

            <nav className='space-y-2 text-sm'>
                <button className='w-full text-left px-3 py-2 rounded bg-sky-500/10 text-sky-400'
                    onClick={() =>
                        navigate('/dashbord')
                    }
                >
                    <MdDashboard className='text-lg' />
                    <span> Dashboard</span>
                </button>

                <button onClick={() => {
                    navigate('/report')
                }}
                    className='w-full text-left px-3 py-2 text-slate-400 hover:text-white cursor-pointer hover:bg-sky-500/10'>
                    <TbReportSearch className='text-lg' />
                    <span>Reports</span>
                </button>

                <button onClick={() => {
                    navigate('/receipt')
                }}
                    className='w-full text-left px-3 py-2 text-slate-400 hover:text-white cursor-pointer hover:bg-sky-500/10'>
                    <IoReceiptSharp className='text-lg' />
                    <span>
                        Recepits</span>
                </button>
            </nav>


            <div
                onClick={ handleLogout }
                className="mt-auto flex items-center gap-3 p-4 cursor-pointer hover:bg-white/5 transition-all border-t border-white/5 active:scale-95">

                <div className="bg-slate-800 p-2 rounded-lg text-slate-400">
                    <FaUser size={15} />
                </div>


                <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-200">
                        {user?.name || "User"}
                    </span>
                    <span className="text-[10px] text-slate-500">Logout</span>
                </div>
            </div>

        </aside>
    )
}
