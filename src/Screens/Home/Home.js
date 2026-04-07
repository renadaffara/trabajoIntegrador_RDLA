import React from "react";
import Seccionpelis from "../../componentes/Seccionpelis/Seccionpelis";
import "./Home.css"; 
function Home(){
    return(
          <main className="home">
       <h1>UdeSA Movies</h1>
        <h2 className="titulo-seccion">Popular movies this week</h2>
      | <Seccionpelis />

        <h2 className="titulo-seccion">Movies now playing</h2>
        <Seccionpelis />

        <h2 className="titulo-seccion">Popular TV shows</h2>
        <Seccionpelis />
        </main>
    )
}
export default Home


