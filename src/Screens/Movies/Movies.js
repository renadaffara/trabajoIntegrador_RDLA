import React, { Component } from "react";
import Card from "../../componentes/Card/Card";
import "./Movies.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      datosCopia: [],
      valor: "",
      page: 1
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e&page=${this.state.page}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          datos: data.results,
          datos2: data.results
        })
      )
      .catch(error => console.log(error));
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState(
      { valor: event.target.value },
      () => this.filtrarPeliculas()
    );
  }

  filtrarPeliculas() {
    let datosFiltrados = this.state.datosCopia.filter((peli) =>
      peli.title.toLowerCase().includes(this.state.valor.toLowerCase())
    );

    this.setState({
      datosCopia: datosFiltrados
    });
  }

  cargarMas() {
    let paginaSiguiente = this.state.page + 1;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e&page=${paginaSiguiente}`)
      .then(response => response.json())
      .then(data => {
        let listaPelis = this.state.datos;
        data.results.map((peli) => listaPelis.push(peli));
        this.setState({
          datos: listaPelis,
          datos2: listaPelis,
          page: paginaSiguiente
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.datos.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <div className="divEnCartel">
            <form
              className="barra_busqueda"
              onSubmit={(event) => this.evitarSubmit(event)}
            >
              <label>Buscar</label>
              <input
                type="text"
                onChange={(event) => this.controlarCambios(event)}
                value={this.state.valor}
                className="busqueda"
              />
            </form>

            <div className="movies-container">
              
              { this.state.valor === "" ?
              (this.state.datos.map((peli, idx) => (
                <Card
                  key={idx + 1}
                  img={peli.poster_path}
                  title={peli.title}
                  id={peli.id}
                  overview={peli.overview}
                />
              ))) : 
              (this.state.datos2.map((peli, idx) => (
                <Card
                  key={idx + 1}
                  img={peli.poster_path}
                  title={peli.title}
                  id={peli.id}
                  overview={peli.overview}
                />
              )))
            }
              
              
            </div>

            <button onClick={() => this.cargarMas()}>Cargar más</button>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;