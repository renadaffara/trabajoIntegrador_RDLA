import react from "react";
class Seccionpelis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7afb554b4adc7b0920bf1ba6053e639e")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          datos: data.results
        });
      })
      .catch(error => console.log(error));
  }

 

  render() {
    return (
      <section className='seccionpelis'>
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datos.map(personaje => (
            <Card
              key={personaje.id}
              info={personaje}
              borrar={() => this.borrarPersonaje(personaje.id)}
            />
          ))
        )}
      </section>
    );
  }
}

export default Seccionpelis;
