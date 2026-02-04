

import { useMemo } from 'react';
import { useReceipts } from '../../context/ReceiptContext';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';



const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


export const SpendingTrends = () => {

    const { uploads = [] } = useReceipts();
    const data = useMemo(() => {
        const monthlyTotals = Array(12).fill(0);

        uploads.forEach(expense => {
            if (!expense.date || !expense.amount)
                return;

            const date = new Date(expense.date);
            if (isNaN(date))
                return;

            const monthIndex = date.getMonth();
            monthlyTotals[monthIndex] += Number(expense.amount);
        })

        return MONTHS.map((month, index) => ({
            month,
            total: Number(monthlyTotals[index].toFixed(2)),
        }))
    }, [uploads]);
    return (

        <div className="w-full bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-xl border border-gray-800 p-4 md:p-6 h-[350px] md:h-[400px]">


            <div className='flex items-center justify-between mb-4 md:mb-6'>
                <div>
                    <h2 className='text-sm font-semibold text-gray-100'>
                        Spending Trends
                    </h2>
                    <p className='text-xs text-gray-500'>
                        Manual + scaned expense (month-wisw)

                    </p>
                </div>

                <div className='flex items-center gap-2 text-xs text-gray-400'>
                    <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                    Total Spending
                </div>
            </div>

            <div className="w-full h-[250px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#1f2937"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
                            tick={{ fill: "#6b7280", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fill: "#6b7280", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            formatter={(value) => `$${value}`}
                            contentStyle={{
                                backgroundColor: "#020617",
                                border: "1px solid #1f2937",
                                borderRadius: "8px",
                                fontSize: "12px",
                            }}
                            labelStyle={{ color: "#e5e7eb" }}
                        />

                        <Line
                            type="monotone"
                            dataKey="total"
                            stroke='#3b82f6'
                            strokeWidth={2.5}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}
