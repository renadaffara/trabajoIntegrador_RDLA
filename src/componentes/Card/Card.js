import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article className="single-card-movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.img}`}
        className="card-img-top"
        alt={props.title}
      />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

        <p className="card-text">{props.description}</p>

        <Link to={`/movie/${props.id}`} className="btn btn-primary">
          Ver más
        </Link>

        <button className="btn alert-primary">
          ♥️
        </button>
      </div>
    </article>
  );
}
export default Card;