import { useState } from 'react'
import './App.css'

function App() {


  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);


  const findAverage = () => {

    debugger //F10 to step over the next debug(ger) throughout source inspect
    const totalSum = sum() / 2;
    printOut(totalSum);
  }

  const sum = () => {
    const sumTotal = vize1 + vize2;
    debugger //Instead of debugger we may also use consolelog() or any print statements other programming languages to measure whether the code works properly or to control until where the code is working.
    return sumTotal;

  }

  const printOut = (result) => {

    debugger //Recommend to use both methods
    console.log("Total Average: " + result);

  }


  return (

    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={findAverage} >Find Average</button>
      </div>
    </div>

  )
}

export default App
