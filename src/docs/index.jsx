import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { ThemeContext } from '../themecontext';
import Sidenav from './Sidenav';
import Getting from './Gettingstarted';

const Docs = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (<>    <div className='flex flex-auto min-w-0'>
        <div className={`sticky top-0 h-[100vh] w-[240px] min-w-[240px] border-r ${theme==='dark'?' border-gray-500':'border-gray-200 '}`}>
            <Sidenav/>
        </div>
        <div className={`flex flex-col flex-auto min-h-screen min-w-0 relative w-full border-b ${theme==='dark'?' border-gray-500':'border-gray-200 '} `}>
            <Navbar/>
            <div className='h-full flex flex-auto flex-col justify-between'><Getting/>
            </div>
        </div>
    </div>

    </>

  )
}

export default Docs