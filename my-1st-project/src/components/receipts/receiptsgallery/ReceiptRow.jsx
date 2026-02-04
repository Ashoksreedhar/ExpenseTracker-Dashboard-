import React from 'react'

export const ReceiptRow = ({ item, merchantSub, date, category, categoryColor, amount, image }) => {
    return (
        <tr className='border-b border-gray-800/50 hover:bg-white/5 transition-colors h-[90px]'>

            <td className='p-4 w-[30%]'>

                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt=""
                        className="w-10 h-12 rounded-xl border border-gray-700/50 object-cover"
                    />

                    <div>
                        <div className="font-semibold text-gray-100 text-[12px]">
                            {item}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">
                            {merchantSub}
                        </div>
                    </div>
                </div>

            </td>

            <td className='p-4 w-[16%] text-center text-gray-400 text-[11px]'>{date}

            </td>

            <td className='p-4 w-[18%] text-center'>
                <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryColor}`}>

                    {category}
                </span>
            </td>

            <td className='p-4 w-[18%] text-right'>
                <div className='font-bold text-gray-100  text-[15px]'>${amount}</div>
                <div className='text-[10px] text-gray-500 uppercase'>USD</div>
            </td>

            <td className='p-4 w-[10%] text-center text-gray-600'>...</td>
        </tr >




    )
}
