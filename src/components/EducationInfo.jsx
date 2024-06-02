import { useState } from 'react';
import PropTypes from 'prop-types';

function EducationInfo({ onFormSubmit}){

    const [educationArray, setEducationArray] = useState([]);
    const [educationObj, setEducationObj] = useState({
        school: '',
        degree: '',
        graduationDate: '',
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleDivClick = () => {
        setIsFormVisible(true);
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEducationObj(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEducationObj = {
            school: event.target.elements.school.value,
            degree: event.target.elements.degree.value,
            graduationDate: event.target.elements.graduationDate.value,
        };
        setEducationArray(prevState => [...prevState, newEducationObj]);
        onFormSubmit(educationArray);
    }

    return (
        <div>

            {isFormVisible ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        School:
                        <input type="text" name="school" value={educationObj.school} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Degree:
                        <input type="text" name="degree" value={educationObj.degree} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Graduation Date:
                        <input type="date" name="graduationDate" value={educationObj.graduationDate} onChange={handleInputChange}/>
                    </label>
                </form>
            ) : (
                <div onClick={handleDivClick} id="openEduInfoDiv">
                    Education Information
                </div>
            )}

        </div>
    )

}

EducationInfo.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
};

export default EducationInfo;