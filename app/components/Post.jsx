'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';



export default function Post() {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    
    console.log(title, content)

        const handleSubmit = async (e) => {
            e.preventDefault();
            if(!title) {
                setError('All fields required!')
                return;
            }

            try {
                const res = await fetch('/api/posts', {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify({
                        title, content
                    })
                });

                if(res.ok){
                    const form = e.target;
                    form.reset();
                    router.push('/');
                } else {
                    console.log('Error while posting article!')
                }

            } catch (error) {
                console.log('error during posting!', error)
            }
        }

  return (
        <>
            <h2>Post operations</h2>
            <form className='mt-8' onSubmit={handleSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} className='w-[500px] h-[40px] p-4 mb-4'  type='text' placeholder='add title' />  <br />
                <textarea onChange={(e) => setContent(e.target.value)} className='w-[500px] h-[140px] p-4 mb-4'  placeholder='Content' /> <br />
                <button className='w-[500px] h-[40px] text-white mb-4 bg-navy'  type='submit'>Submit</button> 
                {error && (
                    <p className='p-4 bg-orange my-4'>Error while submitting post!</p>
                )}
            </form>
        </>
  )
}
