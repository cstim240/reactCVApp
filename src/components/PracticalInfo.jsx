import { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function PracticalInfo({ onFormSubmit }) {
    const [practicalExp, setPracticalExp] = useState({
        jobTitle1: 'Software Engineer',
        company1: 'Google',
        startDate1: '2020-06-01',
        endDate1: '2021-06-01',
        jobDescription1: 'I worked on the search engine team.',
        jobTitle2: 'Software Engineer',
        company2: 'Facebook',
        startDate2: '2021-06-01',
        endDate2: '2022-06-01',
        jobDescription2: 'I worked on the social media team.'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPracticalExp(prevState => {
            const updatedPracticalExp = { ...prevState, [name]: value };
            onFormSubmit(updatedPracticalExp);
            return updatedPracticalExp;
        });
    }

    const handleSubmit = (event) => {
        if (event) { event.preventDefault(); }
        onFormSubmit(practicalExp);
    }

    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleDivClick = () => {
        setIsFormVisible(true);
    }

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div>
            {isFormVisible ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Job Title:
                        <input type="text" name="jobTitle1" value={practicalExp.jobTitle1} onChange={handleInputChange} />
                    </label>

                    <label>
                        Company:
                        <input type="text" name="company1" value={practicalExp.company1} onChange={handleInputChange} />
                    </label>

                    <label>
                        Start Date:
                        <input type="date" name="startDate1" value={practicalExp.startDate1} onChange={handleInputChange} />
                    </label>

                    <label>
                        End Date:
                        <input type="date" name="endDate1" value={practicalExp.endDate1} onChange={handleInputChange} />
                    </label>

                    <label>
                        Job Description:
                        <input type="text" name="jobDescription1" value={practicalExp.jobDescription1} onChange={handleInputChange} />
                    </label>

                    <label>
                        Job Title:
                        <input type="text" name="jobTitle2" value={practicalExp.jobTitle2} onChange={handleInputChange} />
                    </label>


                    <label>
                        Company:
                        <input type="text" name="company2" value={practicalExp.company2} onChange={handleInputChange} />
                    </label>

                    <label>
                        Start Date:
                        <input type="date" name="startDate2" value={practicalExp.startDate2} onChange={handleInputChange} />
                    </label>

                    <label>
                        End Date:
                        <input type="date" name="endDate2" value={practicalExp.endDate2} onChange={handleInputChange} />
                    </label>

                    <label>
                        Job Description:
                        <input type="text" name="jobDescription2" value={practicalExp.jobDescription2} onChange={handleInputChange} />
                    </label>

                </form>
                ) : (
                    <div onClick={handleDivClick} id="openPracticalInfoDiv">
                        Practical Information
                    </div>
                )
            }
        </div>
    )
}

PracticalInfo.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}

export default PracticalInfo;