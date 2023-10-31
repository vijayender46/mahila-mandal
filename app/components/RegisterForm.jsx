'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Link from 'next/link'


export default function RegisterForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!name || !email || !password){
            setError('Please Fill the required Fields');
            return;
        }

        try {
            const resUserExists = await fetch('/api/userExists', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    email
                })
            })

            const {user} = await resUserExists.json();
            if(user) {
                setError('User already exists');
                return;
            }

            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            if(res.ok){
                const form = e.target;
                form.reset();
                router.push('/');
            } else {
                console.log('User registration failed!')
            }
            
        } catch (error) {
            console.log('error during registration!', error)
        }
    }


  return (
    <div className="bg-white w-[320px] my-20 mx-auto shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Name
                </label>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="name" 
                    type="text" 
                    placeholder="Username" />
            </div>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Email
                </label>
                <input onChange={(e) => setEmail(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                id="email" type="text" placeholder="Email" />
            </div>
            <div className="mb-2">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Choose Password
                </label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                    id="password" type="password" placeholder="******************" />
            </div>
            {/* <div className="mb-2">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Confirm Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
            </div> */}
            
            <div className="flex items-center justify-between mb-6">
            <button 
                className="bg-navy hover:bg-light-orange text-white font-bold py-2 px-4 rounded" 
                type="submit">
                Register
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Forgot Password?
            </a>
            </div>
            {error && (
                <p className='bg-[#f00] px-4 py-2 text-white text-[12px] rounded'>{error}</p>
            )}
            
            <div className="">
                <p className="text-red text-xs italic">Already have account? 
                    <Link href='/pages/login'><strong> Login</strong></Link>
                </p>
            </div>
            </form>
        </div>
  )
}
