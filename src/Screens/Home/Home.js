import React from "react";
import Seccionpelis from "../../componentes/Seccionpelis/Seccionpelis";
import "./Home.css"; 
import Buscador from "../../componentes/Buscador/Buscador";
import Seccionseries from "../../componentes/Seccionseries/Seccionseries";
function Home(){
    return(
          <main className="home">
        <Buscador/>

        <h2 className="titulo-seccion">Popular movies this week</h2>
      <Seccionpelis />

        <h2 className="titulo-seccion">Movies now playing</h2>
        <Seccionpelis />

        <h2 className="titulo-seccion">Popular TV shows</h2>
        <Seccionseries/>
        </main>
    )
}
export default Home


