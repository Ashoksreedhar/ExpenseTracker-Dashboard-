import React from 'react'

export const ReportCard = ({title,value,subText,change,changeType}) => {
    return (
        <div className="bg-gradient-to-b from-[#111a2e] to-[#0c1426] p-6 rounded-xl border border-slate-800">
            <p className='text-sm text-slate-400'>
                {title}
            </p>

            <div className='flex items-center gap-3 mt-2'>
                <h2 className='text-2xl font-bold'>{value}</h2>



                {change && (
                    <span
                        className={`text-sm ${changeType === "up"
                            ? "text-green-400"
                            : "text-red-400"
                            }`}
                    >
                        {change}
                    </span>
                )}
            </div>

            {subText && (
                <p className="text-xs text-slate-500 mt-1">{subText}</p>
            )}
        </div>
    )
}
