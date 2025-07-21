import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const Estadisticas = () => {
  const jockeys = [
    "Rodriguez, Matias Agustin",
    "Vizcarra, Jose Alfredo",
    "Medina, Lucas Santiago",
    "Suarez, Hector Ariel",
    "Bethencourt, Julian Enrique",
    "Brito, Francisco Martin",
    "Barrionuevo, Sergio Ramon Eduardo",
    "Gonzalez, Lucas"
  ];

  const cuidadores = [
    "Martinez, Julio Cesar",
    "Flores, Marcos Elias",
    "Acosta, Luis Antonio",
    "Caceres, Martin Eduardo",
    "Reyes, Pedro Manuel",
    "Carrizo, Ruben Dario",
    "Gomez, Cristian Javier",
    "Morales, Fabian Alberto"
  ];

  const caballerizas = [
    "Don Ruben",
    "Los Amigos",
    "El Fortin",
    "San Cayetano",
    "La Herradura",
    "Las Palmeras",
    "Santa Elena",
    "Los Mellizos"
  ];

  return (
    <>
      <Navbar variant="pages" />
      <main className="main-inicio main-pages">
        <div className="container-titulo-pages">
          <h3 className="titulo-pages">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
            </svg>
            Estadísticas
          </h3>
        </div>

        <div className="separador-pages"></div>

        {/* Botones de navegación rápida */}
        <div className="text-center my-4">
          <a href="#jockeys" className="btn btn-success m-2">Jockeys</a>
          <a href="#cuidadores" className="btn btn-success m-2">Cuidadores</a>
          <a href="#caballerizas" className="btn btn-success m-2">Caballerizas</a>
        </div>

        {/* Tabla de Jockeys */}
        <div id="jockeys" className="container-programas">
          <h5 className="subtitulo-tabla">Jockeys</h5>
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Jockey</th>
                <th>1° Puestos</th>
              </tr>
            </thead>
            <tbody>
              {jockeys.map((jockey, i) => (
                <tr key={i}>
                  <td>{jockey}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla de Cuidadores */}
        <div id="cuidadores" className="container-programas">
          <h5 className="subtitulo-tabla">Cuidadores</h5>
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Cuidador</th>
                <th>1° Puestos</th>
              </tr>
            </thead>
            <tbody>
              {cuidadores.map((cuidador, i) => (
                <tr key={i}>
                  <td>{cuidador}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla de Caballerizas */}
        <div id="caballerizas" className="container-programas">
          <h5 className="subtitulo-tabla">Caballerizas</h5>
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Caballeriza</th>
                <th>1° Puestos</th>
              </tr>
            </thead>
            <tbody>
              {caballerizas.map((caballeriza, i) => (
                <tr key={i}>
                  <td>{caballeriza}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Estadisticas;
