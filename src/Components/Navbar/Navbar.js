import React from "react";
import './navbar.css';
import NavLink from "./NavLink/NavLink";

const links = [
    {
        text : 'Accueil',
        url: 'index.html',
    },
    {
        text : 'utilisateurs',
        url : 'index.html'
    },
    {
        text : 'votre compte',
        url : 'index.html'
    }
]
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Mon chat</span>
            {
                links.map((link, index) => (
                    <NavLink key={link.toString()} url={link.url} text={link.text}/>
                ))
            }
        </div>
    )
}

export default Navbar
