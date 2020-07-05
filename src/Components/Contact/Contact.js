import PropTypes from 'prop-types';
import React from "react";

import './contact.css';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img src={props.avatar}  className="avatar" alt="avatar"/>
            <div className="status">
                <h4 className="name">{props.name}</h4>
                <div className={props.online ? 'status-online' : 'status-offline'} />
                <div className="status-text">{props.online ? 'Online' : 'Offline'}</div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact
