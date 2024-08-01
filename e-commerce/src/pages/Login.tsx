import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { auth } from "../services/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import Logo from '../img/logo.png';
import img1 from '../img/img1.png';
import Loading from "../components/Loading";
import { z } from 'zod';

const Login = () => {

    const loginSchema = z.object({
        email: z.string().email({ message: "Email inválido" }),
        password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return (
            <Loading />
        );
    }
    if (user) {
        dispatch(setUser(user));
        navigate('/');
    }

    const handleSignIn = () => {
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
            const formattedErrors: { email?: string; password?: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0] === "email") {
                    formattedErrors.email = err.message;
                } else if (err.path[0] === "password") {
                    formattedErrors.password = err.message;
                }
            });
            setErrors(formattedErrors);
        } else {
            setErrors({});
            signInWithEmailAndPassword(email, password);
        }
    };

    return (
        <>
            <div className="container mx-auto grid grid-cols-12 ">
                <div className='col-span-6 h-screen bg-gradient-to-r from-orange-100 to-stone-50 grid flex-col justify-center items-start grid-cols-12'>
                    <div className='h-screen sm:col-span-6 ps-10 flex col-span-6 flex-col justify-center items-start'>
                        <span className='text-[#B88E2F] font-bold text-3xl sm:text-xl m3-2'>Login</span>
                        <span className='text-gray-950 font-bold text-6xl sm:text-2xl'>Furniro.</span>
                    </div>

                    <div className="col-span-6 sm:col-span-6 h-screen flex flex-col justify-center items-start">
                        <img src={Logo} alt="Logo" className='w-12' />
                    </div>
                </div>

                <div className='col-span-6 flex justify-center items-center'
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='w-[400px] h-[500px] rounded-sm flex flex-col px-6 justify-center items-center glass'>
                        <span className='text-zinc-700 font-extralight text-2xl mb-10'>Seja bem vindo!</span>

                        <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                            <label htmlFor="email" className='my-3 text-sm font-bold text-[#B88E2F]'>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="exemplo@company.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className={`bg-white border ${errors.email ? 'border-red-500' : 'border-[#B88E2F]'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

                            <label htmlFor="password" className='my-3 text-sm font-bold text-[#B88E2F]'>Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="•••••••••"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className={`bg-white border ${errors.password ? 'border-red-500' : 'border-[#B88E2F]'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

                            <button
                                type="submit"
                                className="mt-2 border rounded-xl px-4 py-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white hover:border-white hover:duration-300"
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
