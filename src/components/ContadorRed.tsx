import React, { useReducer } from "react";

//Nunca se debe mutar este objeto
const initialState = {
  contador: 0,
};

//Estas son las acciones que contadorReducer recibe como argumentos
type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number }; //el payload es el argumento que lleva esta acción

//Este reducer siempre devuelve un nuevo estado
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state,
        contador: action.payload,
      };
    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState); //en este caso no necesita init porque ya tiene initialState
  return (
    <>
      <h2>Contador: {contadorState.contador}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        -1
      </button>
    </>
  );
};
