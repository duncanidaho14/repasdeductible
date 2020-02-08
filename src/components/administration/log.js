import React from 'react';
import Navbar from './../header/navbar';

function UserConnect(props) {
    return <h1>Bienvenue !</h1>;
}

function GuestConnect(props) {
    return <h1>Veuillez vous inscrire.</h1>
}

function Connect(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <Navbar />;
    } else {
        return <GuestConnect />;
    }
}