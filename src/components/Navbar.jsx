import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar mb-12  py-6 shadow-lg bg-neutral-400'>
            <div>
              <ul className='flex text-lg  text-white justify-end mr-24 gap-8 '>
                <li className=' hover:bg-slate-300 absolute left-6'><Link to='/'>Home</Link></li>
                <li className='hover:bg-slate-300'><Link to='/users'>Users</Link></li>
                <li className='hover:bg-slate-300'><Link to='/new_user'>NewUsers</Link></li>
              </ul>
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar
