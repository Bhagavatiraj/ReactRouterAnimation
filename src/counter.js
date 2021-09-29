import { useState } from 'react';
import './counter.css'

function ButtonIncrement(props) {
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     Increment By 1
     </button>
   )
}

function ButtonDecrement(props) {
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    Decrement By 1
    </button>
  )
}

function Display(props) {
  return (
    <label style={{ marginLeft: '.100rem'}} >{props.message}</label>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=-10) {
    decrementCounter = () => setCounter(1);
  }

  return (

    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  );
}

export default Counter;