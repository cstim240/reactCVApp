import { useState } from 'react';
import PropTypes from 'prop-types';

function EducationInfo({ onFormSubmit }){

    const [educationObjs, setEducationObj] = useState({
        school1: '',
        degree1: '',
        graduationDate1: '',
        school2: '',
        degree2: '',
        graduationDate2: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEducationObj(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(educationObjs);
    }

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleDivClick = () => {
        setIsFormVisible(true);
    }

    return (
        <div>

            {isFormVisible ? (
                <form onSubmit={handleSubmit} className="educationForm">
                    <label>
                        School:
                        <input type="text" name="school1" value={educationObjs.school1} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Degree:
                        <input type="text" name="degree1" value={educationObjs.degree1} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Graduation Date:
                        <input type="date" name="graduationDate1" value={educationObjs.graduationDate1} onChange={handleInputChange}/>
                    </label>

                    <label>
                        School:
                        <input type="text" name="school2" value={educationObjs.school2} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Degree:
                        <input type="text" name="degree2" value={educationObjs.degree2} onChange={handleInputChange}/>
                    </label>

                    <label>
                        Graduation Date:
                        <input type="date" name="graduationDate2" value={educationObjs.graduationDate2} onChange={handleInputChange}/>
                    </label>

                    <input className="button" type="submit" value="Submit" />
                    <input className="button" type="button" value="Close" onClick={() => setIsFormVisible(false)}/>


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