import React, { Component } from "react";

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
      .then(info => info.json())
      .then(data => this.setState({ peli: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.peli === null ? (
          <h2>Cargando...</h2>
        ) : (
          <section>
            <img
              src={`https://image.tmdb.org/t/p/w342/${this.state.peli.poster_path}`}
              alt={this.state.peli.title}
            />
            <h1>{this.state.peli.title}</h1>
            <p>{this.state.peli.overview}</p>
            <p>Fecha: {this.state.peli.release_date}</p>
            <p>Rating: {this.state.peli.vote_average}</p>
          </section>
        )}
      </>
    );
  }
}

export default Detail;