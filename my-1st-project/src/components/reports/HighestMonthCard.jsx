import { useReceipts } from '../../context/ReceiptContext'
import { ReportCard } from './ReportCard';



export default function HighestMonthCard() {
    const { uploads } = useReceipts();

    const monthlyTotals = {};

    uploads.forEach((r) => {
        const month = new Date(r.date).toLocaleString("default", {
            month: "long",
        });

        monthlyTotals[month] =
            (monthlyTotals[month] || 0) + Number(r.amount || 0);
    });

    const highestMonth = Object.entries(monthlyTotals).sort(
        (a, b) => b[1] - a[1]
    )[0];

    return (
        <ReportCard
            title="Highest Month"
            value={highestMonth ? highestMonth[0] : "-"}
            subText={
                highestMonth
                    ? `$${highestMonth[1].toFixed(2)}`
                    : "No data"
            }
            
        />
    );
}
