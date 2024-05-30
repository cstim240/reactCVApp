
function WorkExpForm(){
    return (
        <div>
            <form>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company"></input>
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position"></input>
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" id="startDate" name="startDate"></input>
                <label htmlFor="endDate">End Date:</label>
                <input type="text" id="endDate" name="endDate"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default WorkExpForm;