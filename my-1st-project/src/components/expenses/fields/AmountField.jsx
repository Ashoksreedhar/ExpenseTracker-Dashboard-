import React from 'react'

export const AmountField = ({value,onChange}) => {
    return (
        <div className="md:col-span-2">
            <label className="block text-sm  text-white mb-2 uppercase">
                Amount
            </label>

            <input
                type="number"
                step="0.01"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="0.00"
                className="w-full h-12 rounded-lg bg-input-bg border border-[#1f2937] px-4 text-white focus:ring-2 focus:ring-primary"
            />
        </div>

    )
}
