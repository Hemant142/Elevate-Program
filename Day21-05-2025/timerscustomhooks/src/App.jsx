import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/StopWatch'
import Debouncing from './components/Debouncing'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {/* <StopWatch /> */}
    <Debouncing/>
  </div>
  )
}

export default App
