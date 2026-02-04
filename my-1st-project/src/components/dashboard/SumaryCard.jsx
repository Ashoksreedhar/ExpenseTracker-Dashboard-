import React from 'react'

const SumaryCard = ({title,value}) => {
    return (
        <div className=' bg-slate-950  rounded-xl p-4 md:p-6'>
            <p className='text-xs text-blue-500'>{title}</p>
            <h2 className='text-2xl font-semibold mt-1'>{value}</h2>

        </div>
    )
}

export default  SumaryCard;