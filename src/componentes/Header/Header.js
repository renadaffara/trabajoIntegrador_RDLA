import React from "react";
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <nav>
            <ul className="menu">
            <li> <Link to="/" >Home</Link> </li>
            <li> <Link to="/AboutUs" >Contact</Link> </li>
            <li> <Link to= "/" >Personajes </Link> </li>
            </ul>


            <ul className="user">
                <li>
                    Nombre usuario 
                    <img src="/img/user.jpg" alt="user" />
                </li>
            </ul>
        </nav>
    )
};

export default Header;