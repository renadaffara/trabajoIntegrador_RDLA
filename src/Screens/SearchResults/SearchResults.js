
import React, { Component } from "react";
import Card from "../../componentes/Card/Card";
import CardSeries from "../../componentes/CardSerie/CardSerie";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {

    let valor = this.props.match.params.valor;
    let seleccionado = this.props.match.params.seleccionado;

    console.log(seleccionado);
    console.log(valor);
    
    

    fetch(`https://api.themoviedb.org/3/search/${seleccionado}?api_key=7afb554b4adc7b0920bf1ba6053e639e&query=${valor}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          resultados: data.results
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.resultados);
    
    return (
      <div className="container">
        <h2 className="alert alert-primary">Resultados de búsqueda</h2>
        {this.state.resultados.length === 0 ? (<h3 className="alert alert-danger">No se encontraron resultados</h3>) : 
        (this.state.resultados.map(item=> 
          (this.props.match.params.valor === "movie" ? 
          (<Card  
              key={item.id}
              img={item.poster_path}
              title={item.title}
              description={item.overview} />) : 
          (<CardSeries 
              key={item.id}
              img={item.poster_path}
              title={item.name}
              description={item.overview} />) 
          )))}
      </div>
    );
  }
}
export default SearchResults;