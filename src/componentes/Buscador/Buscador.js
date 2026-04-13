import React, { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    
  }

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });

  }

  render() {
    return (
      <form 
        className="search-form"
        onSubmit={(event) => this.evitarSubmit(event)}
      >
        
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={this.state.valor}
          onChange={(event) => this.controlarCambios(event)}
        />

        <button type="submit" className="btn btn-success btn-sm">
          Buscar
        </button>

      </form>
    );
  }
}

export default Buscador;