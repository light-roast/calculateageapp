import { useState } from "react"

export default function FormBirthDate({calculate, requiredDay, requiredMonth, requiredYear}) {
    const [day, setDay] = useState(undefined);
    const [month, setMonth] = useState(undefined);
    const [year, setYear] = useState(undefined);
    const [validDay, setValidDay] = useState(true);
    const [validMonth, setValidMonth] = useState(true);
    const [validYear, setValidYear] = useState(true);
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function handleDayChange(e) {
        setValidDay(true);
        const day = e.target.value;
        setDay(day);
        if (day < 1 || day > 31) {
            setValidDay(false);
        };
        
    };

    function handleMonthChange(e) {
        setValidMonth(true);
        const month = e.target.value;
        setMonth(month);
        if (month < 1 || month > 12) {
            setValidMonth(false);
        };         
    };

    function handleYearChange(e) {
        setValidYear(true);        
        const year= e.target.value;
        setYear(year);
        const actualDate = new Date();    
        if (year < 0 || year > actualDate.getFullYear()) 
        {
            setValidYear(false);
          };
        if (month === undefined) {
            alert('You have to first fill in the month input space');
        }
        if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
            daysInMonth[1] = 29; // Update days in February for leap years
        }
        if (day > daysInMonth[month - 1]) {
            setValidDay(false);
        };   
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        if (validDay && validMonth && validYear){
            calculate()
        }
    }

    return (
        <form 
        className="BDForm"
        handleSubmit={handleSubmit}>
            <section className="labelRow">
                <label htmlFor="day">Day</label>
                <label htmlFor="month">Month</label>
                <label htmlFor="year">Year</label>
            </section>
            <section className="inputRow">
                <input type="number" className={validDay} id={requiredDay} name="day" onChange={handleDayChange} required/>
                <input type="number" className={validMonth} id={requiredMonth} name="month" onChange={handleMonthChange}/>
                <input type="number" className={validYear} id={requiredYear} name="year" onChange={handleYearChange}/>
            </section>
            <section>
                {validDay ? (<div></div>) : (<div>Must be a valid day</div>)}
                {validMonth ? (<div></div>) : (<div>Must be a valid month</div>)}
                {validYear ? (<div></div>) : (<div>Must be in the past</div>)}
            </section>
        </form>
    );
};