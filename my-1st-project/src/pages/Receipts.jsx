
import { ReceiptNavbar } from '../components/layout/ReceiptNavbar'

import { ReceiptUpload } from '../components/receipts/ReceiptUpload'

import { useEffect, useState } from 'react'
import { useNavbar } from '../context/NavbarContext'
import { ReceiptUploads } from '../components/receipts/ReceiptUploads'
import { LiveprocessingPanel } from '../components/receipts/LiveprocessingPanel'
import { MobileBootam } from '../components/layout/MobileBootam'






export const Receipts = () => {

    const [progress, setProgress] = useState(0)
    const [data, setData] = useState(null)

    const { setNavbar } = useNavbar()

    useEffect(() => {
        setNavbar({
            title: 'Upload & Scan',
            activeMenu: 'Receipts',
        })
    }, [setNavbar])


    return (
        <div className='min-h-screen  bg-black text-white'>  
              <ReceiptNavbar />

                <main className='p-6 pt-16 md:pt-20'>

                    <div className='flex flex-col gap-6 md:grid md:grid-cols-12'>
                        <div className='order-1 md:order-none md:col-span-9'>
                            <ReceiptUpload
                                onProgress={setProgress}
                                onResult={setData}
                            />
                        </div>

                        <div className="order-2 md:order-none md:col-span-3 pt-15">
                            <LiveprocessingPanel progress={progress} />
                        </div>

                        <div className="order-3 md:order-none md:col-span-9">
                            <ReceiptUploads />
                        </div>

                    </div>
                </main>
                <MobileBootam/>
            </div >

   

    )
}
