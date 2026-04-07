import React from "react";
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <nav>
            <ul className="Menu">
            <li > <Link to="/" >Home</Link> </li>
            <li> <Link to="/peliculas" >Peliculas</Link> </li>
            <li> <Link to= "/series" >Series</Link> </li>
            <li> <Link to= "/favoritas" >Favourites</Link> </li>
            <li> <Link to= "/registro" >Register</Link> </li>
            <li> <Link to= "/login" >Login</Link> </li>
            </ul>
        </nav>
    )
};

export default Header;