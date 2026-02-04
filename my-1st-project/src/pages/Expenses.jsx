
import { useEffect } from 'react'

import { useNavbar } from '../context/NavbarContext'
import { ReceiptNavbar } from '../components/layout/ReceiptNavbar'
import { AddExpensesModal } from '../components/expenses/AddExpensesModal'
import { MobileBootam } from '../components/layout/MobileBootam'

export const Expenses = () => {
    const { setNavbar } = useNavbar()

    useEffect(() => {
        setNavbar({
            title: 'expense',
            activeMenu: "Expense",
        })
    }, [setNavbar])

    return (

        <div className='min-h-screen mt-16 bg-black text-white flex pb-20 lg:pb-0'>

            <div className='flex-1'>
                <ReceiptNavbar />


                <main className='flex justify-center items-center p-6'>
                    <AddExpensesModal />
                </main>
            </div>
            <MobileBootam/>

        </div>
    )
}
