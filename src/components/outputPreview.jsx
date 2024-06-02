
import PropTypes from 'prop-types';

function OutputPreview({generalInfoData, educationData}) {
    return (
        <div className="outputLayout">
            <div className="generalOutput">
                <p id="nameHeader">{generalInfoData.name}</p>
                <div className="emailNnumber">
                    <p>{generalInfoData.email}</p>
                    <p>{generalInfoData.phone}</p> 
                    <p>{generalInfoData.location}</p>
                </div>
                
            </div>
            

            <div>
                <p>Education</p>
                {educationData.map((education, index) => (
                    <div key={index}>
                        <p>School: {education.school}</p>
                        <p>Degree: {education.degree}</p>
                        <p>Graduation Date: {education.graduationDate}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

OutputPreview.propTypes = {
    generalInfoData: PropTypes.object.isRequired,
    educationData: PropTypes.object.isRequired,
};


export default OutputPreview;