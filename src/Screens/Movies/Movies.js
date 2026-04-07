import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import Card from "../Card/Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesFiltradas: [],
      valor: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e")
      .then(res => res.json())
      .then(data =>
        this.setState({
          movies: data.results,
          moviesFiltradas: data.results
        })
      )
      .catch(err => console.log(err));
  }

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });
  }

  filtrarPeliculas(event) {
    event.preventDefault();

    let resultado = this.state.movies.filter(movie =>
      movie.title.includes(this.state.valor)
    );

    this.setState({
      moviesFiltradas: resultado
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="alert alert-primary">Todas las películas</h2>

        <Buscador
          valor={this.state.valor}
          controlarCambios={(event) => this.controlarCambios(event)}
          filtrar={(event) => this.filtrarPeliculas(event)}
        />

        <section className="row cards all-movies" id="movies">
          {this.state.moviesFiltradas.map(movie => (
            <Card key={movie.id} info={movie} />
          ))}
        </section>
      </div>
    );
  }
}

export default Movies;