import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn<FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/adityadhamale2326/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>GitHub<FaGithub size={30}/></>
            ),
            href: "https://github.com/adix2326"
        },
        {
            id: 3,
            child: (
                <>Mail< HiOutlineMail size={30}/></>
            ),
            href: "mailto: aditya1dhamale1@gmail.com"
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href: "https://drive.google.com/file/d/1SsqoBzCVbiquQIV6U46wT7ZvfrDTW1-L/view?usp=sharing",
            style: "rounded-br-md"
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed text-white'>
        <ul>
            {links.map(({id, child, href, style}) => (
                <li key={id} className={'flex flex-row justify-between items-center w-32 p-2 h-12 hover:rounded-md bg-gradient-to-r from-cyan-500 via-blue-400 cursor-pointer to-blue-500 ml-[-82px] hover:ml-[-5px] duration-300' + ' ' + style}>
                    <a className='flex justify-between items-center w-full font-bold text-[18px]' href={href} target='_blank'>
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks