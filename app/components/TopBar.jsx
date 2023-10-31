import React from 'react'
import Link from 'next/link'

export default function TopBar() {
  return (
    <div className='mm-header-top flex justify-between w-full bg-dark-100 text-light items-center'>
        <div className='mm-header-info justify-items-center content-center'>
            <Link className='p-3' href="/">needhelp@company.com</Link>
            <Link className='p-3' href="/">+ 1 (307) 776-0608</Link>
        </div>
        <ul className='mm-social-icons flex'>
            <li className='p-3'><Link href=''>facebook</Link></li>
            <li className='p-3'><Link href=''>instagram</Link></li>
            <li className='p-3'><Link href=''>youtube</Link></li>
        </ul>
    </div>
  )
}
