//CSS ESTILOS
import './App.css';
import FontComponent from './componentes/Tipografia';
import './componentes/Logo.css';
import './componentes/Carrusel.css';
//LOGO
import Logo from "./componentes/Logo";
//CARRUSEL
import Carrusel from './componentes/Carrusel';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
      <FontComponent />
        <Logo />
        <Carrusel />
      </main>

    </div>
  );
}

export default App;
