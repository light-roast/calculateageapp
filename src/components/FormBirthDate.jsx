export default function FormBirthDate() {
    return (
        <form 
        className="BDForm">
            <div className="labelRow">
                <label htmlFor="day">Day</label>
                <label htmlFor="month">Month</label>
                <label htmlFor="year">Year</label>
            </div>
            <div className="inputRow">
                <input type="number" name="day" />
                <input type="number" name="month" />
                <input type="number" name="year" />
            </div>
        </form>
    )
};