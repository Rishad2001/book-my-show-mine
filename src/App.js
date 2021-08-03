import axios from "axios";
import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.Hoc";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page"; 
import Plays from "./pages/PlayPage";

// css for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};  //params are essentialy objects in URL
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
   <>
     <DefaultHOC path="/" exact  component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
   </>
  );
}

export default App; 