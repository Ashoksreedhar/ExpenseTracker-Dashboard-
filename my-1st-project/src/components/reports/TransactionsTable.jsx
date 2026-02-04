import { useMemo } from "react";
import { useReceipts } from "../../context/ReceiptContext";


export const TransactionsTable = ({ data }) => {


    const { uploads = [] } = useReceipts();


    const tableData = useMemo(() => {
        const monthsMap = {};

        uploads.forEach(item => {
            if (!item.date) return;
            const date = new Date(item.date);
            const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

            if (!monthsMap[monthYear]) {
                monthsMap[monthYear] = {
                    month: monthYear,
                    count: 0,
                    total: 0,
                    categories: {}
                };
            }

            monthsMap[monthYear].count += 1;
            monthsMap[monthYear].total += Number(item.amount || 0);


            const cat = item.category || "Uncategorized";
            monthsMap[monthYear].categories[cat] = (monthsMap[monthYear].categories[cat] || 0) + 1;
        });

        return Object.values(monthsMap).sort((a, b) => new Date(b.month) - new Date(a.month));
    }, [uploads]);




    return (
        <div className="bg-[#0b1020] border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">Quarterly Breakdown</h3>
                <button className="text-xs text-slate-400 flex items-center gap-2 hover:text-white transition">
                    Sorted by Month <span className="text-[10px]">▼</span>
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-white/5">
                            <th className="px-6 py-4 font-medium">Month</th>
                            <th className="px-6 py-4 font-medium">Expenses</th>
                            <th className="px-6 py-4 font-medium">Top Category</th>
                            <th className="px-6 py-4 font-medium">Total Amount</th>
                            <th className="px-6 py-4 font-medium">Variance</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/5">
                        {tableData.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-6 py-10 text-center text-slate-500 text-sm italic">
                                    No transaction data available.
                                </td>
                            </tr>
                        ) : (
                            tableData.map((row, index) => {
                              
                                const topCat = Object.keys(row.categories).reduce((a, b) =>
                                    row.categories[a] > row.categories[b] ? a : b
                                );

                                return (
                                    <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-6 text-sm font-semibold text-white whitespace-nowrap">
                                            {row.month}
                                        </td>
                                        <td className="px-6 py-6 text-sm text-slate-400">
                                            {row.count} receipts
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                                {topCat}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-sm font-bold text-white">
                                            ${row.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <button className="text-sky-400 text-xs font-semibold hover:text-sky-300 transition underline-offset-4 hover:underline">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};