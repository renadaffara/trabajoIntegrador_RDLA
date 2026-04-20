import React, { Component } from "react";

class MiPerfil extends Component {
  logout = () => {
    sessionStorage.removeItem("usuarioEnSesion");
    document.cookie = "auth-user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <h2>Mi Perfil</h2>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default MiPerfil;