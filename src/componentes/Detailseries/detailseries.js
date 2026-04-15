import React, { Component } from "react";
import "./Detailseries.css";


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7afb554b4adc7b0920bf1ba6053e639e`)
      .then(response => response.json())
      .then(data => this.setState({ serie: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        {this.state.serie === null ? (
          <h2>Cargando...</h2>
        ) : (
          <section>
            <div className="Detailcontenedor">
            <img 
              src={`https://image.tmdb.org/t/p/w342/${this.state.serie.poster_path}`}
              alt={this.state.serie.title}
              className="fotodetalle"
            />
            <div className="Detallitos">
            <h1 className="Titulop">{this.state.serie.title}</h1>
            <p className="overview">{this.state.serie.overview}</p>
            <p className="extra">Fecha: {this.state.serie.release_date}</p>
            <p className="extra">Rating: {this.state.serie.vote_average}</p>
            </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default Detailserie;