import React from 'react'

import { useReceipts } from '../../context/ReceiptContext';
import { ReportCard } from './ReportCard';

export const AvgMonthlyCard = () => {
    const { uploads } = useReceipts();
    const total = uploads.reduce(
        (sum, r) => sum + (Number(r.amount) || 0),
        0
    );

    const avg = total / 12;
    return (
        <ReportCard
            title="Average Monthly Spend"
            value={`$${avg.toFixed(2)}`}
            change="-2.1%"
            changeType="down"
            subText="Recommended budget: $3,200"
        />

    )
}
