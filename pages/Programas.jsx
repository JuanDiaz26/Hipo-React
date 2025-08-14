// src/pages/Programas.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const programas = [
  { nombre: "Reunión nº 13 - 10 de Agosto", link: "https://drive.google.com/file/d/1UwOKeZVKwGaAkgt12TK28m0RBH2_MzMC/view?usp=sharing" },
  { nombre: "Reunión nº 12 - 27 de Julio", link: "https://drive.google.com/file/d/1tB5CgH3XZFxDm-4yDFulhpQWYaX0E75Z/view?usp=sharing" },
  { nombre: "Reunión nº 11 - 13 de Julio", link: "https://drive.google.com/file/d/1Jenn38Q2T8i9FQXLokq5tOaiumtYGS9l/view?usp=sharing" },
  { nombre: "Reunión nº 9 - 22 de Junio",  link: "https://drive.google.com/file/d/15Lf-9G_B8z83uSYMnmThfxPwwjKIDlPc/view?usp=sharing" },
  { nombre: "Reunión nº 10 - 8 de Junio", link: "https://drive.google.com/file/d/1ZXKEG-CIXQBuwmpSwiwwFJcfgp21LLEG/view?usp=sharing" },
  { nombre: "Reunión nº 8 - 25 de Mayo",  link: "https://drive.google.com/file/d/14fjaoVEidIiWddlH2bJEX9Y0ypla5CWj/view?usp=sharing" },
  { nombre: "Reunión nº 7 - 11 de Mayo",  link: "https://drive.google.com/file/d/1CH5JhMxyzvX_9eYNMIDtCmrc83uOySJa/view?usp=sharing" },
  { nombre: "Reunión nº 6 - 26 de Abril",  link: "https://drive.google.com/file/d/1p6vHcmqwjapDWohcEfcHefplnO47cI0z/view?usp=sharing" },
  { nombre: "Reunión nº 5 - 13 de Abril",  link: "https://drive.google.com/file/d/1ZKj4olqLVupPFuZb7Vh1CFN3oKTbsAqR/view?usp=sharing" },
  { nombre: "Reunión nº 4 - 30 de Marzo",  link: "https://drive.google.com/file/d/1cEy87_EJFiRbXlI9Ee4ni6SVSnAjZ8Tz/view?usp=sharing" },
  { nombre: "Reunión nº 3 - 16 de Marzo",  link: "https://drive.google.com/file/d/1yr2U6VwysPQbn4l4CrxTKA0QaWmPjmzA/view?usp=sharing" },
  { nombre: "Reunión nº 2 - 23 de Febrero", link: "https://drive.google.com/file/d/1X-8tLkMN9bxhz_US0exew6eGeFZee4Xn/view?usp=sharing" },
  { nombre: "Reunión nº 1 - 16 de Febrero", link: "https://drive.google.com/file/d/1Wnkb-7-rVsueYN7N7RKJnAeine3kAW7k/view?usp=sharing" },
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
