import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]
  return (
    <div className='flex justify-between md:justify-around items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='font-signature text-5xl ml-2 text-gray-200'>Aditya</h1>
        </div>
        
        <ul className='hidden md:flex'>
            {links.map(({id , link}) => (
                <li key={id} className='px-4 capitalize cursor-pointer font-bold text-gray-400 hover:scale-105 duration-200 hover:text-gray-200'>{link}</li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col gap-3 rounded-lg justify-center items-center absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b from-black to-gray-800 text-gray-400'>
            {links.map(({id , link}) => (
                <li key={id} className='px-4 capitalize text-xl cursor-pointer font-bold text-gray-400 hover:scale-105 duration-200 hover:text-gray-200'>{link}</li>
            ))}
        </ul>
        )}
        
    </div>
  )
}

export default NavBar;