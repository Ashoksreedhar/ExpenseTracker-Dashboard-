import React from 'react'
import { IoReceiptSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { useNavbar } from '../../context/NavbarContext';
import { useNavigate } from 'react-router-dom';

export const ReceiptNavbar = () => {
  const { navbar } = useNavbar()

  const navigate = useNavigate()
  return (

    <header className='h-16 flex fixed top-0 w-full items-center justify-between px-6 border-b border-slate-800 bg-black'>

      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-2 font-semibold'>
          <span className='w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center'>
            <IoReceiptSharp />
          </span>
          <span className='text-sky-400 text-xl '>{navbar.title}</span>
        </div>


        <nav className='flex gap-6 text-sm text-slate-500'>
          <span className='hover:text-white cursor-pointer hidden md:flex'
          onClick={()=>
            navigate('/dashbord')
          }
          >Dashboard</span>
          <span className='text-sky-400 cursor-pointer hidden md:flex'
          onClick={()=>
            navigate('/receipt')
          }
          >Receipts</span>
          <span className='hover:text-white cursor-pointer ' onClick={() =>
            navigate('/expenses')
          } >Expenses</span>
          <span className='hover:text-white cursor-pointer hidden md:flex'
          onClick={()=>{
            navigate('/report')
          }}
          >Reports</span>
        </nav>
      </div>

      <div className='flex items-center gap-4'>
        <div className='relative hidden md:flex'>
          <IoSearch
            size={16}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
          />
          <input
            type="text"
            placeholder='Search transactions....'
            className='bg-slate-900 pl-12 pr-5 py-2 rounded-lg text-sm outline-none border border-slate-800 focus:border-sky-500'
          />
        </div>
      </div>
    </header>
  )
}
