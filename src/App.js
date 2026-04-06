import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Detail from "./Screens/Detail/Detail";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Favorites from "./Screens/Favourites/Favourites";
import NotFound from "./Screens/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <h1>Udesa Pelis</h1>
      <Header/>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/favourites" component={Favorites} />
          <Route path="/login" component={Login} />
          <Route path="/SearchResults" component={SearchResults} />
          <Route path="/register" component={Register} />
          <Route path="" component={NotFound} />
        </Switch>

      <Footer/>
    </div>
  );
}

export default App;
