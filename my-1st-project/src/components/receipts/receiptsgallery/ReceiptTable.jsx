import React, { useState } from 'react'
import { ReceiptRow } from './ReceiptRow'
import GalleryFilters from './GalleryFilters';
import { Pagination } from './Pagination';

import { useReceipts } from '../../../context/ReceiptContext';




const getCategoryColor = (category) => {
    switch (category) {
        case "Food":
            return "border-green-600/50 text-green-400 bg-green-950/30";
        case "Travel":
            return "border-blue-600/50 text-blue-400 bg-blue-950/30";
        case "Office":
            return "border-purple-600/50 text-purple-400 bg-purple-950/30";
        default:
            return "border-gray-600/50 text-gray-400 bg-gray-950/30";
    }
};


export const ReceiptTable = () => {

    const { uploads } = useReceipts()
    const DATA = uploads.filter(item => item.source === 'scan')

    const Itemsperpage = 3
    const [curretnPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(DATA.length / Itemsperpage)

    const startIndex = (curretnPage - 1) * Itemsperpage
    const currentData = DATA.slice(startIndex, startIndex + Itemsperpage)


    return (

        <div className="max-w-8xl mx-auto">

            <div className='max-w-8xl mx-auto bg-[#131c2e] rounded-xl shadow-2xl overflow-hidden border border-gray-800' >
                <GalleryFilters />
                <table className='w-full text-left border-separate border-spacing0'>
                    <thead className='bg-[#0f172a]'>
                        <tr className='text-[11px] uppercase tracking-widest text-gray-500 border-b border-gray-800'>
                            <th className='p-4 w-[30%] font-medium text-left'>Item / Merchant Details</th>
                            <th className='p-4 w-[16%] font-medium text-center'>Date</th>
                            <th className='p-4  w-[18%] font-medium text-center'>Classification</th>
                            <th className='p-4  w-[18%] font-medium text-right'>Amount</th>
                            <th className='p-4  w-[10%] font-medium text-center'>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-800'>
                        {currentData.length === 0 && (
                            <tr>
                                <td colSpan="5" className="p-6 text-center text-gray-500">
                                    No receipts uploaded
                                </td>
                            </tr>

                        )}

                        {currentData.map(receipt => (
                            <ReceiptRow
                                key={receipt.id}
                                item={receipt.name}
                                merchantSub={
                                    receipt.rawText
                                        ? receipt.rawText.split('\n')[0]
                                        : ''
                                }
                                date={new Date(receipt.date).toLocaleDateString()}
                                category={receipt.category}
                                categoryColor={getCategoryColor(receipt.category)}
                                amount={receipt.amount}
                                image={receipt.image}
                            />
                        ))}

                    </tbody>
                </table>

                <Pagination
                    currentPage={curretnPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>



    )
}
