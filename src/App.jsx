import { useState } from 'react'
import './App.css'
import FormBirthDate from './components/FormBirthDate'

function App() {
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
  const [requiredDay, setRequiredDay] = useState(false);
  const [requiredMonth, setRequiredMonth] = useState(false);
  const [requiredYear, setRequiredYear] = useState(false);


  
  function calculateRealAge(year, month, day, monthArr) {
    if (day === undefined) {
      setRequiredDay(true);
      return;
    };
    if (month === undefined) {
      setRequiredMonth(true);
      return;
    };
    if (year === undefined) {
      setRequiredYear(true);
      return;
    }
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
      <FormBirthDate calculate={calculateRealAge} 
      requiredDay={requiredDay} 
      requiredMonth={requiredMonth} 
      requiredYear={requiredYear}/>
      <h1>{days} days, {months} months and {years} years</h1>
    </main>
  )
}

export default App
