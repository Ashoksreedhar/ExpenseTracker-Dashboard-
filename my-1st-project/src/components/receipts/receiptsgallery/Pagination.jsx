import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import React from 'react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const buttons = []

    for (let i = 1; i <= totalPages; i++) {
        buttons.push(
            <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`w-7 h-7 rounded-md text-xs font-bold transition
          ${i === currentPage
                        ? "bg-cyan-500 text-black"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
            >
                {i}

            </button>
        )
    }

    return (
        <div className='flex items-center justify-between px-6 py-4 bg-[#of172a] border-t border-gray-800'>

            <div className='text-[11px] uppercase tracking-widest text-gray-500'>
                page <span className='text-gray-300'>{currentPage}</span> of{" "}
                <span className='text-gray-300'>{totalPages}</span>
            </div>

            <div className='flex-items-center gap-2'>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-2 text -gray-500 disabled:opacity-30'
                >
                    <MdArrowLeft />

                </button>

                {buttons}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-2 text -gray-500 disabled:opacity-30'
                >
                    <MdArrowRight />
                </button>

            </div>
        </div>
    )
}
