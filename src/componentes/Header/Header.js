import React from "react";
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <nav>
            <ul className="Menu">
            <li > <Link to="/" >Home</Link> </li>
            <li> <Link to="/peliculas" >Peliculas</Link> </li>
            <li> <Link to= "/series" >Series</Link> </li>
            <li> <Link to= "/favoritas" >Favoritas</Link> </li>
            <li> <Link to= "/registro" >Registro</Link> </li>
            <li> <Link to= "/login" >Login</Link> </li>
            </ul>

            <ul className="Logo">
                <li>
                    Udesa Pelis
                    <img src="/img/udesapelis.png" />
                </li>
            </ul>
        </nav>
    )
};

export default Header;