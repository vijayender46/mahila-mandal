'use client';

import React from 'react'
import { useSession } from "next-auth/react";

const userId = 'yourUserId'; // Replace with the actual user's ID

const posts = await Post.find({ user: userId }).exec();

export default function UserInfo() {
  const { data: session } = useSession();
  console.log('session data', session);
  return (
    <div className='container mx-auto width-[600px]'> 
       
            <h3 className='py-2 px-4 bg-yellow-500 font-bold'>User Posts</h3> 
            <ul className='py-12'>
                {posts.map}
                <li><strong>Username: </strong>{session?.user?.name}</li>
                <li><strong>Email: </strong>{session?.user?.email}</li>
                
            </ul>
    </div>
  )
}
