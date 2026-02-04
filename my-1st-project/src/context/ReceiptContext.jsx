import React, { createContext, useContext, useEffect, useState } from "react"

const ReceiptContext = createContext()

export const ReceiptProvider = ({ children }) => {
    const [uploads, setUploads] = useState([])

    useEffect(() => {
        const saved = localStorage.getItem("receipts")
        if (saved) {
            setUploads(JSON.parse(saved))
        }
    }, [])


    const persist = (data) => {
        setUploads(data);
        localStorage.setItem("receipts", JSON.stringify(data));
    };


    const addExpense = (expense) => {
        const normalized = {
            id: Date.now(),
            amount: Number(expense.amount || 0),
            date: expense.date
                ? new Date(expense.date).toISOString()
                : new Date().toISOString(),
            category: expense.category || "Other",
            notes: expense.notes || "",
            currency: expense.currency || "USD",
            image: expense.image || null,   
            source: expense.source || "manual", 
        };

       
    persist([normalized, ...uploads]);
    };

    const addReceipt = (receipt) => {
        addExpense({ ...receipt, source: "scan" });
    };

   

    const removeReceipt = (id) => {
        const updated = uploads.filter(item => item.id !== id)
        persist(updated);
    }

    return (
        <ReceiptContext.Provider value={{ uploads,addExpense, addReceipt,removeReceipt }}>
            {children}
        </ReceiptContext.Provider>
    )
}

export const useReceipts = () => useContext(ReceiptContext)


