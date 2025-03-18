import { useState } from 'react'
import './App.css'
import { Featured } from './components/Featured'
import { Search } from './components/Search'
import { Categories } from './components/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Travengers Online Store</h1>
      <Featured />
      <Search />
      <Categories />
    </>
  )
}

export default App
