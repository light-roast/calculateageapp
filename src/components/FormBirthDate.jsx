import { useState } from "react"

export default function FormBirthDate({calculate}) {
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(1);
    const [validDay, setValidDay] = useState(true);
    const [validMonth, setValidMonth] = useState(true);
    const [validYear, setValidYear] = useState(true);

    function handleDayChange(e) {
        const day = e.target.value;
        setDay(day);
    };

    function handleMonthChange(e) {
        const month = e.target.value;
        setMonth(month);
    };

    function handleYearChange(e) {
        const year= e.target.value;
        setYear(year);
    };
    
    function handleSubmit(e) {
        e.preventDefault();

    }

    const actualDate = new Date();
    if (day < 1 || day > 31) {
        setValidDay(false);
    }; 
    if (month < 1 || month > 12) {
        setValidMonth(false);
    }; 
    if (year < 1 || year > actualDate.getFullYear()) 
    {
        setValidMonth(false)
      } 
       
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
          daysInMonth[1] = 29; // Update days in February for leap years
        }
        if (day > daysInMonth[month - 1]) {
          setValidMonth(false);
        }
      

    
    return (
        <form 
        className="BDForm"
        handleSubmit={handleSubmit}>
            <div className="labelRow">
                <label htmlFor="day">Day</label>
                <label htmlFor="month">Month</label>
                <label htmlFor="year">Year</label>
            </div>
            <div className="inputRow">
                <input type="number" name="day" onChange={handleDayChange} required/>
                <input type="number" name="month" onChange={handleMonthChange}/>
                <input type="number" name="year" onChange={handleYearChange}/>
                
            </div>
        </form>
    )
};