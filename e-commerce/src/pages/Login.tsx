import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { auth } from "../services/firebaseConfig";

import Logo from '../img/logo.png'
import Loading from "../components/Loading";

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        window.location.href = 'http://localhost:5173/'
    }


    return (
        <>
            <div className="container mx-auto grid grid-cols-12 ">
                <div className='col-span-6 h-screen bg-[#FFF3E3] grid flex-col justify-center items-start grid-cols-12'>
                    <div className=' h-screen sm:col-span-6 ps-10 flex col-span-6 flex-col justify-center items-start'>
                        <span className='text-[#B88E2F] font-bold text-3xl sm:text-xl m3-2'>Login</span>
                        <span className='text-gray-950 font-bold text-6xl sm:text-2xl'>Furniro.</span>

                    </div>

                    <div className="col-span-6 sm:col-span-6 h-screen flex flex-col justify-center items-start">
                        <img src={Logo} alt="Logo" className='w-12' />

                    </div>

                </div>

                <div className='col-span-6 flex justify-center items-center '>
                    <div className='w-[400px] h-[500px] bg-[#FFF3E3] rounded-sm flex flex-col px-6 justify-center items-center '>


                        <span className='text-zinc-700 font-thin text-2xl mb-10'>Seja bem vindo!</span>

                        <form>

                            <label htmlFor="email" className='my-3 text-sm font-bold text-[#B88E2F]'>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="exemplo@company.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-white border border-[#B88E2F] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
                            />

                            <label htmlFor="password" className='my-3 text-sm font-bold text-[#B88E2F]'>Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="•••••••••"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-white border border-[#B88E2F] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            />

                            {/* <button className="" onClick={handleSignIn}>Entrar</button> */}
                            <button onClick={() => signInWithEmailAndPassword(email, password)}>Entrar</button>

                        </form>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Login