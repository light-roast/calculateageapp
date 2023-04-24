import { useEffect, useState } from 'react';
import './App.css';
import FormBirthDate from './components/FormBirthDate';

function App() {
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
  const [daysNum, setDaysNum] = useState('days');
  const [monthsNum, setMonthsNum] = useState('months');
  const [yearsNum, setYearsNum] = useState('years');

  useEffect(()=> {
    if (days !== 1) {
      setDaysNum('days');
    } else {
      setDaysNum('day');
    };
  }, [days]);

  useEffect(()=> {
    if (months !== 1) {
      setMonthsNum('months');
    } else {
      setMonthsNum('month');
    };
  }, [months]);

  useEffect(()=> {
    if (years !== 1) {
      setYearsNum('years');
    } else {
      setYearsNum('year');
    };
  }, [years]);


  
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
  };

  return (
    <main>
    <FormBirthDate calculate={calculateRealAge}/>
    <h1><span className='output-year'>{years}</span> {yearsNum}</h1>
    <h1><span className='output-month'>{months}</span> {monthsNum}</h1>
    <h1><span className='output-day'>{days}</span> {daysNum}</h1>
    </main>
    );

 

}

export default App;
