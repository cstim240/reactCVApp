
import PropTypes from 'prop-types';

function OutputPreview({formData}) {
    return (
        <div>
            <p>Name: </p>
            <p>{formData.name}</p>
            <p>Email: </p>
            <p>{formData.email}</p>
            <p>Phone: </p>
            <p>{formData.phone}</p>
        </div>
    )
}

OutputPreview.propTypes = {
    formData: PropTypes.object.isRequired
};

export default OutputPreview;