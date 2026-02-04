import React from 'react'
import { ExpensesForm } from './ExpensesForm'

export const AddExpensesModal = () => {
    return (


        <div className="w-full max-w-2xl  border border-slate-800 
                bg-gradient-to-br from-[#0f1624] to-[#ob1020] rounded-xl rounded-xl ">
            <div className="px-8 py-6 border-b   flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-sky-400">Add Manual Expense</h1>
                    <p className="text-sm text-gray-400">Manual entries sync across devices</p>
                </div>

            </div>
            <ExpensesForm />
        </div>

    )
}
