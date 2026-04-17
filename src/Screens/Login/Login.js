import React, { Component } from "react";

class Login extends Component {
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
     
    };
  }; 

  export default Login; 