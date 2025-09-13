// src/pages/Inscripcion.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

const Inscripcion = () => {
  const inscripciones = [
  { nombre: "Reunión nº 16 - 24 de Septiembre", link: "https://drive.google.com/file/d/1L66XoVMZNm-LtU9_InkvwR63lfLBzLWd/view?usp=sharing" },
  { nombre: "Reunión nº 15 - 7 de Septiembre", link: "https://drive.google.com/file/d/1g_Oz7bwhHD2wDjD2cXE_90ugLsGnYii3/view?usp=sharing" },
  { nombre: "Reunión nº 14 - 24 de Agosto", link: "https://drive.google.com/file/d/1LxDxTRWLQyAJaef7VMMa4zR1KP-uR4FH/view?usp=sharing" },
  { nombre: "Reunión nº 13 - 10 de Agosto", link: "https://drive.google.com/file/d/12HO8GMd2XrenJrUm9l6AV2Qy6oKiff3-/view?usp=sharing" },
  { nombre: "Reunión nº 12 - 27 de Julio", link: "https://drive.google.com/file/d/1KJhii_G5L0ZnXo3iZFaabDYSFSPie7Zn/view?usp=sharing" },
  { nombre: "Reunión nº 11 - 13 de Julio", link: "https://drive.google.com/file/d/1sz9x1RiDc4i0xgNWWjPUGT1wVAt2cna0/view?usp=sharing" },
  { nombre: "Reunión nº 9 - 22 de Junio",  link: "https://drive.google.com/file/d/1OYjiHlmF8BtT0Gl_ZsjY80TPxI0x_DbX/view?usp=sharing" },
  { nombre: "Reunión nº 10 - 8 de Junio", link: "https://drive.google.com/file/d/1vuc4o0UsRZfKCYdJa1pdpg7eddUh4QMR/view?usp=sharing" },
  { nombre: "Reunión nº 8 - 25 de Mayo",  link: "https://drive.google.com/file/d/1TgxPIfcz7ih8GpWtKW1OM8mkHaQo6QuT/view?usp=sharing" },
  { nombre: "Reunión nº 7 - 11 de Mayo",  link: "https://drive.google.com/file/d/1_iQ5vdYheNFMNX2btDrlih5cCwodH1EP/view?usp=sharing" },
  { nombre: "Reunión nº 6 - 26 de Abril",  link: "https://drive.google.com/file/d/1RxC0RpPGPitQbXCrEAv2P10RZiccWaYJ/view?usp=sharing" },
  { nombre: "Reunión nº 5 - 13 de Abril",  link: "https://drive.google.com/file/d/1gvxSkjJGJHaz6fjRKt4405x84zOZwRXW/view?usp=sharing" },
  { nombre: "Reunión nº 4 - 30 de Marzo",  link: "https://drive.google.com/file/d/15xH-UKNnYcRRs_S3GDTnDaqNPNSCx3ch/view?usp=sharing" },
  { nombre: "Reunión nº 3 - 16 de Marzo",  link: "https://drive.google.com/file/d/1XBtvHWvLai35hcHJZ6S1DpFdTg3gvKzI/view?usp=sharing" },
  { nombre: "Reunión nº 2 - 23 de Febrero", link: "https://drive.google.com/file/d/1o6CbvQn-bIpMVwG3LNVxcTQsYfqLifIf/view?usp=sharing" },
  { nombre: "Reunión nº 1 - 16 de Febrero", link: "https://drive.google.com/file/d/1-lTss8ZrOkJOVs7lyBTm4sdnBXCznYo7/view?usp=sharing" },
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
                  <td>{item.nombre.toUpperCase()}</td>
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
