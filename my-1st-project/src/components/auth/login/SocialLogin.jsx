import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-cneter my-6 text-slate-500 text-xs">
                <div className="flex-1 h-px bg-slate-700 "> </div>
                <span className="px-3">OR CONTINUE WITH</span>
                <div className="flex-1 h-px bg-slate-700 "> </div>
            </div>

            <div className="flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2  py-2 rounded-md borded border-slate-700 hover:bg-slate-900 transition text-sm">
                    <FcGoogle size={18} />Google
                </button>
                <button className="flex flex-1 items-center justify-center gap-2  py-2 rounded-md borded border-slate-700 hover:bg-slate-900 transition text-sm">
                    <FaApple size={18} />Apple
                </button>
            </div>

            <p className="text-center text-sm text-slate-400 mt-6">
                Don't have an account?{" "}
                <span onClick={() => {
                    navigate('/register')
                }} className="text-sky-400 cursor-pointer hover:underline">
                    Create Account
                </span>

            </p>

        </>
    )
}

export default SocialLogin;