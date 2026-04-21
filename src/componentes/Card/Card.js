import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
    };
  }

  componentDidMount() {
    let storage = localStorage.getItem("favoritas");
    let favs = [];

    if (storage) {
      favs = JSON.parse(storage);
    }

    let esFavorito = favs.find((fav) => fav === this.props.id);

    if (esFavorito) {
      this.setState({
        esFavorito: true,
      });
    }
  }

  agregarfavoritas = () => {
    let storage = localStorage.getItem("favoritas");
    if (storage !== null) {
      let favsobtenidos = JSON.parse(storage);
      favsobtenidos.push(this.props.id);
      let favsString = JSON.stringify(favsobtenidos);
      localStorage.setItem("favoritas", favsString);
    } else {
      let favs = [this.props.id];
      let favsString = JSON.stringify(favs);
      localStorage.setItem("favoritas", favsString);
    }

    this.setState({
      esFavorito: true
    })

  }

  Deletefavoritas = () => {
    let password = localStorage.getItem("favoritas");
    let storage = JSON.parse(password);
    let filtrar = storage.filter((element) => element !== this.props.id);
    let favsString = JSON.stringify(filtrar);
    localStorage.setItem("favoritas", favsString);
    this.setState({
      esFavorito: false,
    });
  }

  render() {
    return (
      <article className="single-card-movie">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.img}`}
          className="card-imagen"
          alt={this.props.title}
        />

        <div className="cardBody">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>

          <Link to={`/movie/${this.props.id}`} className="btn btn-primary">
            Ver más
          </Link>
          {this.state.esFavorito ? <button className="btn btn-danger" onClick={this.Deletefavoritas}>
            😡
          </button> : <button onClick={this.agregarfavoritas}  className="btn btn-primary">
            ♥️
          </button>}

        </div>
      </article>
    );
  }
}

export default Card;