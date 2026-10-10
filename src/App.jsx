import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    if(!dob) return;
    const birthdate=new Date(dob);
    const today=new Date();
    let calculatedAge=today.getFullYear()-birthdate.getFullYear();
    const month=today.getMonth()-birthdate.getMonth()
    if(month<0 || (month===0 && (today.getDate()<birthdate.getDate())))
    {
          calculatedAge--;
    }
    setAge(calculatedAge);
  };


  return (
        <div>
          <h1>Age Calculator</h1>
          <input
          type="date"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          />
          <button onClick={calculateAge}>Calculate Age</button>
          {age !== null && <h2>Your Age is {age} years</h2>}
    </div>
  );
}

export default App;