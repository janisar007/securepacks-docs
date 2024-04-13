import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './docs/Sidenav'; 
import Home from './home';
import Getting from './docs/Gettingstarted';
import { ThemeContext } from './themecontext';
import { useLocation } from 'react-router-dom';
import Java from './docs/Java';
const Main = () => {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className={`flex flex-auto min-w-0 ${pathname !== "/" ? 'flex-row' : ''}`}>
      {pathname !== "/" && (
        <div className={`sticky top-0 h-[100vh] w-[240px] min-w-[240px] border-r ${theme==='dark'?' border-gray-500':'border-gray-200 '}`}>
          <Sidenav/>
        </div>
      )}
      <div className={`flex flex-col flex-auto min-h-screen min-w-0 relative w-full border-b ${theme==='dark'?' border-gray-500':'border-gray-200 '} `}>
        {pathname !== "/" && <Navbar/>}
        <div className='h-full flex flex-auto flex-col justify-between'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Getting-Started" element={<Getting />} />
            <Route path="/java" element={<Java/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;