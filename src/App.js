import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Registrer from "./Screens/Registrer/Registrer";
import Favourites from "./Screens/Favourites/Favourites";
import NotFound from "./Screens/NotFound/NotFound";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import SearchResults from "./Screens/SearchResults/SearchResults";
import Movies from "./Screens/Movies/Movies";

function App() {
  return (
    <div className="App">
      <Header/>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/login" component={Login} />
          <Route path="/SearchResults/:query/:type" component={SearchResults} />
          <Route path="/register" component={Registrer} />
           {/* <Route path="/movie/:id" component={Detail} /> */}
           <Route path="/favoritas" component={Favourites} />
           <Route path="/peliculas" component={Movies} />
          <Route path="" component={NotFound} />
        </Switch>

      <Footer/>
    </div>
  );
}

export default App;
