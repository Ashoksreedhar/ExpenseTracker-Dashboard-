import React from 'react'
import { RegisterForm } from '../components/auth/signup/RegisterForm'
import { RegisterHeader } from '../components/auth/signup/RegisterHeader'
import { RegisterFooter } from '../components/auth/signup/RegisterFooter'



export const Register = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
            <div className="w-full max-w-md bg-slate-800/8- backfrop-blur-xl rounded-xl shadow-2xl p-8">
                <RegisterHeader />
                <RegisterForm />
                <RegisterFooter/>
            </div>

        </div>
    )
}
