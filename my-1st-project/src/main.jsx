import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavbarProvider } from './context/NavbarContext'
import { ReceiptProvider } from './context/ReceiptContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <NavbarProvider>
      <ReceiptProvider>
        <App />
      </ReceiptProvider>
    </NavbarProvider>
  </StrictMode>


)
