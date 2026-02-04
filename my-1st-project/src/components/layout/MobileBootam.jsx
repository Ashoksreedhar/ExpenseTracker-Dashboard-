import React from 'react'
import { NavLink } from "react-router-dom";


export const MobileBootam = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617] border-t border-slate-800 md:hidden">

            <div className="flex items-center justify-around h-16 relative">

                
                <NavLink
                    to="/dashbord"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${isActive ? "text-cyan-400" : "text-slate-400"
                        }`
                    }
                >
                    ⬛
                    <span>Dashboard</span>
                </NavLink>

        
                <NavLink
                    to="/report"
                    className="flex flex-col items-center text-xs text-slate-400"
                >
                    📊
                    <span>Reports</span>
                </NavLink>
            
                <NavLink
                    to="/receipt"
                    className="flex flex-col items-center text-xs text-slate-400"
                >
                    🧾
                    <span>Receipts</span>
                </NavLink>

                
        
            </div>
        </div>)
}
