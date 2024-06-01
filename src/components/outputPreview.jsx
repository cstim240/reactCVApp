
import PropTypes from 'prop-types';

function OutputPreview({formData}) {
    return (
        <div>
            <p>Name: </p>
            <p>{formData.name}</p>
        </div>
    )
}

OutputPreview.propTypes = {
    formData: PropTypes.object.isRequired
};

export default OutputPreview;