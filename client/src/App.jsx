import { useState } from 'react'
import './App.css'
import { Featured } from './components/Featured'
import { Search } from './components/Search'
import { Categories } from './components/Categories'
import { Home } from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
