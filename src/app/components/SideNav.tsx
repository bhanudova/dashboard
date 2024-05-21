import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <div className='p-4'>
      <ul>
        <li><Link href='/dashboard'>Home</Link></li>
        <li><Link href='/dashboard/customers'>Customer</Link></li>
        <li><Link href='/dashboard/invoices'>Invoice</Link></li>
      </ul>
    </div>
  )
}

export default SideNav