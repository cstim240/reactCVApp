//add state and props to the GeneralInfoForm component so that it can be used in the main.jsx file.
function GeneralInfoForm() {
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"></input>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"></input>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
    
}

export default GeneralInfoForm;


