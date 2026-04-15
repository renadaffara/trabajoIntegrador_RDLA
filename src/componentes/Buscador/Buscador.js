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

    this.props.history.push(`/SearchResults/${this.state.valor}/${this.state.valorSelect}`)

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