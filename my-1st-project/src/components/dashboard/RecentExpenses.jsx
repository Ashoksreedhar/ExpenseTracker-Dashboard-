import React from 'react'
import { useReceipts } from '../../context/ReceiptContext'

const statusStyles = {
    processed: "text-sky-400",
    Pending: "text-yellow-400",
    Flagged: "text-red-400"
}

export default function RecentExpenses() {

    const { uploads = [] } = useReceipts();

    const RecentExpenses = [...uploads]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);

    return (
        <div className='bg-[#141c2f] rounded-2xl p-4 md:p-6 shadow-lg'>

            <div className="flex items-center justify-between mb-6">
                <h3 className='text-base md:text-lg font-semibold'>Recten Expenses</h3>
                <button className='text-[10px] md:text-xs font-bold text-sky-400 uppercase'>FULL HISTORY</button>
            </div>

            <div className='overflow-x-auto w-full'>
                <table className='w-full text-sm min-w-[720px] md:min-w-full'>
                    <thead className='text-slate-400 border-b border-slate-700'>
                        <tr>
                            <th className='py-4 px-2 text-center uppercase tracking-wider'>MERCHANT</th>
                            <th className='py-4 px-2 text-center uppercase tracking-wider'>DATE</th>
                            <th className='py-4 px-2 text-center uppercase tracking-wider'>CATEGORY</th>
                            <th className='py-4 px-2 text-center uppercase tracking-wider'>AMOUNT</th>
                            <th className='py-4 px-2 text-center uppercase tracking-wider'>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>

                        
                            {RecentExpenses.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="py-6 text-center text-slate-500"
                                    >
                                        No expenses yet
                                    </td>
                                </tr>
                            )}

                            {RecentExpenses.map((item, index) => (
                                <tr
                                    key={item.id || index}
                                    className='border-b border-slate-800 last:border-none'
                                >
                                    <td className=' py-4 px-2 text-slate-200 text-center font-medium whitespace-nowrap'>
                                        {item.name || item.merchant || "Unknown Merchant"}
                                    </td>

                                    <td className='py-4 px-2 text-slate-400 text-center whitespace-nowrap'>
                                        {new Date(item.date).toLocaleDateString()}
                                    </td>

                                    <td className=' py-4 px-2 text-center'>
                                        <span className='px-2 py-1 bg-slate-800 text-slate-300 rounded-md text-[10px] border border-slate-700'>
                                            {item.category}
                                        </span>
                                    </td>

                                    <td className='py-4 px-2 text-white text-center font-bold whitespace-nowrap'>
                                        ${Number(item.amount).toFixed(2)}
                                    </td>

                                    <td
                                        className={` py-4 px-2 text-white text-center font-bold whitespace-nowrap  ${item.source === "scan"
                                            ? "text-green-400"
                                            : "text-purple-400"
                                            }`}
                                    >
                                        {item.source === "scan" ? "SCANNED" : "MANUAL"}
                                    </td>
                                </tr>
                            ))}
                        

                    </tbody>

                </table>

            </div>


        </div >
    )
}
