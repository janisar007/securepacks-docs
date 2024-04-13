import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { ThemeContext } from '../themecontext';
import Sidenav from './Sidenav';
import Getting from './Gettingstarted';

const Docs = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (<>  <Getting/>
            
    </>

  )
}

export default Docs