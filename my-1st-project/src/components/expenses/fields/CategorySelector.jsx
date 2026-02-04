import React from 'react'

export const CategorySelector = ({ value, onChange }) => {
    return (
        <div>
            <label className="block text-sm font-bold text-white mb-2 uppercase">
                Category
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-12 rounded-lg bg-input-bg border border-[#1f2937] px-4 text-white focus:ring-2 focus:ring-primary"
            >
                <option value="" className='text-sm  bg-sky-500/10 text-sky-400'>Select a category</option>
                <option value="food" className='text-sm  bg-sky-500/10 text-sky-400'> Food</option>
                <option value="travel" className='text-sm  bg-sky-500/10 text-sky-400'> Travel</option>
                <option value="shopping" className='text-sm  bg-sky-500/10 text-sky-400'> Shopping</option>
            </select>
        </div>
    )
}
