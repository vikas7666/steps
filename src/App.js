import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let arr = useState(1)  
  // console.log(arr);
  // yahaa pe hum dekh sakate hai, arr return karataa hai at 0 position 1 jo ki hum logo ne useState(1)
  // pass kiya hai and 2nd funtio retur karata hai jise humkahi bhi use kar sakate hai
  // but by using destruting method we an use 2 thing in diffrent diffrent variabel 
  /* 
    0: 1
    1: ƒ ()
  */
  const [step, stepCount] = useState(1)
  // const step = 3;

  // using Object
  const [name, updateName] = useState({ name: 'vikas' });
  const [isOpen, setIsOpen] = useState(true);

  // function declaration
  function handlePrevious() {
    // if (step > 1) stepCount(step - 1)/
    if(step > 1) stepCount((s) => s -1 ) // step are updatig usig callback funtion 
  }
  function handleNext() {
    // update state 
    if (step < 3) stepCount(step + 1)
    updateName({ name: 'fred' })
    stepCount((s) => s +1)
    stepCount((s) => s +1)
  }
  return (
  <>
    {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button> */}
    <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>  
    {isOpen && ( 
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">Step {step}: {messages[step - 1]}</p>
      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2' }}
          onClick={handlePrevious} // click event 
        >Previous</button>
        <button style={{ backgroundColor: '#7950f2' }} onClick={handleNext}>Next</button>
      </div>
    </div>
    )}
  </>)
  
}