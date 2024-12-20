import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const {user, logout} = useAuth()
  return (
    <div className='flex items-center justify-between h-12 px-5 text-white bg-green-800'>
        <p >Welcome {user.name}</p>
        <button className='px-4 py-1 bg-yellow-400 hover:bg-green-600' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar