import { useState } from 'react'
import logo from '../assets/logo3.png'



export default function Login() {

    const [email,setEmail] = useState()
    return (
        <>
            <div className="bg-[#f7f7f7] flex min-h-fulls flex-1 flex-col justify-center px-6 py-12 lg:px-8  h-svh" >
                <div className="sm:mx-auto px-16 mt-5 p-10 rounded shadow-lg shadow-slate-200 bg-white">

                <div className="sm:mx-auto sm:w- sm:max-w-md">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto w-auto"
                    />
                    <h2 className="mt-6 text-center text-2xl/9 font-normal tracking-tight text-gray-900 text-black">
                        Simplify slots. Start with Booko!
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    
                    <form action="#" method="POST" className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    onChange={(e)=>setEmail()}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                    Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm/6"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                        <div className="text-sm mt-3">
                                    <a href="/" className="font-semibold text-gray-600 hover:text-gray-500 text-black">
                                        Forgot password?
                                    </a>
                                </div>
                                </div>
                        </div>
                        

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-7 text-center text-sm/6 text-black">
                        Not a member?{' '}
                        <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500 text-black ">
                            Join hands with Booko!
                        </a>
                    </p>
                </div>
                </div>
            </div>
        </>
    )
}
