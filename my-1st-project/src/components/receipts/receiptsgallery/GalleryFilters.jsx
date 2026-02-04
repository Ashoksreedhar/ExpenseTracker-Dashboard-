import React from 'react'

export default function GalleryFilters() {
    return (
        <div className="flex gap-4 text-sm">
            <select className="bg-gray-900 p-2 rounded">
                <option>Last 30 Days</option>
            </select>

            <select className="bg-gray-900 p-2 rounded">
                <option>All Categories</option>
            </select>

            <select className="bg-gray-900 p-2 rounded">
                <option>Newest First</option>
            </select>
        </div>
    )
}
