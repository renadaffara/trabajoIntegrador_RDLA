import React, { Component } from "react";
import Card from "../../componentes/Card/Card";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentDidMount() {
    let favoritos = localStorage.getItem("favs")
    let favoritos_parse




    let favs = JSON.parse(localStorage.getItem("favs")) || [];



    favs.forEach(id => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7afb554b4adc7b0920bf1ba6053e639e`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            datos: [...this.state.datos, data]
          });
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    return (
      <section className="seccionpelis">
        {this.state.datos.length === 0 ? (
          <h3>No hay favoritos</h3>
        ) : (
          this.state.datos.map(pelicula => (
            <Card
              key={pelicula.id}
              info={pelicula}
            />
          ))
        )}
      </section>
    );
  }
}

export default Favorites;


