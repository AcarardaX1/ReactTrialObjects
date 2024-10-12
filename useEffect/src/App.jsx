import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  useEffect(() => { console.log("Always Works") })

  useEffect(() => { console.log("Run when the first render execute has been terminated") }, [])

  useEffect(() => { console.log("Runs when the first render elaborated and the First Name state value has changed") }, [firstName])

  useEffect(() => { console.log("Runs when the first render elaborated and the Last Name state value has changed") }, [lastName])

  useEffect(() => { console.log("Runs when the first render elaborated and the First Name, Last Name state values have changed") }, [firstName, lastName])

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Arda")}>Name Change</button>
      </div>
      <div>
        <button onClick={() => setLastName("Acar")}>Surname Change</button>
      </div>
    </div>
  )
}

export default App
