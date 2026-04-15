
import React, { Component } from "react";
import Card from "../../componentes/Card/Card";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  buscarPeliculas() {

    const query = this.props.match.params.query;
    const type = this.props.match.params.type;


    fetch(`https://api.themoviedb.org/3/search/${type}?api_key=7afb554b4adc7b0920bf1ba6053e639e&query=${query}`)
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