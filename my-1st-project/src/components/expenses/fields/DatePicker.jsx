import React from 'react'

export const DatePicker = ({value,onChange}) => {
    return (
        <div>
            <label className="text-sm text-white mb-2 uppercase">
                Transaction Date
            </label>

            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-12 rounded-lg bg-input-bg border border-[#1f2937] px-4 text-white "
            />
        </div>
    )
}
