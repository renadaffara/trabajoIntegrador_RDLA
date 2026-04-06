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
    

    return (
       <article class="single-card-movie">
                <img src="https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" class="card-img-top"
                    alt="...">
                <div class="cardBody">
                    <h5 class="card-title">Superman</h5>
                    <p class="card-text">Superman, a journalist in Metropolis, embarks on a journey to reconcile his
                        Kryptonian heritage with his human upbringing as Clark Kent.</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
            </article>
    );
  }
}

export default Card;

