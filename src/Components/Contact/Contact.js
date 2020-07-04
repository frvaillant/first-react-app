import React from "react";
import './contact.css';

const Contact = ({avatar, name}) => {
    return (
        <div className="Contact">
            <img src={avatar}  className="avatar"/>
            <div className="status">
                <p className="name">
                    {name}
                </p>
                <p>
                    <span className="status-online"></span>
                    <span className="status-text">
                        Online
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Contact
