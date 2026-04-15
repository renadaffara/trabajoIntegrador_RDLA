
import React, { Component } from "react";
import Buscador from "../../componentes/Buscador/Buscador";
import Card from "../../componentes/Card/Card";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  buscarPeliculas(texto) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7afb554b4adc7b0920bf1ba6053e639e&query=${texto}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          resultados: data.results
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h2 className="alert alert-primary">Resultados de búsqueda</h2>

        <Buscador buscar={(texto) => this.buscarPeliculas(texto)} />

        <section className="row cards">
          {this.state.resultados.map(item => (
            <Card key={item.id} info={item} />
          ))}
        </section>
      </div>
    );
  }
}
export default SearchResults