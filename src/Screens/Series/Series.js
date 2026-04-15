import React, { Component } from "react";
import Card from "../Card/Card";

class Series extends Component {
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
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e&page=1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          datos: data.results,
          datosCopia: data.results
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
      this.filtrarSeries()
    );
  }

  filtrarSeries() {
    let datosFiltrados = this.state.datosCopia.filter((serie) =>
      serie.name.toLowerCase().includes(this.state.valor.toLowerCase())
    );

    this.setState({
      datos: datosFiltrados
    });
  }

  cargarMas() {
    let paginaSiguiente = this.state.page + 1;

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e&page=${paginaSiguiente}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          datosCopia: this.state.datosCopia.concat(data.results),
          page: paginaSiguiente
        })
      )
      .catch(error => console.log(err));
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

            {this.state.datos.map((serie, idx) => (
              <CardSeries
                key={idx + 1}
                img={serie.poster_path}
                title={serie.name}
                id={serie.id}
                overview={serie.overview}
              />
            ))}

            <button onClick={() => this.cargarMas()}>Cargar más</button>
          </div>
        )}
      </div>
    );
  }
}

export default Series;

