import React from 'react'
import Navbar from '../Navbar'
import photo from  '../155510056.png'
import './style.css'


const Home = () => {
  return (
   <>
   
   <div className='flex flex-col flex-auto'>
   <div className='flex justify-between items-center pl-8'>
   <div className=' font-semibold '>Securepacks</div>
    <Navbar/>
   </div>
  
   <div className='flex justify-center items-center mt-[7%] px-20 ml-auto mr-auto gap-40'>
    <div className=''>
    <h1 className="font-bold text-3xl text-left mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Minimum Complexity</h1>
      <h1 className='font-bold text-3xl ml-40 text-left bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'> Maximum Security</h1>
      <p className='text-left'>Your custom app, meticulously tailored to your language preference, fortified with robust security measures, and primed for seamless deployment in the cloud.</p>
    </div>
    <div className=''>
      <img src={photo} alt="" className='w-full ' /></div>
   </div>
   <div className="flex justify-between mt-[4%] px-20">
  <img src="/public/img/golang-1 (1).svg" alt="Description 1" className='w-20' />
  <img src="/public/img/dot-net-core-7.svg" alt="Description 1" className='w-20' />
  <img src="/public/img/java-4 (2).svg" alt="Description 1" className='w-20' />
  <img src="/public/img/nodejs (1).svg" alt="Description 1" className='w-20' />
  <img src="/public/img/python-4.svg" alt="Description 1" className='w-20' />
 
</div>
</div>
   
   </>
  )
}

export default Home