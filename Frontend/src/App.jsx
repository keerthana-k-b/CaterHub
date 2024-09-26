
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'

function App() {
  

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />

       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
