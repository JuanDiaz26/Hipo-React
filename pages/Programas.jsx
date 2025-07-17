import React from "react";
import Navbar from "../components/Navbar"; // Ruta al componente Navbar
import "./Programas.css"; // Estilos específicos de la página de programas

const Programas = () => {
  return (
    <>
      <header className="header-pages">
        <Navbar />
      </header>

      <main className="main-inicio main-pages">
        <div className="container-titulo-pages">
          <h3 className="titulo-pages">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
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
              <tr>
                <td>Programa nº 14 - 13 de Julio</td>
                <td><a href="https://drive.google.com/archivo-13julio" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
              <tr>
                <td>Programa nº 15 - 27 de Julio</td>
                <td><a href="https://drive.google.com/archivo-27julio" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
              <tr>
                <td>Programa nº 16 - 10 de Agosto</td>
                <td><a href="https://drive.google.com/archivo-10agosto" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
              <tr>
                <td>Programa nº 17 - 24 de Agosto</td>
                <td><a href="https://drive.google.com/archivo-24agosto" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
              <tr>
                <td>Programa nº 18 - 7 de Septiembre</td>
                <td><a href="https://drive.google.com/archivo-7septiembre" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
              <tr>
                <td>Programa nº 19 - 24 de Septiembre</td>
                <td><a href="https://drive.google.com/archivo-24septiembre" target="_blank"><i className="bi bi-file-pdf-fill logo-pdf"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Programas;
