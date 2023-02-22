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
    </div>
  );
}

export default App;
