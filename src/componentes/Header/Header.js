import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css"; 

function Header(props){
    return(
    <nav className="nav">
      <div className="logo-container">
        <img src="/img/udesapelis.png" alt="Logo" />
        <h2 className="logo-text">Udesa Pelis</h2>
      </div>


      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/peliculas">Peliculas</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/favoritas">Favourites</Link></li>
        <li><Link to="/register">Registrer</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    )
};

export default Header;