import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import HeroImage from "../assets/heroImageSmall.png"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'> 
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-start py-20 h-full px-4 md:items-center md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-white text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer.</h2>
                <p className='text-gray-500 font-semibold py-4 max-w-md'>Hi there! I'm a full-stack developer who loves working with React, Tailwind, Java, and MySQL. I specialize in crafting seamless user experiences and robust backend solutions. Let's build something amazing together!</p>
                <div>
                    <button className='group text-white md:text-xl font-semibold px-4 py-2 md:px-6 md:py-3 w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-400 cursor-pointer to-blue-500 hover:scale-105 duration-300'>
                        Portfolio<span className='mx-2 group-hover:rotate-90 duration-300'><FaArrowCircleRight color='white'/></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="myImage" className='drop-shadow-[0_30px_30px_rgba(255,255,255,0.3)] rounded-2xl mx-auto mt-0 w-1/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home