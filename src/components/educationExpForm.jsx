
function EducationalExpForm(){
    return (
        <div>
            <form>
                <label htmlFor="school">School:</label>
                <input type="text" id="school" name="school"></input>
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" name="degree"></input>
                <label htmlFor="graduationDate">Graduation Date:</label>
                <input type="text" id="graduationDate" name="graduationDate"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default EducationalExpForm;