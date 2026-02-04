import React from 'react'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AnalyticsSection from '../components/dashboard/AnalyticsSection'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import SumarySection from '../components/dashboard/SumarySection'
import { Greetings } from '../components/dashboard/Greetings'
import RecentExpenses from '../components/dashboard/RecentExpenses'
import { MobileBootam } from '../components/layout/MobileBootam'



function Dashboard() {

    const navigate = useNavigate();


    useEffect(() => {
        const isLoggedIN = localStorage.getItem("isLoggedIn");

        if (!isLoggedIN) {
            navigate("/")
        }
    }, [navigate]);

    return (

        <div className='min-h-screen bg-slate-900 text-white flex pb-20 lg:pb-0'>

            <div className='hidden lg:block'>
                <Sidebar />
            </div>


            <div className='flex-1 flex flex-col lg:pl-60'>
                <Navbar />

                <main className='pt-4 p-4 md:p-6 space-y-6'>

                    <Greetings />
                    <SumarySection />


                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                        <div className='lg:col-span-8'>
                            <RecentExpenses />
                        </div>

                        <div className='col-span-4'>
                            <AnalyticsSection />

                        </div>
                    </div>


                </main>
            </div>
            <MobileBootam/>
        </div>

    )
}

export default Dashboard