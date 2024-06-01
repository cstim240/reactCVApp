
import PropTypes from 'prop-types';

function OutputPreview({formData}) {
    return (
        <div className="outputLayout">
            <div className="generalOutput">
                <p id="nameHeader">{formData.name}</p>
                <div className="emailNnumber">
                    <p>{formData.email}</p>
                    <p>{formData.phone}</p> 
                    <p>{formData.location}</p>
                </div>
                
            </div>
            

            <div>

            </div>
            
        </div>
    )
}

OutputPreview.propTypes = {
    formData: PropTypes.object.isRequired
};

export default OutputPreview;