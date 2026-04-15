import React, { Component } from "react";
import Card from "../Card/Card";
import "./Seccionseries.css"
import CardSerie from "../CardSerie/CardSerie";

class Seccionseries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e")
      .then(response => response.json())
      .then(data => {
        this.setState({
          datos: data.results
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <section className="seccionseries">
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datos.map(serie => (
            <CardSerie
              key={serie.id}
              id={serie.id}
              img={serie.poster_path}
              title={serie.name}
              description={serie.overview}
            />
          ))
        )}
      </section>
    );
  }
}

export default Seccionseries;


