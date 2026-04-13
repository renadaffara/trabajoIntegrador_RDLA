import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registrer.css";

class Registrer extends Component {
 constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  evitarSubmit(eventoo) {
    eventoo.preventDefault();
    console.log(this.state);
  }

  controlarEmail(eventoo) {
    this.setState({ email: eventoo.target.value });
  }

  controlarPassword(eventoo) {
    this.setState({ password: eventoo.target.value });
  }

  render() {
    return (
      <>
        <h2 className="alert alert-primary">Registro</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <form onSubmit={(eventoo) => this.evitarSubmit(eventoo)}>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control" 
                  type="email"placeholder="Ingresá tu email" onChange={(eventoo) => this.controlarEmail(eventoo)} value={this.state.email}/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-control"
                  type="password"placeholder="Ingresá tu contraseña" onChange={(eventoo) => this.controlarPassword(eventoo)} value={this.state.password}/>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Registrarse
              </button>

            </form>

            <p className="mt-3 text-center">
              ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>

          </div>
        </div>
      </>
    );
  }
}

export default Registrer;