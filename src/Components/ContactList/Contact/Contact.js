import PropTypes from 'prop-types';
import React from "react";

import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        };
    }

    handleClick = () => {
        this.setState({ online: !this.state.online });
    }

    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} className="avatar" alt={this.props.alt}/>
                <div className="status"  onClick={this.handleClick}>
                    <h4 className="name">{this.props.name}</h4>
                    <div className={this.state.online ? 'status-online' : 'status-offline'}/>
                    <div className="status-text">{this.state.online ? 'Online' : 'Offline'}</div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Contact
