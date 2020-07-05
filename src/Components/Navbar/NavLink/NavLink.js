import React from "react";

const NavLink = (props) => {
    return (
        <a href={props.url}>{props.text}</a>
    )
}

export default NavLink
