import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="p-5 bg-blue-500">
      <Link href="/" className="px-2 py-1 text-2xl font-bold text-white">Home</Link>
    </div>
  )
}

export default Header