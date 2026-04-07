import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css"; 

function Header(props){
    return(
    <nav className="nav">
      <h2 className="logo">MovieApp</h2>

      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/peliculas">Peliculas</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/favoritas">Favourites</Link></li>
        <li><Link to="/registro">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    )
};

export default Header;