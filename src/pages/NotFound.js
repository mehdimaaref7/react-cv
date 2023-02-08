import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h3> Désolé cette page n'existe pas ! </h3>
                <NavLink exact to="/">
                    <HomeSharpIcon/>
                    <span> Accueil </span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;