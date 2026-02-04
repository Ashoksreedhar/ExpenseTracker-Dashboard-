import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from 'yup'

const schema = yup.object({
    email: yup
        .string()
        .email("Invali email ")
        .required("email is required"),

    password: yup
        .string()
        .min(3, "password must be at least 3 character")
        .required("password is required")
});

const LoginForm = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })

    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(form, { abortEarly: false });

            const user = JSON.parse(localStorage.getItem("user"))

            if (!user) {
                alert("No account fond.Please signup");
                navigate("/register")
                return;
            }


            if (form.email === user.email && form.password === user.password) {
                localStorage.setItem("isLoggedIn", "true");
                navigate("/dashbord");
            } else {
                alert("Invalid email or password!");
            }


        } catch (err) {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    }



    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="text-sm text-slate-300" htmlFor="">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full mt-2 px-4 py-2 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            <div className="mb-2">
                <div className="flex justify-between text-sm text-slate-300">
                    <label htmlFor="">Password</label>
                    <button className="text-sky-400 hover:underline">Forgot Password?</button>
                </div>

                <div className="relative mt-2">
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="...."
                        className="w-full px-4 py-2 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    {errors.password && (
                        <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                    )}
                </div>
            </div>

            <button className="w-full mt-5 py-2.5 rounded-md bg-sky-500 hover:bg-sky-600 transition font-medium cursor-pointe">
                Sign In
            </button>
        </form>


    )
}

export default LoginForm;