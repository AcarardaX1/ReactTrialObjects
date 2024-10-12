import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // const [firstName, setFirstName] = useState('Arda');
  // const [lastName, setLastName] = useState('Acar');

  // const handleChange = () => {
  //   debugger;
  //   setFirstName("Alper Tuna")
  // }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      console.log("Number has to be larger than 0")
    }

  }

  console.log("Components has been rendered")

  return (
    <div>
      <div>{count}</div>
      <div><button onClick={increment}>Increment</button></div>
      <div><button onClick={decrement}>Decrement</button></div>

    </div>
  )
}

export default App
