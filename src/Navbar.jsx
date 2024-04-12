// Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './themecontext';
import { CiDark, CiLight } from "react-icons/ci";
import photo from './155510056.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>   
     <div className={`flex justify-end sticky gap-5 top-0 px-5 py-4 right-14 text-lg font-semibold border-b capitalize ${theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-white text-black'}`}>
     <Link to="/Getting Started">docs</Link>
        <span>community</span>
        <span>resource</span>
        <span>blog</span>
        <button onClick={toggleTheme} className='text-2xl'>
            {theme==='dark'?<CiDark/>:<CiLight/>}
        </button>
    </div>
    </>

  );
};

export default Navbar;