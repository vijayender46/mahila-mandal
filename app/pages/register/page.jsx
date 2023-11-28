import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/authOptions';

export default async function register() {
  const session = await getServerSession(authOptions);
  if(session) redirect('/pages/dashboard');
  return (
    <RegisterForm />
  )
}
