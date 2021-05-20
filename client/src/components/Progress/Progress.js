import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({percentage}) => {
    return (
    <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success mt-4" role="progressbar" style={{width : `${percentage}%`}}
             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
    </div>
    )
}
Progress.prototype = {
    percentage : PropTypes.number.isRequired
}
export default Progress;
