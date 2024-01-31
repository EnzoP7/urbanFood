import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria";
import PreciosMenu from "./components/PreciosMenu/PreciosMenu";
import Publicidad from "./components/Publicidad/Publicidad";
import Carrucel from "./components/carrucel/Carrucel";
import Suscribete from "./components/suscribete/Suscribete";

function App() {
  return (
    <div>
      <Hero />
      <div className="sm:hidden ">
        <Nosotros />
      </div>
      <Galeria />
      <PreciosMenu />
      <Publicidad />
      <div className="sm:block hidden">
        <Carrucel />
      </div>
      <Suscribete />
    </div>
  );
}

export default App;
