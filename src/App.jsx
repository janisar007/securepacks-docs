import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import { ThemeProvider } from './themecontext'
import Docs from './docs/index'
import Home from './home/index'

function App() {

  return (
    <>

    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />

    </Routes>
   
    </>
  )
}

export default App
