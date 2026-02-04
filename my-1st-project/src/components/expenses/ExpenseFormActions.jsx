import React from 'react'

export const ExpenseFormActions = () => {
    return (
        <div className="flex gap-4">
            <button
                type="button"
                className="text-sm font-bold text-gray-400 hover:text-white"
            >
                Cancel
            </button>

            <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 bg-sky-500 text-black text-sm md:text-base rounded-lg tracking-widest hover:-translate-y-0.5 transition"
            >
                Save Expense
            </button>
        </div>
    )
}
