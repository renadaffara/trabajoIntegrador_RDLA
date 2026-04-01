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
      
      <article>
        <img src={this.props.info.image} alt={this.props.info.name} />
        <h2>{this.props.info.name}</h2>
        <p>{this.props.info.status}</p>
        <p>{this.props.info.species}</p>

        <button
          className='more'
          onClick={() => this.setState({ mostrar: !this.state.mostrar })}
        >
          Ver más
        </button>

        {this.state.mostrar && (
          <section className='extra'>
            <p>Origen: {this.props.info.origin.name}</p>
            <li> <Link to="/UnPersonaje/:id" >About</Link> </li>

          </section>
        )}

        <button className='delete' onClick={this.props.borrar}>
          Borrar
        </button>
      </article>
    );
  }
}

export default Card;