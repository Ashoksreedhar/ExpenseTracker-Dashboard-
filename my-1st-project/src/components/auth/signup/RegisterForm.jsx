import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as yup from 'yup'

const schema = yup.object({
    name: yup
        .string()
        .required("Full name is ruquired")
        .min(3, "Name must be atlest 3 characters"),

    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),

    password: yup
        .string()
        .min(3, "password must be at least 3  characters")
        .required("password is required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "password do not match")
        .required("confirm password is required"),



})




export const RegisterForm = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",


    })

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {

        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
        setErrors({ ...errors, [name]: "" });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(form, { abortEarly: false })

            const existingUser = JSON.parse(localStorage.getItem("user"))

            if(existingUser && existingUser.email===form.email){
                alert("Already account exists.please login");
                navigate("/")
                return;
            }

            localStorage.setItem(
                "user",
                JSON.stringify({
                    name:form.name,
                    email:form.email,
                    password:form.password,
                })
            )

            localStorage.setItem("isLoggedIn", "true")
            alert("signup successfull..!")
            navigate("/dashbord")
            
        } catch (error) {
            const newErrors = {}

            error.inner.forEach((error) => {
                newErrors[error.path] = error.message
            })
            setErrors(newErrors)

        }

    }

    return (

        <form onSubmit={handleSubmit} className='space-y-4'>

            <div>
                <label htmlFor="" className='text-xs text-slate-400'>Full Name</label>
                <div className='relative mt-1'>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}

                        placeholder='Johne Doe'
                        className='w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500'
                    />
                    {errors.name && <p className='text-sm text-red-400'>{errors.name}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="" className='text-xs text-slate-400'>Email Address</label>
                <div className='relative mt-1'>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='name@example.com'
                        className='w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500'
                    />
                    {errors.email && <p className='text-sm text-red-400'>{errors.email}</p>}
                </div>
            </div>

            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label htmlFor="" className='text-xs text-slate-400'>Password</label>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder='••••••••'
                            className='w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500'
                        />
                        {errors.password && <p className='text-sm text-red-400'>{errors.password}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='text-xs text-slate-400'>Confirm</label>
                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder='••••••••'
                            className='w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500'
                        />
                        {errors.confirmPassword && <p className='text-sm text-red-400'>{errors.confirmPassword}</p>}
                    </div>
                </div>
            </div>


            <button className='w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-sm font-semibold'>
                Create Account <FaArrowRight size={16} />
            </button>


        </form>
    )
}
