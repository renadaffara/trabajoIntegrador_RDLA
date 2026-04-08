import React, { Component } from "react";
import Card from "../Card/Card";
import Buscador from "../Buscador/Buscador";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      pagina: 1,
      valor: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=TU_API_KEY&page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          series: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  controlarCambios(event) {
    this.setState({
      valor: event.target.value
    });
  }

  cargarMas() {
    this.setState(
      {
        pagina: this.state.pagina + 1
      },
      () => {
        fetch(
          "https://api.themoviedb.org/3/tv/popular?api_key=TU_API_KEY&page=" +
            this.state.pagina
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              series: this.state.series.concat(data.results)
            });
          })
          .catch((error) => console.log(error));
      }
    );
  }

  render() {
    let seriesFiltradas = this.state.series.filter((serie) =>
      serie.name.toLowerCase().includes(this.state.valor.toLowerCase())
    );

    return (
      <section>
        <h2>Series</h2>

        <Buscador/>

        {this.state.series.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          seriesFiltradas.map((serie) => (
            <Card key={serie.id} info={serie} />
          ))
        )}

        <button onClick={() => this.cargarMas()}>Cargar más</button>
      </section>
    );
  }
}

export default Series;