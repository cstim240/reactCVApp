
import { useState } from 'react';
import PropTypes from 'prop-types';

function InputForm({onFormSubmit}){
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        let inputValue = event.target.value;
        setName(inputValue);
        onFormSubmit({name: inputValue});
    }

    const handleSubmit = (event) => {
        event.preventDefault();//prevents the default behavior of the form
        onFormSubmit({name});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange}/>
                </label> 
                <input type="submit" value="Submit" />
            </form>
          
        </div>
    )
}

InputForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}
//The InputForm component is a functional component that takes a prop called onFormSubmit.
//propTypes is a property of the InputForm function that is used to define 
//the type of the props that the component expects.
//In this case, the onFormSubmit prop is expected to be a function and is required.

export default InputForm;
/*the e => setName(e.target.value) is a function that takes 
an event object and sets the name state to the value of the input field.
This is a common React pattern known as controlled components.
With controlled components, the state of the form data is always kept in React state
and is updated in real-time as the user types.
*/