//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
function App() {
  const[weight,Setweight]=useState(0);
  const[height,Setheight]=useState(0);
  const[BMI,SetBMI]=useState(' ');
  const[Message,SetMessage]=useState('');
  let calculateBMI =(event)=>{
    event.preventDefault();
    if(weight===0 || height===0){
      alert("Invalid")
    }
    else{
      let BMI = (weight/ (height / 100) **2)
      SetBMI(BMI.toFixed(2))
      if(BMI<18.5){
        SetMessage("you're under weight");
      }
      else if(BMI>=18.5 && BMI<=24.9){
      SetMessage("you're healthy ");
      }
      else if(BMI>=25 && BMI<=29.9){
        SetMessage("you're over weight");
      }
      else{
        SetMessage("You're obese");
      }
      }
      }
  return (
    <div className="App">
      <div className='Container'></div>
      <h1 className='center'>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div>
        <label>Weight(Kg)</label>
        <input value={weight} onChange={(e)=>Setweight(e.target.value)}/>
        </div>
        <div>
        <label>Height(CM)</label>
        <input value={height} onChange={(e)=>Setheight(e.target.value)}/>
        </div>
        <button className='button' type="submit">submit</button>
      </form>
    <div className='center'>
      <h3> Your BMI value is :{BMI}</h3>
      <p>{Message}</p>

    </div>
    </div>
  );
}

export default App;
