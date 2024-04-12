import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import { ThemeProvider } from './themecontext'
import Docs from './docs/index'
import Home from './home/index'
import Getting from './docs/Gettingstarted'
import Sidenav from './docs/Sidenav'

function App() {

  return (
    <>

    
  
     <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/Getting Started" element={<>
        
        <Getting /></>} />
  

    </Routes>
   
    </>
  )
}

export default App
