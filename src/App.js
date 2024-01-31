import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria";

function App() {
  return (
    <div>
      <Hero />
      <Nosotros />
      <Galeria />
    </div>
  );
}

export default App;
