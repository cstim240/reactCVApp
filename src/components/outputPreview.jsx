import PropTypes from 'prop-types';


function OutputPreview({generalInfoData, educationData, practicalExp}) {
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

            <div className="practicalLayout">
                {
                    (practicalExp.company1 !== undefined || practicalExp.company2 !== undefined ||
                    practicalExp.startDate1 !== undefined || practicalExp.startDate2 !== undefined 
                    || practicalExp.endDate1 !== undefined || practicalExp.endDate2 !== undefined
                    || practicalExp.jobDescription1 !== undefined || practicalExp.jobDescription2 !== undefined
                    || practicalExp.jobTitle1 !== undefined || practicalExp.jobTitle2 !== undefined
                    ) ? 
                    <h2>Practical Experience</h2>
                    : null
                }
                <div className="practicalEntries">
                    <div>
                        <div className="practicalCompanyDate">
                            <p className="practicalCompany">{practicalExp.company1}</p>
                            <p className="practicalDate">{practicalExp.startDate1} - {practicalExp.endDate1}</p>
                        </div>
                        <p>{practicalExp.jobTitle1}</p>
                        <p>{practicalExp.jobDescription1}</p>
                    </div>
                    <div>
                        <div className="practicalCompanyDate">
                            <p className="practicalCompany">{practicalExp.company2}</p>
                            <p className="practicalDate">{practicalExp.startDate2} - {practicalExp.endDate2}</p>
                        </div>
                        <p>{practicalExp.jobTitle2}</p>
                        <p>{practicalExp.jobDescription2}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

OutputPreview.propTypes = {
    generalInfoData: PropTypes.object.isRequired,
    educationData: PropTypes.object.isRequired,
    practicalExp: PropTypes.object.isRequired
};



export default OutputPreview;