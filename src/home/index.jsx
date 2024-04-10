import React from 'react'
import Navbar from '../Navbar'
import photo from  '../155510056.png'
import './style.css'


const Home = () => {
  return (
   <>
   
   <Navbar/>
   <div className='top-4 fixed left-8'>
   <div className=' font-semibold'>Securepacks</div>
   </div>
   <div className='flex justify-end  mt-20 mr-40 gap-52'>
    <div className='w-[60%] ml-[10%] text-center'>
    <h1 className="font-bold text-3xl mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Minimum Complexity</h1>
      <h1 className='font-bold text-3xl ml-60 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'> Maximum Security</h1>
      <p>Your custom app, meticulously tailored to your language preference, fortified with robust security measures, and primed for seamless deployment in the cloud.</p>
    </div>
    <div className=''>
      <img src={photo} alt="" className='w-72 ' /></div>
   </div>

   
   </>
  )
}

export default Home