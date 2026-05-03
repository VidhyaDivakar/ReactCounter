import { useState } from 'react'

import './App.css'
import { AdvancedCounter } from './components/AdvancedCounters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AdvancedCounter/>
    </>
  )
}

export default App
