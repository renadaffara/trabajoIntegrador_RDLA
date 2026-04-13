import React, { Component } from "react";
import "./Detail.css";


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peli: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7afb554b4adc7b0920bf1ba6053e639e`)
      .then(response => response.json())
      .then(data => this.setState({ peli: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        {this.state.peli === null ? (
          <h2>Cargando...</h2>
        ) : (
          <section>
            <div className="Detailcontenedor">
            <img 
              src={`https://image.tmdb.org/t/p/w342/${this.state.peli.poster_path}`}
              alt={this.state.peli.title}
              className="fotodetalle"
            />
            <div className="Detallitos">
            <h1 className="Titulop">{this.state.peli.title}</h1>
            <p className="overview">{this.state.peli.overview}</p>
            <p className="extra">Fecha: {this.state.peli.release_date}</p>
            <p className="extra">Rating: {this.state.peli.vote_average}</p>
            </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default Detail;