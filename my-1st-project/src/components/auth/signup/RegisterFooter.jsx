import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RegisterFooter = () => {
    const navigate=useNavigate()
    return (
        <div className='mt-6 text-center space-y-3'>
            <p className='text-xs text-slate-400'>
                Already have an account?{" "}
                <span className='text-white font-medium cursor-pointer' onClick={()=>{
                    navigate('/')
                }}>
                    Sign In
                </span>
            </p>

            <p className='text-[10px] text-slate-600mt'>
                2026.All rights reserved
            </p>
        </div>
    )
}
