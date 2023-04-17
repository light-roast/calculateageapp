export default function FormBirthDate() {
    return (
        <form 
        className="BDForm">
            <label for="day">Day</label>
            <input type="number" name="day"></input>
            <label for="month">Month</label>
            <input type="number" name="month"></input>
            <label for="year">Year</label>
            <input type="number" name="year"></input>
        </form>
    )
};