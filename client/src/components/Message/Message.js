import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>{ msg }</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
Message.propTypes = {
    msg : PropTypes.string.isRequired
}
export default Message;
