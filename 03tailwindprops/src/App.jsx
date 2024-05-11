import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  // letObj = {
  //   username: "hitesh",
  //   age: 21
  // }
   let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-5'>Tailwind test</h1>
    


     <Card  username = "chaiaurcode" btnText= ""/>
     <Card username = "Hitesh"  btnText= " click me"/>
     
    </>
  )
}

export default App
