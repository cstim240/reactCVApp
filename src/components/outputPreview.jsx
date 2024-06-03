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
                {
                    (educationData.school1 !== '' || educationData.school2 !== '' ||
                    educationData.degree1 !== '' || educationData.degree2 !== '' ||
                    educationData.graduationDate1 !== '' || educationData.graduationDate2 !== ''
                    ) ? 
                    <h2>Education</h2> : null
                }
                <div>
                    <p>{educationData.school1}</p>
                    <p>{educationData.degree1}</p>
                    <p>{educationData.graduationDate1}</p>
                </div>
                <div>
                    <p>{educationData.school2}</p>
                    <p>{educationData.degree2}</p>
                    <p>{educationData.graduationDate2}</p>
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