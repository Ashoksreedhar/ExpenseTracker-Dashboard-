import React from 'react'
import { IoMdSunny } from "react-icons/io";


export const Greetings = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const hour = new Date().getHours();
  let message = ""

  if (hour < 12) {
    message = "Good Morning,"
  } else if (hour < 17) {
    message = "Good Afternoon,"
  } else {
    message = "Good Evening..."
  }

  return (
    <div className='mb-8 px-4 mt-4'>
      <h1 className='text-2xl md:text-3xl font-semibold text-sky-400'>{message} <span className='text-2xl'>{user?.name || "User"}.!</span>  </h1>
      <p className='text-slate-500 text-sm mt-2 font-medium leading-relaxed max-w-[250px]'>recipts this week..
        You're on track with your budget..!
      </p>
    </div>
  )
}
