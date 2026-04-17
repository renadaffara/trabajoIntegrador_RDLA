import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cardserie.css";

class CardSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
    };
  }

  componentDidMount() {
    let storage = localStorage.getItem("favoritasSeries");
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
    let storage = localStorage.getItem("favoritasSeries");
    if (storage !== null) {
      let favsobtenidos = JSON.parse(storage);
      favsobtenidos.push(this.props.id);
      let favsString = JSON.stringify(favsobtenidos);
      localStorage.setItem("favoritasSeries", favsString);
    } else {
      let favs = [this.props.id];
      let favsString = JSON.stringify(favs);
      localStorage.setItem("favoritasSeries", favsString);
    }

    this.setState({
      esFavorito: true
    })

  }

  Deletefavoritas = () => {
    let password = localStorage.getItem("favoritasSeries");
    let storage = JSON.parse(password);
    let filtrar = storage.filter((element) => element !== this.props.id);
    let favsString = JSON.stringify(filtrar);
    localStorage.setItem("favoritasSeries", favsString);
    this.setState({
      esFavorito: false,
    });
  }

  render() {
    return (
      <article className="single-card-serie">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.img}`}
          className="card-img-top"
          alt={this.props.title}
        />

        <div className="cardBody">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>

          <Link to={`/serie/${this.props.id}`} className="btn btn-primary">
            Ver más
          </Link>
          {this.state.esFavorito ? <button className="btn alert-primary" onClick={this.Deletefavoritas}>
            😡
          </button> : <button onClick={this.agregarfavoritas}  className="btn alert-primary">
            ♥️
          </button>}

        </div>
      </article>
    );
  }
}

export default CardSeries;