
import Profile from './Components/Professional-profile/profile'
import './App.css'
import Projects from './Components/Projects-section/Projects'
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";


function App() {


  return (
    <>
    <div className='min-h-screen bg-primary pb-10'>
            <Navbar />
            <Hero/>
            <Profile/>
            <Projects/>
    </div>
    </>
  )
}

export default App

