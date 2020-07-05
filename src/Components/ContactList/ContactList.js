import React from "react";
import Contact from "../Contact/Contact";
import './userbar.css';

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false,
        altText: 'Avatr de Robert Reyes'
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true,
        altText: 'avatar de Nellie Caldwell'
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true,
        altText: 'avatar de Vernon Mason'
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false,
        altText: 'avatar de Erica Hunt'
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true,
        altText: 'avatar de Juanita Phillips',
    }
];


const ContactList = () => {
    return (<div className="User-bar">
        {
            users.map(
                user =>
                    <Contact
                    name = {user.name}
                    avatar = {user.avatar}
                    alt = {user.altText}
                    online = {user.online}
                    />
            )
        }
    </div>)

};


export default ContactList
