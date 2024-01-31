import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria";
import PreciosMenu from "./components/PreciosMenu/PreciosMenu";
import Publicidad from "./components/Publicidad/Publicidad";

function App() {
  return (
    <div>
      <Hero />
      <Nosotros />
      <Galeria />
      <PreciosMenu />
      <Publicidad />
    </div>
  );
}

export default App;
