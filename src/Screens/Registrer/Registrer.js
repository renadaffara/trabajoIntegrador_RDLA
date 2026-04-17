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

  controlarEmail(eventoo) {
    this.setState({ email: eventoo.target.value });
  }

  controlarPassword(eventoo) {
    this.setState({ password: eventoo.target.value });
  }

  evitarSubmit(eventoo) {
    eventoo.preventDefault();

    let storage = localStorage.getItem("users");
  
    if (storage !== null) {
      let users = JSON.parse(storage);

      let existe = users.find(user => user.email === this.state.email);

      if (existe === undefined) {
        users.push({
          email: this.state.email,
          password: this.state.password
        });
        localStorage.setItem("users", JSON.stringify(users));
      }

    } else {
      let users = [{
        email: this.state.email,
        password: this.state.password
      }];
      localStorage.setItem("users", JSON.stringify(users));
    }

    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-box">
          <h2>Registro</h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={(eventoo) => this.evitarSubmit(eventoo)}>
                
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Ingresá tu email"
                    onChange={(eventoo) => this.controlarEmail(eventoo)}
                    value={this.state.email}
                  />
                </div>

                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Ingresá tu contraseña"
                    onChange={(eventoo) => this.controlarPassword(eventoo)}
                    value={this.state.password}
                  />
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
        </div>
      </div>
    );
  }
}

export default Registrer;