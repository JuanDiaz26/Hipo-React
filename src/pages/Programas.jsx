// src/pages/Programas.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

const programas = [
  { nombre: "Reunión nº 16 - 24 de Septiembre", link: "https://drive.google.com/file/d/1XUej832-cpyD6P2OFq_PApzg0cYWl5zj/view?usp=sharing" },
  { nombre: "Reunión nº 15 - 7 de Septiembre", link: "https://drive.google.com/file/d/17c6YbUNb_4GFRut3C3C1KZWAaZzPSy2o/view?usp=sharing" },
  { nombre: "Reunión nº 14 - 24 de Agosto", link: "https://drive.google.com/file/d/1M9VZqdpMSJyi1rarpP6yQSlpcynDbK-0/view?usp=sharing" },
  { nombre: "Reunión nº 13 - 10 de Agosto", link: "https://drive.google.com/file/d/1RrqY6CLtKwXqOo85riXoHBPAHq1lB40I/view?usp=sharing" },
  { nombre: "Reunión nº 12 - 27 de Julio", link: "https://drive.google.com/file/d/1wwdDhchSxykwxWEnXCNOKLs-INdbdbYR/view?usp=sharing" },
  { nombre: "Reunión nº 11 - 13 de Julio", link: "https://drive.google.com/file/d/1C1-F7CLhzkuHCRVjfNHAmo7S3pOBpiSV/view?usp=sharing" },
  { nombre: "Reunión nº 9 - 22 de Junio",  link: "https://drive.google.com/file/d/1slfXnFDBYQluSze6IHmo9qJmLVLWeYU2/view?usp=sharing" },
  { nombre: "Reunión nº 10 - 8 de Junio", link: "https://drive.google.com/file/d/1P7DSUluYFeX7qBUATNrWpnLrv1wLGkeX/view?usp=sharing" },
  { nombre: "Reunión nº 8 - 25 de Mayo",  link: "https://drive.google.com/file/d/1jBZSkJFBFMzQfMxun-l5reGU4R_cegaf/view?usp=sharing" },
  { nombre: "Reunión nº 7 - 11 de Mayo",  link: "https://drive.google.com/file/d/1o5hsY1VizfgGSmMtmZosFMWLGo9mJviL/view?usp=sharing" },
  { nombre: "Reunión nº 6 - 26 de Abril",  link: "https://drive.google.com/file/d/1u0777Ewb4Rt9mvEegEg_d3GnSChFbjdO/view?usp=sharing" },
  { nombre: "Reunión nº 5 - 13 de Abril",  link: "https://drive.google.com/file/d/1WwJ9VpwvIP-rYDI2esUUN1p4i1dAWahn/view?usp=sharing" },
  { nombre: "Reunión nº 4 - 30 de Marzo",  link: "https://drive.google.com/file/d/1jWBNfoPYLteyhOHT6zXjdH5lg2c2XKgn/view?usp=sharing" },
  { nombre: "Reunión nº 3 - 16 de Marzo",  link: "https://drive.google.com/file/d/1PpecK-ePocV9jJBF4aKfrGEIonLJlZZD/view?usp=sharing" },
  { nombre: "Reunión nº 2 - 23 de Febrero", link: "https://drive.google.com/file/d/1RnNe2rl6UQU5E5CmVDTlfVSSNCJCNNk_/view?usp=sharing" },
  { nombre: "Reunión nº 1 - 16 de Febrero", link: "https://drive.google.com/file/d/1nmai42BIDXeC-raDAljnH8VOxkEJVBZ8/view?usp=sharing" },
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
                  <td>{programa.nombre.toUpperCase()}</td>
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
