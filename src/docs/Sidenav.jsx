import React, { useContext, useState } from 'react'
import photo from '../155510056.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../themecontext';
const Sidenav = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [concepts, setConcepts] = useState(false);
    const data=['java','node.js','.Net core','go','web servers','python','php','ruby','builder','Configure Paketo Buildpacks','Enable Application Monitoring','Create a Paketo Buildpack','Access the SBOM','Create a Custom Stack']
    const conceptData=["Buildpacks","Builders","Stacks","Software Bill of Materials (SBOM)"]
  return (
    <div className='flex flex-col h-screen'>
    <a href="/">
        <img src={photo} alt="" className='w-20 flex mx-auto mb-4'  />
        </a>

        <div className='relative overflow-hidden w-full px-4 h-full'>
        <div className='absolute inset-0 overflow-scroll px-4' style={{scrollbarWidth:'none'}}>
        <div className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 mb-3 rounded-md text-left`}>
            <Link to='/Getting-Started' className='block'><span >Getting Started</span></Link>
            </div>
            <div className={`${theme === 'dark' ? 'text-white bg-[#272A54]' : 'text-black bg-[#E5DFFB]'} px-6 py-2 mb-3 rounded-md text-left`}>
          <Link to='/How-it-Works' className='block'><span>How it Works</span></Link>
        </div>
            <div 
      className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left mb-3`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <Link to='' className=' flex justify-between'>
        <span>Language Support</span>
        {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Link>
     
    </div>
    {isOpen && (
        <div className="flex flex-col gap-3">
            {data.map((item, index) => (
                <Link to={`/${item}`} key={index} className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left capitalize`}>
                {item}
                </Link>
            ))}
        </div>
      )}
            <div 
      className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left mb-3 mt-3`} 
      onClick={() => setConcepts(!concepts)}
    >
      <Link to='' className=' flex justify-between'>
        <span>Concepts</span>
        {concepts ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Link>
     
    </div>
    
    
    {concepts && (
        <div className="flex flex-col gap-3">
            {conceptData.map((item, index) => (
                <Link to='/docs' key={index} className={`${theme==='dark'?'text-white  bg-[#272A54]':'text-black bg-[#E5DFFB]'} px-6 py-2 rounded-md text-left capitalize`}>
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