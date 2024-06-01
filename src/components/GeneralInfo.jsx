
import { useState } from 'react';
import PropTypes from 'prop-types';

function GeneralInfo({onFormSubmit}){
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormFields(prevState => ({... prevState, [name]: value})); 
        //name is the key in the formFields object
        onFormSubmit(formFields);
    }

    const handleSubmit = (event) => {
        event.preventDefault();//prevents the default behavior of the form
        onFormSubmit(formFields);
    }

    const handleDivClick = () => {
        setIsFormVisible(true);
    }

    return (
        <div>

            {isFormVisible ? (
                <form onSubmit={handleSubmit} className="generalInfoForm">
                    <label>
                        Name:
                        <input type="text" name="name" value={formFields.name} onChange={handleInputChange}/>
                    </label> 
                    
                    <label>
                        Email:
                        <input type="text" name="email" value={formFields.email} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Phone:
                        <input type="text" name="phone" value={formFields.phone} onChange={handleInputChange}/>
                    </label>
                    <br/>

                    <input className="button" type="submit" value="Submit" />
                    <input className="button" type="button" value="Close" onClick={() => setIsFormVisible(false)}/>
                </form>
            ) : (
                <div onClick={handleDivClick} id="openGenInfoDiv">
                    General Information
                    </div>
            )}

        </div>
    )
}

GeneralInfo.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}
//The InputForm component is a functional component that takes a prop called onFormSubmit.
//propTypes is a property of the InputForm function that is used to define 
//the type of the props that the component expects.
//In this case, the onFormSubmit prop is expected to be a function and is required.

export default GeneralInfo;
/*the e => setName(e.target.value) is a function that takes 
an event object and sets the name state to the value of the input field.
This is a common React pattern known as controlled components.
With controlled components, the state of the form data is always kept in React state
and is updated in real-time as the user types.
*/