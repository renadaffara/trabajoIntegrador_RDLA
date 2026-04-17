import React, { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
      valorSelect: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    if (this.state.valorSelect === "movies") {
      this.buscarPeliculas();
    } else {
      this.buscarSeries();
    }
  }

  buscarPeliculas = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7afb554b4adc7b0920bf1ba6053e639e&query=${this.state.valor}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          this.props.history.push(`/movie/${data.results[0].id}`);
        } else {
          alert("No se encontraron películas");
        }
      })
      .catch(error => console.log(error));
  }

  buscarSeries = () => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=7afb554b4adc7b0920bf1ba6053e639e&query=${this.state.valor}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          this.props.history.push(`/serie/${data.results[0].id}`);
        } else {
          alert("No se encontraron series");
        }
      })
      .catch(error => console.log(error));
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }

  controlarSelect(event) {
    this.setState({ valorSelect: event.target.value }, () => {
      console.log(this.state.valorSelect)

    });
  }

  render() {
    return (
      <form className="Buscador" onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          placeholder="Busca tu película..."
          value={this.state.valor}
          onChange={(event) => this.controlarCambios(event)}
        />
        <select value={this.state.valorSelect} onChange={(event) => this.controlarSelect(event)}>
          <option value="movies">Pelis</option>
          <option value="tv">Series</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default Buscador;