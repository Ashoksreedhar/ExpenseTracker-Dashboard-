import React, { useEffect } from 'react'

import { useNavbar } from '../context/NavbarContext'

import { ReceiptNavbar } from '../components/layout/ReceiptNavbar'
import GalleryHeader from '../components/receipts/receiptsgallery/GalleryHeader'
import { ReceiptTable } from '../components/receipts/receiptsgallery/ReceiptTable'
import { SummaryPanel } from '../components/receipts/receiptsgallery/SummaryPanel'
import { MobileBootam } from '../components/layout/MobileBootam'

export default function ReceiptGallery() {
    const { setNavbar } = useNavbar()

    useEffect(() => {
        setNavbar({
            title: 'Receipt Gallery',
            activeMenu: "Receipts",
        })
    }, [setNavbar])


    return (
        <div className="min-h-screen bg-slate-900 text-white min-h-screen bg-slate-900 text-white pt-20 "
        > <div className="flex-1 flex flex-col">
                <ReceiptNavbar />
                <main className='p-6 space-y-6'>
                    <GalleryHeader />
                    <div className='col-span-9'>
                        <ReceiptTable />
                    </div> 
                    <SummaryPanel />
                </main> 
            </div>
            <MobileBootam/>
        </div>
    )
}
