import { useEffect, useState } from "react"

export default function FormBirthDate({calculate}) {
    const [day, setDay] = useState(undefined);
    const [month, setMonth] = useState(undefined);
    const [year, setYear] = useState(undefined);
    const [validDay, setValidDay] = useState(true);
    const [validMonth, setValidMonth] = useState(true);
    const [validYear, setValidYear] = useState(true);
    const [requiredDay, setRequiredDay] = useState(false);
    const [requiredMonth, setRequiredMonth] = useState(false);
    const [requiredYear, setRequiredYear] = useState(false);
    const [daysInMonth, setDaysInMonth] = useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);

    useEffect(() => {
        
        if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
            setDaysInMonth(prevDaysInMonth => {
                const updatedDaysInMonth = [...prevDaysInMonth]; 
                updatedDaysInMonth[1] = 29;
                return updatedDaysInMonth;
              });
        } else {
            setDaysInMonth(prevDaysInMonth => {
                const updatedDaysInMonth = [...prevDaysInMonth]; 
                updatedDaysInMonth[1] = 28;
                return updatedDaysInMonth;
        });
          };

        
    }, [year]);

    useEffect(() => {
        if (day > daysInMonth[month-1]) {
            setValidDay(false);
        } else {
            setValidDay(true);
        };
    }, [daysInMonth]);

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
        };
                
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        if (day === undefined && month === undefined && year === undefined) {
            alert('Please fill the birth date format inputs');
            return;
        };
        if (day === undefined){
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
        };

        if (validDay && validMonth && validYear){
            calculate(year, month, day, daysInMonth);
        };
    }

    return (
        <form 
        className="BDForm"
        onSubmit={handleSubmit}>
            <section className="labelRow">
                <label htmlFor="day">Day</label>
                <label htmlFor="month">Month</label>
                <label htmlFor="year">Year</label>
            </section>
            <section className="inputRow">
                <input type="number" className={`${validDay ? "validDay" : "invalidDay"} ${requiredDay ? "requiredDay" : "day" }`} name="day" onChange={handleDayChange}/>
                <input type="number" className={`${validMonth ? "validMonth" : "invalidMonth"} ${requiredMonth ? "requiredMonth" : "month" }`} name="month" onChange={handleMonthChange}/>
                <input type="number" className={`${validYear ? "validYear" : "invalidYear"} ${requiredYear ? "requiredYear" : "year"}`} name="year" onChange={handleYearChange}/>
                <input type="submit"></input>
            </section>
            <section>
                {validDay ? (<div></div>) : (<div>Must be a valid day</div>)}
                {validMonth ? (<div></div>) : (<div>Must be a valid month</div>)}
                {validYear ? (<div></div>) : (<div>Must be in the past</div>)}
            </section>
        </form>
    );
};





