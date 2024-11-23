import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import arrow from '../images/arrow_icon.png'

export default function HomePage() {
  return (
    <div className="flex flex-col min-w-[900px] max-h-[700px] bg-white items-center justify-center shadow-lg rounded-[10px]">
      <img src={logo} alt="logo" className="w-[163px] h-[156px] mt-10"/>
      <h1 className='text-[40px]'>Welcome to the Trivia Challenge!</h1>
      <p className="text-[22px]">You will be presented with 10 True or False questions.</p>
      <div className='w-[523px] h-[89px] bg-[#2AA2DE] flex flex-col items-center justify-center mt-10'>
        <p className='text-[50px] text-white'>Can you score 100%?</p>
      </div>
      <div className='w-[792px] h-[1px] bg-[#D3D3D3] mt-[150px]'></div>
      <div className="flex flex-row items-center">
        <button className='flex flex-row items-center p-5'>
          <Link to="quiz" className='text-[30px] mr-3'>BEGIN</Link>
          <img src={arrow} alt="arrow" className="w-[40px]"/>
        </button>
        
      </div>
    </div>
  )
}