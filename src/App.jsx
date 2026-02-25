
import Profile from './Components/Professional-profile/profile'
import './App.css'
import Projects from './Components/Projects-section/Projects'
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Footer from './Components/Footer';


function App() {


  return (
    <>
    <div className='min-h-screen bg-primary '>
            <Navbar />
            <Hero/>
            <Profile/>
            <Projects/>
            <Footer/>
    </div>
    </>
  )
}

export default App

