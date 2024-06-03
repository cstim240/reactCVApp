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
            

            <div className="educationLayout">
                {
                    (educationData.school1 !== undefined || educationData.school2 !== undefined ||
                    educationData.degree1 !== undefined || educationData.degree2 !== undefined 
                    || educationData.graduationDate1 !== undefined || educationData.graduationDate2 !== undefined
                    ) ? 
                    <h2>Education</h2>
                    : null
                }
                <div className="educationEntries">
                    <div>
                        <div className="educationSchoolDate">
                            <p className="educationSchool">{educationData.school1}</p>
                            <p className="educationDate">{educationData.graduationDate1}</p>
                        </div>
                        <p>{educationData.degree1}</p>
                    </div>
                    <div>
                        <div className="educationSchoolDate">
                            <p className="educationSchool">{educationData.school2}</p>
                            <p className="educationDate">{educationData.graduationDate2}</p>
                        </div>
                        <p>{educationData.degree2}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

OutputPreview.propTypes = {
    generalInfoData: PropTypes.object.isRequired,
    educationData: PropTypes.object.isRequired,
};



export default OutputPreview;