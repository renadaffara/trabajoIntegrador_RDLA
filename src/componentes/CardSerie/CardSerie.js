import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class CardSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritas: false,
    };
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
      favoritas: true,
    });
  }

  Deletefavoritas = () => {
    let password = localStorage.getItem("favoritas");
    let storage = JSON.parse(password);
    let filtrar = storage.filter((element) => element !== this.props.id);
    let favsString = JSON.stringify(filtrar);
    localStorage.setItem("favoritas", favsString);
    this.setState({
      favoritas: false,
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
          <button onClick={this.agregarfavoritas} className="btn alert-primary">
            ♥️
          </button>
        </div>
      </article>
    );
  }
}

export default CardSerie;