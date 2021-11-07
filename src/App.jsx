import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Search from "./pages/Search"
import NotFound from "./pages/NotFound";

function App() {


  return (
    <>
      <BrowserRouter>
        
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/peliculas/:id" component={MovieDetails}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={Search}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
