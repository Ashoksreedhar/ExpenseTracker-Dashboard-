import React from 'react'
import { useReceipts } from '../../context/ReceiptContext'
import { ReportCard } from './ReportCard';


export const TotalSpendingCard = () => {
    const { uploads } = useReceipts();

    const total = uploads.reduce(
        (sum, r) => sum + (Number(r.amount) || 0),0
    );
    return (
        <ReportCard
        title="Total Annual Spending"
        vlaue={`$${total.toFixed(2)}`}
        change={"+5.2%"}
        changeType="up"
        subText="Vs Previous year ($40,400"
        />
    )
}
