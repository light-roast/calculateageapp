import { useState } from 'react'
import './App.css'
import FormBirthDate from './components/FormBirthDate'
import RealAge from './components/RealAge';

function App() {
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
  


  
  function calculateRealAge(year, month, day, monthArr) {
    const actualDate = new Date();
    let d = actualDate.getDate();
    let m = actualDate.getMonth()+1;
    console.log(m);
    let y = actualDate.getFullYear();
      
    if (d < day) {
      m--;
      let actualDays = d + (monthArr[m+1]);
      let realDays = actualDays - day;
      setDays(realDays);
    } else {
      let realDays = d - day;
      setDays(realDays);
    }

    if (m < month) {
      y--;
      m += 12;
      let realMonths = m - month;
      setMonths(realMonths);
    } else {
      let realMonths = (m - month);
      setMonths(realMonths);
    }
  
    setYears(y-year);

     
  }
  if(days === 1 && months === 1 && years === 1) {
    return (
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} año, {months} mes y {days} día</h1>
      </main>
      );
  } else if (days === 1 && months === 1) {
    return (
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} mes y {days} día</h1>
      </main>
      );
  } else if (days === 1 && years === 1) {
    return (
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} meses y {days} día</h1>
      </main>
      );
  } else if (years === 1 && months === 1) {
    return (
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} año, {months} mese y {days} días</h1>
      </main>
      );
  } else if (months === 1) {
    return (
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} mes y {days} días</h1>
      </main>
      );
  } else if (days === 1) {
    return(
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} meses y {days} día </h1>
      </main>
    );
  } else if(days === '--' || months === '--' || years === '--') {
    return(
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} meses y {days} días </h1>
      </main>
    );
  } else if (years === 1) {
    return(
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} año, {months} mes y {days} día </h1>
      </main>
    );
  } else {
    return(
      <main>
      <FormBirthDate calculate={calculateRealAge}/>
      <h1>{years} años, {months} meses y {days} días </h1>
      </main>
    );
  };

}

export default App
