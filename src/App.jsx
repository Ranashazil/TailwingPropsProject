import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


let objct = {
  name: "mine",
  number: 4342
}

let yours = [2,3,4]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl m-6'>Tailwind story</h1>
     <Card name ={"shazishiza"} mine={objct} mine2= {yours} btntext = "khreedo"/>
     <Card name ={"meri Zindagi"} />
    </>
  )
}

export default App
