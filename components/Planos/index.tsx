import React from "react";
import { Button } from "primereact/button";

export const Planos = () => {
  return (
    <div className="surface-0">
      <div className="text-900 font-bold text-6xl mb-4 text-center">
        Pacotes Paradiso
      </div>
      <div className="text-700 text-xl mb-6 text-center line-height-3">
        o Desing não é um custo, e sim um investimento para a sua marca
      </div>
      <div className="bg-red-400">
        <h1>Basic</h1>
        <span>plan basic</span>
        <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
      </div>
    </div>
  );
};
