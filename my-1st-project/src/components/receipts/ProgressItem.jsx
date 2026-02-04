import React from 'react'
const colors = {
    purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500',
    },
    blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-500',
    },
    green: {
        text: 'text-green-400',
        bg: 'bg-green-500',
    },
}


export const ProgressItem = ({ name, percent, color, status }) => {

    const styles = colors[color] || colors.purple

    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span>{name}</span>
                <span className={styles.text}>{percent}%</span>
            </div>

            <div className="h-1 bg-white/10 rounded overflow-hidden">
                <div
                    className={`h-1 ${styles.bg} rounded transition-all`}
                    style={{ width: `${percent}%` }}
                />
            </div>

            {status && (
                <p className="text-[10px] text-white/40 mt-1">
                    {status}
                </p>
            )}
        </div>
    )
}
