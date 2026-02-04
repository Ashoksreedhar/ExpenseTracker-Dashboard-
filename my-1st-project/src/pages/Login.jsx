import AuthFooter from "../components/auth/login/AuthFooter";
import AuthHeader from "../components/auth/login/AuthHeader";
import LoginForm from "../components/auth/login/LoginForm";
import SocialLogin from "../components/auth/login/SocialLogin";


const Login = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
            <div className="w-full max-w-md bg-slate-800/8- backfrop-blur-xl rounded-xl shadow-2xl p-8">
                <AuthHeader />
                <LoginForm />
                <SocialLogin />
            </div>
            <AuthFooter />
        </div>


    )
}

export default Login;