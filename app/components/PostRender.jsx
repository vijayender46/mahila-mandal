import React from 'react'
const userId = 'yourUserId'; // Replace with the actual user's ID

const posts = await Post.find({ user: userId }).exec();

export default function PostRender() {
  return (
    <div>PostRender</div>
  )
}
