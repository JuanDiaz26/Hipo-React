// src/pages/Escalas.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const escalas = [
  {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
    {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
    {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
    {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
    {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
    {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 829.000"],
      ["2° Puesto", "$ 248.700"],
      ["3° Puesto", "$ 207.250"],
      ["4° Puesto", "$ 165.800"],
      ["5° Puesto", "$ 124.350"],
      ["6° Puesto", "$ 82.900"],
    ],
  },
  {
    categoria: "Potrillos",
    premios: [
      ["1° Puesto", "$ 1.492.800"],
      ["2° Puesto", "$ 447.840"],
      ["3° Puesto", "$ 373.200"],
      ["4° Puesto", "$ 298.560"],
      ["5° Puesto", "$ 223.920"],
      ["6° Puesto", "$ 149.280"],
    ],
  },
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
