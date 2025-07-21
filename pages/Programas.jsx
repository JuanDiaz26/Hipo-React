// src/pages/Programas.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const programas = [
  {
    nombre: "Programa nº 14 - 13 de Julio",
    link: "https://drive.google.com/archivo-13julio",
  },
  {
    nombre: "Programa nº 15 - 27 de Julio",
    link: "https://drive.google.com/archivo-27julio",
  },
  {
    nombre: "Programa nº 16 - 10 de Agosto",
    link: "https://drive.google.com/archivo-10agosto",
  },
  {
    nombre: "Programa nº 17 - 24 de Agosto",
    link: "https://drive.google.com/archivo-24agosto",
  },
  {
    nombre: "Programa nº 18 - 7 de Septiembre",
    link: "https://drive.google.com/archivo-7septiembre",
  },
  {
    nombre: "Programa nº 19 - 24 de Septiembre",
    link: "https://drive.google.com/archivo-24septiembre",
  },
];

const Programas = () => {
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
            Programas
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-programas">
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Fecha de reunión</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {programas.map((programa, index) => (
                <tr key={index}>
                  <td>{programa.nombre}</td>
                  <td>
                    <a href={programa.link} target="_blank" rel="noopener noreferrer">
                      <i
                        className="bi bi-file-pdf-fill logo-pdf"
                        title="Descargar Programa"
                      ></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Programas;
