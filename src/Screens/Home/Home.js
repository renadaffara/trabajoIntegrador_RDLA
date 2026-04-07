import React from "react";
import Seccionpelis from "../../componentes/Seccionpelis/Seccionpelis";
import Card from "../../componentes/Card/Card";
function Home(){
    return(
     <main>
       <h1>Peliculas Populares</h1>
        <Seccionpelis/>
        <Card
        id={123}
        title="Superman"
        img="ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" 
        description="Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."
        />
     <Card
        id={124}
        title="Superman"
        img="ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" 
        description="Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."
        />
        <Card
        id={125}
        title="Superman"
        img="ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" 
        description="Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."
        />
        <Card
        id={126}
        title="Superman"
        img="ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" 
        description="Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."
        />
        </main>
    )
}
export default Home


