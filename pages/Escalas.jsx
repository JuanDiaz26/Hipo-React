// src/pages/Escalas.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const escalas = [
  {
  categoria: "Condicional",
  premios: [
    ["1° Puesto", "$ 1.310.900"],
    ["2° Puesto", "$ 393.200"],
    ["3° Puesto", "$ 327.700"],
    ["4° Puesto", "$ 262.100"],
    ["5° Puesto", "$ 196.600"],
    ["6° Puesto", "$ 131.100"],
  ],
}
,
    {
  categoria: "Potrillos",
  premios: [
    ["1° Puesto", "$ 2.360.500"],
    ["2° Puesto", "$ 708.100"],
    ["3° Puesto", "$ 590.100"],
    ["4° Puesto", "$ 472.100"],
    ["5° Puesto", "$ 354.000"],
    ["6° Puesto", "$ 236.000"],
  ],
},
{
  categoria: "Extraoficial",
  premios: [
    ["1° Puesto", "$ 892.600"],
    ["2° Puesto", "$ 267.800"],
    ["3° Puesto", "$ 223.100"],
    ["4° Puesto", "$ 178.500"],
    ["5° Puesto", "$ 133.900"],
    ["6° Puesto", "$ 89.200"],
  ],
}
,
{
  categoria: "Especial",
  premios: [
    ["1° Puesto", "$ 1.973.300"],
    ["2° Puesto", "$ 592.000"],
    ["3° Puesto", "$ 493.300"],
    ["4° Puesto", "$ 394.600"],
    ["5° Puesto", "$ 296.000"],
    ["6° Puesto", "$ 197.300"],
  ],
}
,
{
  categoria: "Ext. 3 y + edad",
  premios: [
    ["1° Puesto", "$ 1.965.300"],
    ["2° Puesto", "$ 589.600"],
    ["3° Puesto", "$ 491.300"],
    ["4° Puesto", "$ 393.000"],
    ["5° Puesto", "$ 294.800"],
    ["6° Puesto", "$ 196.500"],
  ],
}
,
{
  categoria: "Clásico Potrillos",
  premios: [
    ["1° Puesto", "$ 3.400.000"],
    ["2° Puesto", "$ 1.020.000"],
    ["3° Puesto", "$ 850.000"],
    ["4° Puesto", "$ 680.000"],
    ["5° Puesto", "$ 510.000"],
    ["6° Puesto", "$ 340.000"],
  ],
}
,
{
  categoria: "Clásico Adultos",
  premios: [
    ["1° Puesto", "$ 3.000.000"],
    ["2° Puesto", "$ 900.000"],
    ["3° Puesto", "$ 750.000"],
    ["4° Puesto", "$ 600.000"],
    ["5° Puesto", "$ 450.000"],
    ["6° Puesto", "$ 300.000"],
  ],
}
,
  // Agrega el resto igual que arriba (por brevedad solo puse dos)
];

const Escalas = () => {
  return (
    <>
      <header className="header-pages">
        <Navbar />
      </header>

      <main className="main-inicio main-pages">

        <div className="container-titulo-pages">
          <h3 className="titulo-pages">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-record-fill punto-color-titulo"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"
              />
            </svg>
            Escala de Premios
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-escalas">
          {escalas.map((escala, index) => (
            <div className="container-tabla-escalas" key={index}>
              <div className="titulo-categoria">
                <strong>{escala.categoria}</strong>
              </div>
              <table className="tabla-escala">
                <thead>
                  <tr>
                    <th className="titulos-tabla">Puesto</th>
                    <th className="titulos-tabla">Premio</th>
                  </tr>
                </thead>
                <tbody>
                  {escala.premios.map(([puesto, premio], i) => (
                    <tr className="filas-estadisticas" key={i}>
                      <td className="tabla-text-negro">{puesto}</td>
                      <td className="tabla-text-negro">{premio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </main>

    </>
  );
};

export default Escalas;
