import React, { Component } from "react";
import Card from "../../componentes/Card/Card";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasfavs:[] ,
      seriesfavs:[]
    };
  }

  componentDidMount() {
    this.state.peliculasfavs()
    let storage = localStorage.getItem("favoritas");
    if (storage !== null) {
      let favsobtenidos = JSON.parse(storage);
      let peliculasfavs = [];
      favsobtenidos.map((id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7afb554b4adc7b0920bf1ba6053e639e`)
          .then((response) => response.json())
          .then((data) => 
            peliculasfavs.push(data), 
            this.setState({peliculasfavs: peliculasfavs})
            )
          .catch((error) => console.log(error));
      }
      );
    }
  }
  render() {
    return (
      <main>
        <h2 className="alert alert-primary">Películas Favoritas</h2>
        {this.state.peliculasfavs.length === 0 ? (
          <h3>No tenés películas favoritas</h3>
        ) : (
          <section className="contenedor-card">
            {this.state.peliculasfavs.map((pelicula) => (
              <Card
                key={pelicula.id}
                id={pelicula.id}
                title={pelicula.title}
                description={pelicula.overview}
                img={pelicula.poster_path}
              />
            ))}
          </section>
        )}
         <h2 className="alert alert-primary">Series Favoritas</h2>
        {this.state.seriesfavs.length === 0 ? (
          <h3>No tenés series favoritas</h3>
        ) : (
          <section className="contenedor-card">
            {this.state.seriesfavs.map((serie) => (
              <Card
                key={serie.id}
                id={serie.id}
                title={serie.name}
                description={serie.overview}
                img={serie.poster_path}
              />
            ))}
          </section>
        )}
      </main>
    );
  }
}

export default Favorites;


