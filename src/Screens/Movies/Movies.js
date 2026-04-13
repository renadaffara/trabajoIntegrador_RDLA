import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import Card from "../Card/Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesFiltradas: [],
      valor: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e")
      .then(response => response.json())
      .then 