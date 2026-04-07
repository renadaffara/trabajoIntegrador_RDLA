import React, { Component } from "react";

class Buscador extends Component {
  render() {
    return (
      <form
        className="buscador"
        onSubmit={(event) => this.props.filtrar(event)}
      >
        <input
          type="text"
          name="filter"
          placeholder="Buscar dentro de la lista"
          onChange={(event) => this.props.controlarCambios(event)}
          value={this.props.valor}
        />

        <button type="submit" className="btn btn-secondary ml-2">
          Buscar
        </button>
      </form>
    );
  }
}

export default Buscador;