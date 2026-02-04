import React from 'react'

export const CurrencyFields = ({value,onChange}) => {
    return (
        <div>
            <label className='text-sm  text-white mb-2 uppercase'>
                Currency
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='w-full h-12 rounded-lg bg-input-bg border border-[#1f2937]  px-4 text-white text-sm'
            >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>

            </select>
        </div>
    )
}
