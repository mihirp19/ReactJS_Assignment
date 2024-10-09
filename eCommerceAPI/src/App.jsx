import { useState } from 'react'
import './App.css'
import { APIfilter } from './components/APIfilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <APIfilter />
    </>
  )
}

export default App
