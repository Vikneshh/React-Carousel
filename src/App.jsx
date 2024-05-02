import "./App.css";
import Carousel from "./components/Carousel";
import {slides} from "./data/carouselData.json"

const App = () => {
  return (
    <div className="app">
      <h1 style={{marginRight:"20px",textAlign:"center" }}>Welcome to Vikneshh Carusel{" ==>"}</h1>
      <Carousel data={slides}/>
    </div>
  )
}

export default App