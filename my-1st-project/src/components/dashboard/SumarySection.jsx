import React, { useState } from 'react'

import SumaryCard from './SumaryCard'
import { useReceipts } from '../../context/ReceiptContext';

const SumarySection = () => {

    const { uploads = [] } = useReceipts();

    const totalExpense = uploads.reduce(
        (sum, r) => sum + (Number(r.amount) || 0), 0
    )



    const scannedReceipts = uploads.filter(
        r => r.source === "scan"
    );

    const totalReceipts = scannedReceipts.length;

    const categoryCount = {};
    uploads.forEach(r => {
        if (r.category) {
            categoryCount[r.category] =
                (categoryCount[r.category] || 0) + 1;
        }
    })

    let highestCategory = '-';
    let maxCount = 0
    for (let cat in categoryCount) {
        if (categoryCount[cat] > maxCount) {
            maxCount = categoryCount[cat];
            highestCategory = cat;
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <SumaryCard title="Total Expenses" value={`₹${totalExpense.toFixed(2)}`} />
            <SumaryCard title="TODAYS EXPENSE" value={`₹${totalExpense.toFixed(2)}`} />
            <SumaryCard title="HIGHEST CATEGORY" value={highestCategory} />
            <SumaryCard title="TOTAL RECIPITS" value={totalReceipts} />
        </div>
    )
}

export default SumarySection;
