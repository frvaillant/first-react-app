import React from "react";
import Contact from "../Contact/Contact";
import './userbar.css';

const UserBar = () => {
    return(
        <div className="User-bar">
            <Contact avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg" name="François"/>
            <Contact avatar="https://randomuser.me/api/portraits/women/68.jpg" name="Simone" online/>
            <Contact avatar="https://randomuser.me/api/portraits/women/18.jpg" name="Sophie" online/>
            <Contact avatar="https://randomuser.me/api/portraits/men/79.jpg" name="Arthur"/>
            <Contact avatar="https://randomuser.me/api/portraits/women/10.jpg" name="Martine" online/>
        </div>
    )
}

export default UserBar
