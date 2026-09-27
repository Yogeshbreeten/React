import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"yogesh",
  age:21
}
let newArr=[1,2,3];
  return (
    <>
      
        <h1 className='bg-green-800 bg-width-1000 p-4 rounded-xl'>Tailwind</h1>      
        <Card someObj={newArr}/>
        <Card/>
        <Card/>
  
                 
    </>
  )
}

export default App
