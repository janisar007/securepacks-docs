import React from 'react'
import Navbar from '../Navbar'
import photo from  '../155510056.png'
import './style.css'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate=useNavigate()
  return (
   <>
   
   <div className='flex flex-col flex-auto pb-40'>
   <div className='flex justify-between items-center pl-8'>
   <div className=' font-semibold '>Securepacks</div>
    <Navbar/>
   </div>
  
   <div className='flex justify-center items-center mt-[3%] px-20 ml-auto mr-auto gap-40'>
    <div className=''>
    <h1 className="font-bold text-3xl text-left mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">"Minimum Complexity</h1>
      <h1 className='font-bold text-3xl ml-40 text-left bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'> Maximum Security"</h1>
      <p className='text-left mt-6 text-gray-400'>Your custom app, meticulously tailored to your language preference, fortified with robust security measures, and primed for seamless deployment in the cloud.</p>
    </div>
    <div className=''>
      <img src={photo} alt="" className='w-full ' /></div>
   </div>
   <div className="flex justify-between flex-wrap gap-5 mt-[7%] px-20">
  <img src="/public/img/golang-1 (1).svg" alt="Description 1" className='w-20' />
  <img src="/public/img/dot-net-core-7.svg" alt="Description 1" className='w-20' />
  <img src="/public/img/java-4 (2).svg" alt="Description 1" className='w-20' />
  <img src="/public/img/nodejs.svg" alt="Description 1" className='w-32 mt-16' />
  <img src="/public/img/python-4.svg" alt="Description 1" className='w-20' />
 
</div>
<div className='flex justify-center mt-16'>
 
  <button onClick={()=>navigate('/Getting Started')} className='bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-full'>Get Started</button>
</div>
</div>
   
   </>
  )
}

export default Home