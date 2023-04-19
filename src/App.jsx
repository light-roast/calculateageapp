import { useState } from 'react'
import './App.css'
import FormBirthDate from './components/FormBirthDate'

function App() {
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
  


  
  function calculateRealAge(year, month, day, monthArr) {
    const actualDate = new Date();
    let m = month;
    let y = year;
    if (actualDate.getDay() < day) {
      setDays(day+monthArr[month]);
      m--;
    }

    if (actualDate.getMonth() < m) {
      setMonths(m+12);
      y--;
    }
  
    setYears(actualDate.getFullYear()-y);
     
  }
    

  return (
    <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{days} days, {months} months and {years} years</h1>
    </main>
  )
}

export default App
