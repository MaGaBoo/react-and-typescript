import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
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
    </div>
  );
}

export default App;
