import React, { Component } from "react";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      seriesFiltradas: [],
      valor: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e")
      .then(res => res.json())
      .then(data =>
        this.setState({
          series: data.results,
          seriesFiltradas: data.results
        })
      )
      .catch(err => console.log(err));
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });
  }

  filtrarSeries(event) {
    event.preventDefault();

    let resultado = this.state.series.filter(serie =>
      serie.name.toLowerCase().includes(this.state.valor.toLowerCase())
    );

    this.setState({
      seriesFiltradas: resultado
    });
  }

  render() {
    return (
      <div className="container">
        <h1>UdeSA Movies</h1>

        <nav>
          <ul className="nav nav-tabs my-4">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">Películas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/series">Series</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">Favoritas</a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="/register">Registro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <h2 className="alert alert-primary">Todas las series</h2>

        <form
          className="filter-form px-0 mb-3"
          onSubmit={(event) => this.filtrarSeries(event)}
        >
          <input
            type="text"
            name="filter"
            placeholder="Buscar dentro de la lista"
            onChange={(event) => this.controlarCambios(event)}
            value={this.state.valor}
          />
          <button type="submit" className="btn btn-secondary ml-2">
            Buscar
          </button>
        </form>

        <button className="btn btn-info mb-4">Cargar más</button>

        <section className="row cards all-movies" id="movies">
          {this.state.seriesFiltradas.map(serie => (
            <article
              className="single-card-movie col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={serie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                className="card-img-top"
                alt={serie.name}
              />
              <div className="cardBody">
                <h5 className="card-title">{serie.name}</h5>
                <p className="card-text">{serie.overview}</p>
                <a href={`/serie/id/${serie.id}`} className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </article>
          ))}
        </section>

        <footer className="alert alert-primary mt-4 text-center">
          <p className="mb-0">Integrante 1 | Integrante 2 | Integrante 3</p>
        </footer>
      </div>
    );
  }
}

export default Series;
