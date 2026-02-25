import { useState } from 'react'
import Profile from './Components/Professional-profile/profile'
import './App.css'
import Projects from './Components/Projects-section/Projects'
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-primary py-10'>
            <Navbar />
            <Hero/>
            <Profile/>
            <Projects/>
    </div>
    </>
  )
}

export default App

