import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//components
import HomePage from "./pages/Home.page";

// css for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <>
     <DefaultHOC path="/" exact  component={HomePage} />
   </>
  );
}

export default App; 