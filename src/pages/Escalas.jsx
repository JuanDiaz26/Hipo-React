// src/pages/Escalas.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

const escalas = [
  {
    categoria: "Condicional",
    premios: [
      ["1° Puesto", "$ 1.586.200,00"],
      ["2° Puesto", "$ 475.900,00"],
      ["3° Puesto", "$ 396.600,00"],
      ["4° Puesto", "$ 317.200,00"],
      ["5° Puesto", "$ 237.900,00"],
      ["6° Puesto", "$ 158.600,00"],
    ],
  },
  {
    categoria: "Potrillos",
    premios: [
      ["1° Puesto", "$ 2.856.300,00"],
      ["2° Puesto", "$ 856.800,00"],
      ["3° Puesto", "$ 714.000,00"],
      ["4° Puesto", "$ 571.200,00"],
      ["5° Puesto", "$ 428.500,00"],
      ["6° Puesto", "$ 285.600,00"],
    ],
  },
  {
    categoria: "3 años y + Edad",
    premios: [
      ["1° Puesto", "$ 2.276.100,00"],
      ["2° Puesto", "$ 682.800,00"],
      ["3° Puesto", "$ 569.000,00"],
      ["4° Puesto", "$ 455.200,00"],
      ["5° Puesto", "$ 341.400,00"],
      ["6° Puesto", "$ 227.600,00"],
    ],
  },
  {
    categoria: "Especial",
    premios: [
      ["1° Puesto", "$ 2.387.600,00"],
      ["2° Puesto", "$ 716.300,00"],
      ["3° Puesto", "$ 596.900,00"],
      ["4° Puesto", "$ 477.500,00"],
      ["5° Puesto", "$ 358.200,00"],
      ["6° Puesto", "$ 238.700,00"],
    ],
  },
  {
    categoria: "Clasico Potrillos",
    premios: [
      ["1° Puesto", "$ 3.268.000,00"],
      ["2° Puesto", "$ 980.300,00"],
      ["3° Puesto", "$ 817.000,00"],
      ["4° Puesto", "$ 653.600,00"],
      ["5° Puesto", "$ 490.200,00"],
      ["6° Puesto", "$ 326.800,00"],
    ],
  },
  {
    categoria: "Clasico Adultos",
    premios: [
      ["1° Puesto", "$ 2.864.500,00"],
      ["2° Puesto", "$ 859.300,00"],
      ["3° Puesto", "$ 716.200,00"],
      ["4° Puesto", "$ 573.000,00"],
      ["5° Puesto", "$ 429.700,00"],
      ["6° Puesto", "$ 286.400,00"],
    ],
  },
  {
    categoria: "Extraoficial",
    premios: [
      ["1° Puesto", "$ 1.080.100,00"],
      ["2° Puesto", "$ 324.100,00"],
      ["3° Puesto", "$ 270.100,00"],
      ["4° Puesto", "$ 216.000,00"],
      ["5° Puesto", "$ 162.000,00"],
      ["6° Puesto", "$ 108.000,00"],
    ],
  },
  {
    categoria: "Extraoficial 3 años",
    premios: [
      ["1° Puesto", "$ 2.377.900,00"],
      ["2° Puesto", "$ 713.500,00"],
      ["3° Puesto", "$ 594.400,00"],
      ["4° Puesto", "$ 475.500,00"],
      ["5° Puesto", "$ 356.700,00"],
      ["6° Puesto", "$ 237.800,00"],
    ],
  },
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
              <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
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
