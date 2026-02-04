import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useReceipts } from '../../context/ReceiptContext';


const colors = [
    "#22c55e",
    "#38bdf8",
    "#8452f1ff",
    "#6d23b7ff",
    "#06b6d4",
    "#f59e0b",
    "#ec4899",
    "#10b981",
];

const getCategoryColor = ( index) => {
    return colors[index % colors.length];
};

function AnalyticsSection() {

    const { uploads = [] } = useReceipts();


    const categoryMap = {};
    uploads.forEach(r => {
        if (r.category) {
            categoryMap[r.category] = (categoryMap[r.category] || 0) + 1;
        }
    })

    const data = Object.keys(categoryMap).map(key => ({
        name: key,
        value: categoryMap[key]
    }));


    const totalCount = uploads.length;

    let highestCategory = '-';
    let maxCount = 0;

    for (let cat in categoryMap) {
        if (categoryMap[cat] > maxCount) {
            maxCount = categoryMap[cat];
            highestCategory = cat;
        }
    }

    const percentage =
        totalCount > 0
            ? Math.round((maxCount / totalCount) * 100)
            : 0;


    return (
        <div className='  rounded-xl  p-5 bg-[#141c2f] w-full max-w-xs'>
            <h3 className='font-semibold mb-4  text-blue-500'>Analytics</h3>
            <div className='relative w-full h-52'>
                {data.length > 0 && (

                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className="text-xs text-slate-400 tracking-wide">

                            SPENT
                        </span>
                        <span className="text-2xl font-bold text-white">
                            {percentage}%
                        </span>
                    </div>
                )}

            
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={4}
                            startAngle={90}
                            endAngle={-270}
                        >
                            {data.map((item, index) => (
                                <Cell
                                    key={item.anme}
                                    fill={getCategoryColor(index)}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className="mt-4 space-y-2 text-sm">
                {data.map((item, index) => (
                    <div key={index} className='flex justify-between text-slate-300 px-3 py-3 rounded bg-sky-500/10 text-sky-400'>
                        <div className='flex items-center gap-2'>
                            <span
                                className='w-3 h-3 rounded-full'
                                style={{ backgroundColor: getCategoryColor(index) }}
                            />
                            {item.name}
                        </div>
                        <span>{item.value}%</span>

                    </div>
                ))}

            </div>

        </div>

    )
}

export default AnalyticsSection;