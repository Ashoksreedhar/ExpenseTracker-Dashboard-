import React from 'react'
import { useState } from 'react'
import { CurrencyFields } from './fields/CurrencyFields'
import { AmountField } from './fields/AmountField'
import { DatePicker } from './fields/DatePicker'
import { CategorySelector } from './fields/CategorySelector'
import { NotesField } from './fields/NotesField'
import { AttachReceipts } from './fields/AttachReceipts'
import { ExpenseFormActions } from './ExpenseFormActions'

import { useReceipts } from '../../context/ReceiptContext';

export const ExpensesForm = () => {

    const { addExpense } = useReceipts();


    const [form, setForm] = useState({
        currency: "USD",
        amount: "",
        date: "",
        category: "",
        notes: "",
    });

    const update = (key, value) =>
        setForm({ ...form, [key]: value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

      


        addExpense({
            ...form,
            source: "manual", 
        });

        setForm({
            currency: "USD",
            amount: "",
            date: "",
            category: "",
            notes: "",
        });
    };


    return (
        <form onSubmit={handleSubmit} className='p-8 space-y-8'>

            <div className='grid md:grid-cols-3 gap-6'>
                <CurrencyFields
                    value={form.currency}
                    onChange={(v) => update("currency", v)}
                />

                <AmountField
                    value={form.amount}
                    onChange={(v) => update("amount", v)}
                />
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
                <DatePicker
                    value={form.date}
                    onChange={(v) => update("date", v)}

                />
                <CategorySelector
                    value={form.category}
                    onChange={(v) => update("category", v)}

                />
            </div>

            <NotesField
                value={form.notes}
                onChange={(v) => update("notes", v)}

            />
            <div className='flex items-center justify-between pt-6 border-t border-border-subtle'>
                <AttachReceipts />
                <ExpenseFormActions />
            </div>


        </form>
    )
}
