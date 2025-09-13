// src/pages/Inscripcion.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

const Inscripcion = () => {
  const inscripciones = [
    {
      nombre: "Reunión nº 13 - 4 de Agosto",
      link: "https://drive.google.com/file/d/1g-dLrQVSRBj8ud08wDa4SjdldBxHyW2Q/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 12 - 21 de Julio",
      link: "https://drive.google.com/file/d/1JONGYDusgGqsd4NE-RC7MKifRcp0FexS/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 11 - 7 de Julio",
      link: "https://drive.google.com/file/d/10KMhxVgH1sefwk4gYoulpMYtne4e1Uvq/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 10 - 23 de Junio",
      link: "https://drive.google.com/file/d/1O0JDkcuqynBgJnRKNrc8tR-BgIe9325_/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 9 - 2 de Junio",
      link: "https://drive.google.com/file/d/1atGKvUjIpuP_IpsncGMtsmOYV__P3zF0/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 8 - 19 de Mayo",
      link: "https://drive.google.com/file/d/1jnAeZh0hzvIchSA0cIvrV3FIzRL0yo9_/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 7 - 5 de Mayo",
      link: "https://drive.google.com/file/d/1LgT8E2zeGOfUM8vs_rm_n_oR5p8Klmqi/view?usp=sharing",
    },
    {
      nombre: "Reunión nº 6 - 21 de Abril",
      link: "https://drive.google.com/file/d/1hrjK_SvhbTnxdEfY8k6_s5rgwANbiDJO/view?usp=sharing",
    },
  ];

  return (
    <>
      <Navbar variant="pages" />
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
            Inscripciones
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-programas">
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Inscriptos a la reunión</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {inscripciones.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="bi bi-file-pdf-fill logo-pdf"
                        title="Descargar inscripciones"
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

export default Inscripcion;
