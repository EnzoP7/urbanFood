import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nosotros from "./components/Nosotros/Nosotros";
import Galeria from "./components/Galeria/Galeria";
import PreciosMenu from "./components/PreciosMenu/PreciosMenu";
import Publicidad from "./components/Publicidad/Publicidad";

import Suscribete from "./components/suscribete/Suscribete";
import Portada from "./components/Portada/Portada";

function App() {
  return (
    <div>
      {/* <Portada /> */}
      <Hero />
      <div className="sm:hidden ">
        <Nosotros />
      </div>
      <Galeria />
      <PreciosMenu />
      <Publicidad />

      <Suscribete />
    </div>
  );
}

export default App;
