import { useEffect, useRef, useState } from "react"

export default function FormBirthDate({calculate}) {
    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
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
        const day = e.target.value;
        setDay(day);
        if (day < 1 || day > 31) {
            setValidDay(false);
        } else {
            setValidDay('true');
        };
        
    };

    function handleMonthChange(e) {
        const month = e.target.value;
        setMonth(month);
        if (month < 1 || month > 12) {
            setValidMonth(false);
        } else {
            setValidMonth(true);
        };         
    };

    function handleYearChange(e) {
        const year= e.target.value;
        setYear(year);
        const actualDate = new Date();    
        if (year < 0 || year > actualDate.getFullYear()) 
        {
            setValidYear(false);
          } else {
            setValidYear(true);
          };
        if (month === undefined || day === undefined || month === "" || day === "") {
            alert('You have to first fill in the month and day inputs');
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
            setValidDay(false);
            return;
        };
        if (month === undefined) {
            setRequiredMonth(true);
            setValidMonth(false);
            return;
        };
        if (year === undefined) {
            setRequiredYear(true);
            setValidYear(false);
            return;
        };

        if (validDay && validMonth && validYear && !requiredDay && !requiredMonth && !requiredYear){
            calculate(year, month, day, daysInMonth);
        };
        e.target.reset();
    };
    return (
        <form 
        className="BDForm"
        onSubmit={handleSubmit}>
            
                <label className="dayL" htmlFor="day">DAY</label>
                <label className="monthL" htmlFor="month">MONTH</label>
                <label className="yearL" htmlFor="year">YEAR</label>
            
            
                <input  ref={dayRef} type="number" className={`${validDay ? "validDay" : "invalidDay"} ${requiredDay ? "requiredDay" : "day" }`} id="iDay" name="day" onChange={handleDayChange} placeholder="DD"/>
                <input  ref={monthRef} type="number" className={`${validMonth ? "validMonth" : "invalidMonth"} ${requiredMonth ? "requiredMonth" : "month" }`} id="iMonth" name="month" onChange={handleMonthChange} placeholder="MM"/>
                <input  ref={yearRef} type="number" className={`${validYear ? "validYear" : "invalidYear"} ${requiredYear ? "requiredYear" : "year"}`} id="iYear" name="year" onChange={handleYearChange} placeholder="YYYY"/>
                <hr></hr>
            <button type="submit">
                <img src="../../assets/images/icon-arrow.svg" alt="Button Image" />
            </button>
            
        
                {validDay ? <div></div> : <div className="dayD">Must be a valid day</div>}
                {requiredDay ? <div className="dayD">This field is required</div> : <div></div> }
                {validMonth ? null : <div className="monthD">Must be a valid month</div>}
                {requiredMonth ? <div className="monthD">This field is required</div> : <div></div>}
                {validYear ? <div></div> : <div className="yearD">Must be in the past</div>}
                {requiredYear ? <div className="yearD">This field is required</div> : <div></div>}
            
        </form>
    );
};
