import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Countdowntimer'
import CountdownTimer from './Countdowntimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownTimer/>
    </>
  )
}

export default App
