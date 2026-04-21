import React, { Component } from "react";
import "./Series.css";
import CardSerie from "../../componentes/CardSerie/CardSerie";


class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      datosCopia: [],
      valor: "",
      page: 1,
      loading: true
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e&page=${this.state.page}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          datos: data.results,
          datosCopia: data.results,
          loading: false
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
      () => this.filtrarSeries()
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
      .then(data => {
        let listaSeries = this.state.datos;
        data.results.map((serie) => listaSeries.push(serie));
        this.setState({
          datos: listaSeries,
          datosCopia: listaSeries,
          page: paginaSiguiente,
          loading: false
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
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
        {this.state.loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="divEnCartel">
           
            <div className="movies-container">
              
            
              {this.state.datos.length === 0 ?  <p>No hay resultados similares</p> :this.state.datos.map((serie, idx) => (
                <CardSerie
              key={idx + 1}
              img={serie.poster_path}
              title={serie.name}
              description={serie.overview}
                />          
              ))}
              
            </div>

            <button onClick={() => this.cargarMas()}>Cargar más</button>
          </div>
        )}
      </div>
    );
  }
}

export default Series;

