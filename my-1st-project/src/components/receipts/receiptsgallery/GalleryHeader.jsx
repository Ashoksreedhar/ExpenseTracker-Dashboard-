import { FaDownload } from "react-icons/fa";

const GalleryHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold">Receipt Gallery</h1>
                <p className="text-gray-400 text-sm">
                    Review and manage your digitized transactions
                </p>
            </div>

            <button className="  flex items-center gap-2
                    px-4 py-2
                    bg-[#1f2933]
                    text-gray-200
                    rounded-lg
                    hover:bg-[#2a3642]
                    transition">
                <FaDownload size={14} />
                <span className="text-sm font-medium">
                    Export
                </span>

            </button>
        </div>
    )
}

export default GalleryHeader
