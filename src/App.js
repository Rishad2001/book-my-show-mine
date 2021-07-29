import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.Hoc";

//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page"; 

// css for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <>
     <DefaultHOC path="/" exact  component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
   </>
  );
}

export default App; 