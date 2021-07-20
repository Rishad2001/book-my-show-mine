 import { Route } from "react-router-dom"

 //hoc
 import DefaultHOC from "./HOC/default.HOC";

 //Tcomponents
 import Temp from "./components/temp"

function App() {
  return (
   <>
    <DefaultHOC path="/" exact component={Temp} />
   </>
  );
}

export default App;
