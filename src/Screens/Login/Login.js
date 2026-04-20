import React, { Component } from "react";
import "./Login.css"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  };

 

  controlarEmail = (evento) => {
    this.setState({ email: evento.target.value });
  };

  controlarPassword = (evento) => {
    this.setState({ password: evento.target.value });
  };

  MandarSubmit = (evento) => {
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
        <div className="bodyregister">
            <form className='formregister' onSubmit={(evento) => this.MandarSubmit(evento)}>
                <h1 id='titulo'>¡Bienvenido de vuelta!</h1>
                <h2 id='h2register' className='nav-link'>Ingresar a tu cuenta</h2>
                <h3 className='h3register'>Ingrese su mail</h3>
                <input
                    className='inputregister'
                    required
                    type="email"
                    placeholder="Agregue su mail"
                    onChange={(evento) => this.controlarEmail(evento)}
                    value={this.state.email}
                />
                <h3 className='h3register'>Ingrese su contraseña</h3>
                <input
                    className='inputregister'
                    required
                    type='password'
                    placeholder="Agregue su contraseña"
                    onChange={(evento) => this.controlarPassword(evento)}
                    value={this.state.password}
                />
                <p className='errores'>{this.state.error}</p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
    };
 

  export default Login; 