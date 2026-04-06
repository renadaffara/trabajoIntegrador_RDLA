import React, { Component } from "react";
import {Link} from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false
    };
  }

  render() {
    const { info } = this.props;

    return (
      <article className="card">
        <img
          src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`}
          alt={info.title}
        />

        <h2>{info.title}</h2>

        <button
          onClick={() =>
            this.setState({ mostrar: !this.state.mostrar })
          }
        >
          Ver descripción
        </button>

        {this.state.mostrar && (
          <section>
            <p>{info.overview}</p>

            <Link to={"/detail/${info.id}"}>
              Ir a detalle
            </Link>
          </section>
        )}

      </article>
    );
  }
}

export default Card;

