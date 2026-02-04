import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import ReportsHeader from '../components/reports/ReportHeader'

import AnalyticsSection from '../components/dashboard/AnalyticsSection'
import { TotalSpendingCard } from '../components/reports/TotalSpendingCard'
import { AvgMonthlyCard } from '../components/reports/AvgMonthlyCard'
import HighestMonthCard from '../components/reports/HighestMonthCard'
import { SpendingTrends } from '../components/reports/SpendingTrends'
import { TransactionsTable } from '../components/reports/TransactionsTable'



export const Reports = () => {
    return (

        <div className="flex bg-[#0b1220] min-h-screen text-white lg:ml-60">


            <div className='hidden lg:block'>
                <Sidebar />
            </div>

            <main className="flex-1 p-4 md:p-8 space-y-8 overflow-x-hidden">
                <ReportsHeader />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TotalSpendingCard />
                    <AvgMonthlyCard />
                    <HighestMonthCard />

                    <div className='md:col-span-2 lg:col-span-3'>
                        <SpendingTrends />
                    </div>

                </div>

                <div className='mt-20 md:mt-20'>
                    <TransactionsTable />
                </div>

            </main>
        </div>
    )
}
