import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Receipts } from './pages/Receipts'
import ReceiptGallery from './pages/ReceiptGallery'
import { Expenses } from './pages/Expenses'
import { Reports } from './pages/Reports'
import { MobileBootam } from './components/layout/MobileBootam'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashbord' element={<Dashboard />} />
          <Route path='/receipt' element={<Receipts />} />
          <Route path='/gallery' element={<ReceiptGallery />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/report' element={<Reports />} />

        </Routes>
        <MobileBootam />
      </BrowserRouter>
    </>
  )
}

export default App
