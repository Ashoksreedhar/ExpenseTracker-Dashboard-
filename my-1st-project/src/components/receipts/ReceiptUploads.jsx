import React from 'react'
import { ReceiptCard } from './ReceiptCard'
import { FaTrash } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import { useReceipts } from '../../context/ReceiptContext';



export const ReceiptUploads = () => {
    const navigate = useNavigate()

    const { uploads, removeReceipt } = useReceipts()
    const scannedReceipts = uploads.filter(
        item => item.source === "scan"
    );

    return (

        <div className="mt-14">

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="text-sky-400">↻</span>
                    Recent Uploads
                </div>
                <button onClick={() => {
                    navigate('/gallery')
                }} className="text-sky-400 text-sm hover:underline">
                    View Library
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {scannedReceipts.length === 0 && (
                    <p className='text-slate-500 text-sm'>
                        No receipts uploaded yet
                    </p>
                )}


                {scannedReceipts.map((file) => (
                    <div
                        key={file.id}
                        className="rounded-xl overflow-hidden bg-[#0b1220] border border-slate-800 hover:border-slate-700 transition"
                    >

                        <div className="relative h-40 p-2 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                            {file.image && (
                                <img
                                    src={file.image}
                                    alt=""
                                    className="w-full h-full object-cover opacity-90"
                                />

                            )}


                            <span
                                className={`absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded bg-slate-900 ${file.statusColor}`}
                            >
                                {file.status}
                            </span>

                            <button onClick={() => removeReceipt(file.id)}
                                className='absolute bottom-2 right-2 text-slate-900  hover:text-red-400'
                            >
                                <FaTrash size={20} />

                            </button>
                        </div>


                        <div className="p-4">
                            <p className="text-sm font-medium text-white truncate">
                                {file.name}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                {new Date(file.date).toLocaleDateString()} • {file.category}
                            </p>

                        </div>
                    </div>
                ))}


                <div className="
          rounded-xl border border-dashed border-slate-700
          flex flex-col items-center justify-center
          text-slate-400
          hover:border-sky-500 hover:text-sky-400
          cursor-pointer transition
        ">

                    <span className="text-xs mt-2 tracking-wide">NEW RECEIPT</span>
                </div>
            </div>
        </div>
    )
}
