import React from "react";
import PropTypes from 'prop-types';

import './contact.css';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img src={props.avatar}  className="avatar" alt="avatar"/>
            <div className="status">
                <p className="name">
                    {props.name}
                </p>
                <p>
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">
                        {props.online ? 'Online' : 'Offline'}
                    </span>
                </p>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
};

Contact.defaultProps = {
    name: 'User name',
    avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png',
    online: false
};

export default Contact
