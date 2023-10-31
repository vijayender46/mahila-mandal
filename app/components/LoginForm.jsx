'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const router = useRouter();
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if(res.error) {
                setError('invalid credentials');
                return;
            }
            router.replace('/');
        } catch (error) {
            console.log(error);
        }
    };

  return (
        <div className="bg-white w-[320px] my-20 mx-auto shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Email
                </label>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    placeholder="Email" />
                </div>
                <div className="mb-2">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Password
                </label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                    id="password" 
                    type="password" 
                    placeholder="Password" />
                </div>
                <div className="flex items-center justify-between mb-6">
                <button className="bg-navy hover:bg-light-orange text-white font-bold py-2 px-4 rounded" type="submit">
                    Log In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
                </div>
                {error && (
                    <p className='p-2 my-2 bg-[#f00] text-white text-[11px]'>
                        {error}
                    </p>
                )}
                <div>
                <p className="text-red text-xs italic">Don't have account? 
                    <Link href='/pages/register'><strong> Register</strong></Link>.
                </p>
                </div>
            </form>
        </div>
  )
}
