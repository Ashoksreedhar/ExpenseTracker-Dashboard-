import React, { useState } from 'react';
import { FaFileUpload } from "react-icons/fa";

import { useReceipts } from '../../context/ReceiptContext';

import { runTesseractOCR } from '../../utils/tesseractOCR';
import { parseReceiptText } from "../../utils/receiptParse";



const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
};



export const ReceiptUpload = ({ onProgress, onResult }) => {

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false)

    const { addReceipt } = useReceipts()


    const handleDragOver = (e) => {
        e.preventDefault();
    }


    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFile(droppedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            handleFile(selectedFile);
        }
    };

    const handleFile = async (file) => {
        setFile(file)
        if (!file.type.startsWith("image/")) {
            alert("Please upload JPG or PNG images only");
            return;
        }

        if (file.type === "image/avif" || file.type === "image/webp") {
            alert("AVIF / WEBP images are not supported. Convert to JPG or PNG.");
            return;
        }

        setLoading(true)
        setProgress(0)

        // OCR
        // const text = await runTesseractOCR(file,setProgress)


        const text = await runTesseractOCR(file, (p) => {
            setProgress(p);
            if (onProgress) onProgress(p);
        });


        // Parse receipt

        const parsed = parseReceiptText(text)


        const imageBase64 = await fileToBase64(file)

        const newReceipt = {
            name: parsed.merchant || file.name,
            amount: Number(parsed.amount || 0),
            date: parsed.date || new Date().toISOString(),
            category: parsed.category || "Other",
            image: imageBase64,
            rawText: text,
            source: "scan",
        };

        addReceipt(newReceipt);






        addReceipt(newReceipt)

        if (onResult) onResult(newReceipt)
        setLoading(false);


    }

    return (

        <div>
            <div className=" max-w-7xl mx-auto px-6 ">
                <div>
                    <h1 className="text-2xl font-semibold items-center justify-between">
                        Upload & Scan
                    </h1>
                    <p className='text-slate-400 text-sm'>
                        Powering your business with AI-driven expense extraction
                    </p>
                </div>
            </div>


            <div className='w-full h-[420px] mt- rounded-2xl border border-slate-800 
                bg-gradient-to-br from-[#0f1624] to-[#0b1020]
                flex flex-col items-center justify-center text-center '

                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >

                <input
                    type="file"
                    id='fileUpload'
                    className='hidden'
                    accept='image/*'
                    onChange={handleFileChange}
                />

                <div className='w-20 h-16 mb-6 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white'>
                    <FaFileUpload size={22} />
                </div>

                <h3 className='text-xl font-semibold text-white'>Drag your receipts here</h3>

                <p className='text-sm text-slate-400 mt-1'>
                    or{" "}
                    <label
                        htmlFor="fileUpload"
                        className='text-sky-400 cursor-pointer'
                    >
                        browse files</label>
                    from your computer
                </p>

                <p className='text-xs text-slate-500 mt-6 tracking-wide'>
                    Secure cloud processing . JPG, PNG,PDF up to 25MB
                </p>


                {loading && (
                    <div className="mt-6 w-64">
                        <div className="text-xs mb-1 text-slate-400">
                            Scanning… {progress}%
                        </div>
                        <div className="h-2 bg-white/10 rounded">
                            <div
                                className="h-2 bg-sky-500 rounded"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {file && !loading && (
                    <div className="mt-4 text-green-400 text-sm">
                        ✅ Processed: {file.name}
                    </div>
                )}

            </div>
        </div >


    )
}
