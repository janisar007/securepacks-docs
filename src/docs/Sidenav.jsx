import React, { useContext, useState } from 'react'
import photo from '../155510056.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../themecontext';
const Sidenav = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const data=['java','node.js','.Net core','go','web servers','python','php','ruby','builder','Configure Paketo Buildpacks','Enable Application Monitoring','Create a Paketo Buildpack','Access the SBOM','Create a Custom Stack']
  return (
    <div className=''>
        <img src={photo} alt="" className='w-20 flex mx-auto mb-4' />

        <div className='relative overflow-hidden w-full px-4 h-full'>
        <div className='relative inset-0 overflow-scroll'>
        <div className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 mb-3 rounded-md text-left`}>
            <Link to='/docs' className='block'><span >Getting Started</span></Link>
            </div>
            <div 
      className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left mb-3`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <Link to='/docs' className=' flex justify-between'>
        <span>How To</span>
        {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Link>
     
    </div>
    {isOpen && (
        <div className="flex flex-col gap-3">
            {data.map((item, index) => (
                <Link to='/docs' key={index} className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left`}>
                {item}
                </Link>
            ))}
        </div>
      )}
          
        </div>
        </div>
    </div>
  )
}

export default Sidenav