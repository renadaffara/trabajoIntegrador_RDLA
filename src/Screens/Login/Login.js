import React, { Component } from "react";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  controlarEmail = (evento) => {
    this.setState({ email: evento.target.value });
  };

  controlarPassword = (evento) => {
    this.setState({ password: evento.target.value });
  };

  submit = (evento) => {
    evento.preventDefault();
    const usersStorage = localStorage.getItem("users");
    if (usersStorage === null) {
      this.setState({ error: "Las credenciales ingresadas son inválidas" });
      return;
    }
    const usersParseado = JSON.parse(usersStorage);
    const usersFiltrado = usersParseado.filter(user => user.email === this.state.email);
    if (usersFiltrado.length === 0) {
      this.setState({ error: "El usuario ingresado no existe" });
      return;
    }
    if (usersFiltrado[0].password !== this.state.password) {
      this.setState({ error: "Las credenciales ingresadas son inválidas" });
      return;
    }
    document.cookie = `auth-user=${this.state.email}; path=/`;
    sessionStorage.setItem("usuarioEnSesion", JSON.stringify({ sesionActiva: true }));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submit}>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.controlarEmail}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.controlarPassword}
            required
          />
          <button type="submit">Login</button>
        </form>
        {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
      </div>
    );
  }
}

export default Login;