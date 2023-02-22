import React, { useState, useEffect, useRef } from "react";

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current); // comprobación antes de limpiar con clearInterval
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small> segundos
      </h4>
    </>
  );
};
