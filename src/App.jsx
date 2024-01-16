import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcounter] = useState(0);
  // let count = 5;
  function add() {
    setcounter((p) => {
      return p < 20 ? p + 1 : p;
    });
  }
  function subtract() {
    setcounter((p) => {
      return p > 0 ? p - 1 : p;
    });
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter : {count}</h2>
      <button onClick={add}>Increase the Value{count}</button>
      <br />
      <br />
      <button onClick={subtract}>Decrease the Value{count}</button>
    </>
  )
}

export default App
