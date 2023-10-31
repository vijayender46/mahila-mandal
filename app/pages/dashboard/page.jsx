import React from 'react'
import UserInfo from '../../components/UserInfo'
import Post from '../../components/Post'
import PostInfo from '../../components/PostInfo'

export default function Dashboard() {
  return (
    <>
      <UserInfo />

      <div className='container mx-auto my-12'>
        <div><Post /></div>
        <div><PostInfo /></div>        
      </div>
    </>
  )
}
