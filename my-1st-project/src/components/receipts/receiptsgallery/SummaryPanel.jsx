import React from 'react'

import { FaChartLine } from "react-icons/fa6";

export const SummaryPanel = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#0f1720] to-[#111827] 
                    border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">

        
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 
                        flex items-center justify-center text-sky-400">
                    <FaChartLine size={20} />
                </div>

                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                        Monthly Spend (October)
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                        $1,245.70
                    </h2>
                </div>
            </div>

        
            <div className="flex gap-12 text-sm">
                <div>
                    <p className="text-slate-400 uppercase text-xs tracking-wide">
                        Uncategorized
                    </p>
                    <p className="text-white font-medium">
                        4 Receipts
                    </p>
                </div>

                <div>
                    <p className="text-slate-400 uppercase text-xs tracking-wide">
                        Tax Deductible
                    </p>
                    <p className="text-emerald-400 font-semibold">
                        82%
                    </p>
                </div>
            </div>

        
            <button className="w-full md:w-auto px-6 py-3 bg-white text-black 
                         rounded-xl font-medium hover:bg-gray-200 transition">
                Generate Report
            </button>

        </div>
    )
}
