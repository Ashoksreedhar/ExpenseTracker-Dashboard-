import React from "react";
import { FiShare2, FiDownload } from "react-icons/fi";

export default function ReportsHeader() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

            <div>
                <h1 className="text-2xl md:text-2xl font-semibold text-white">
                    Monthly Expense Reports
                </h1>

                <div className="flex items-center gap-2 mt-1 text-sm text-slate-400">
                    <span>January 2024</span>
                    <span>-</span>
                    <span>December 2024</span>
                </div>
            </div>

            <div className="fflex items-center gap-3 w-full sm:w-auto">

                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition text-sm">
                    Share
                </button>

                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 mt-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition text-sm">
                    Export PDF/CSV

                </button>
            </div>

        </div>
    );
}
