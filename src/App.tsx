import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr />
      <Counter />

      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
      <h2>useReducer</h2>
      <br />
      <ContadorRed />
      <br />
      <h2>Custom hooks</h2>
      <hr />
      <Formulario />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
}

export default App;
