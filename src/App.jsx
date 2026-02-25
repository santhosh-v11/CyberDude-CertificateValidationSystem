import { useState } from 'react'
import Profile from './Components/Professional-profile/profile'
import './App.css'
import Projects from './Components/Projects-section/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-primary py-10'>
          
            <Profile/>
            <Projects/>
    </div>
    </>
  )
}

export default App
