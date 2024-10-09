import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let a = 15;
  const firstName = "Arda";
  let mark1 = 18;
  let mark2 = 30;

  let names = ["Arda", "Florian", "Elizabeth", "Julia", "Mark", "Benedetta", "Monica"]

  return (

    <div>
      <p>Value A : {a}</p>
      <p>Customer Name : {firstName}</p>
      <p>Average Grade : {(mark1 + mark2) / 2}</p>

      {
        (mark1 + mark2) / 2 >= 18 ? <p>You passed, Congrats</p> : <p>Failed, Do it better next</p>
      }

      {
        names.map((name, index) => (

          <div className='FirstClass to do'

            style={{
              backgroundColor: "orange",
              border: "lpx solid black"
            }} key={index}>{name}</div>
        ))
      }

    </div>
  )

}

export default App
