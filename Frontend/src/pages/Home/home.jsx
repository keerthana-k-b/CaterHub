import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto">
        <nav className="bg-slate-200 p-6 rounded-sm flex justify-between">
            <div>
                <img src="/vite.svg"/>
            </div>
            <div>
              <ul className="flex justify-between gap-4">
                <li>Home</li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/signup"}>Signup</Link></li>
              </ul>
          </div> 
        </nav>
            <div>
                <img src="/img1.jpg" className='h-screen w-full object-cover'/>
            </div>
            </div>
  )
}

export default Home