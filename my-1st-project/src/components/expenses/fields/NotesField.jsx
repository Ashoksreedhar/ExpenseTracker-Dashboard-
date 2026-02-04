import React from 'react'

export const NotesField = ({value,onChange}) => {
  return (
        <div>
      <label className=" text-sm text-white mb-2 uppercase ">
        Notes <span className="text-gray-500 normal-case">(Optional)</span>
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-input-bg border border-[#1f2937] p-4 text-white "
        placeholder="What was this expense for?"
      />
    </div>
  )
}
