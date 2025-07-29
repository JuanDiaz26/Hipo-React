import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const Estadisticas = () => {
  const jockeys = [
    { nombre: "Rodriguez, Matias Agustin", oficial: 13, extra: 1 },
    { nombre: "Vizcarra, Jose Alfredo", oficial: 12, extra: 4 },
    { nombre: "Medina, Lucas Santiago", oficial: 9, extra: 1 },
    { nombre: "Suarez, Hector Ariel", oficial: 8, extra: 3 },
    { nombre: "Bethencourt, Julian Enrique", oficial: 7, extra: "-" },
  ];

  const cuidadores = [
    { nombre: "Assad, Cesar Alberto", oficial: 12, extra: "-" },
    { nombre: "Jimenez, Juan Francisco", oficial: 10, extra: 2 },
    { nombre: "Seme, Julio Orlando", oficial: 6, extra: "-" },
    { nombre: "Ramos, Daniel Sebastian", oficial: 5, extra: 1 },
    { nombre: "Brito, Luis Orlando", oficial: 4, extra: 2 },
  ];

  const caballerizas = [
    { nombre: "Seba Y Cami", oficial: 6, extra: "-" },
    { nombre: "E.S.T. Piedra Grande", oficial: 5, extra: "-" },
    { nombre: "Maria Isabel", oficial: 4, extra: 2 },
    { nombre: "Rubio's", oficial: 4, extra: 1 },
    { nombre: "Del Valle A.A.", oficial: 4, extra: "-" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar variant="pages" />
      <main className="main-inicio main-pages">
        <a
          className="whatsapp-icon .whatsapp-icon-page1"
          href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta."
          target="_blank"
        >
          <i className="bi bi-whatsapp wp-icon"></i>
        </a>

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

        <div className="botonesNav">
          <button className="button buttonWpApostar" onClick={() => scrollToSection("jockeys")}>
            <span className="button-content button-est">Jockeys</span>
          </button>
          <button className="button buttonWpApostar" onClick={() => scrollToSection("cuidadores")}>
            <span className="button-content button-est">Cuidadores</span>
          </button>
          <button className="button buttonWpApostar" onClick={() => scrollToSection("caballerizas")}>
            <span className="button-content button-est">Caballerizas</span>
          </button>
        </div>

        <div className="container-estadisticas">

          {/* Tabla Jockeys */}
          <div className="titulo-estadisticas">
            <strong>Estadísticas Jockeys 2025 - Actualizadas 22 de Julio de 2025</strong>
          </div>
          <table id="jockeys">
            <thead>
              <tr>
                <th className="titulos-tabla th-number">Nº</th>
                <th className="titulos-tabla th-nombre">Jockeys</th>
                <th className="titulos-tabla th-ofic">Ofic</th>
                <th className="titulos-tabla th-ofic">Ext.Ofic</th>
              </tr>
            </thead>
            <tbody>
              {jockeys.map((j, index) => (
                <tr key={index} className="filas-estadisticas">
                  <td className="tabla-text-negro">{index + 1}º</td>
                  <td className="tabla-text-negro">{j.nombre}</td>
                  <td>{j.oficial}</td>
                  <td>{j.extra}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabla Cuidadores */}
          <div className="titulo-estadisticas" id="cuidadores">
            <strong>Estadísticas Cuidadores 2025 - Actualizadas 20 de Febrero de 2025</strong>
          </div>
          <table>
            <thead>
              <tr>
                <th className="titulos-tabla th-number">Nº</th>
                <th className="titulos-tabla th-nombre">Cuidadores</th>
                <th className="titulos-tabla th-ofic">Ofic</th>
                <th className="titulos-tabla th-ofic">Ext.Ofic</th>
              </tr>
            </thead>
            <tbody>
              {cuidadores.map((c, index) => (
                <tr key={index} className="filas-estadisticas">
                  <td className="tabla-text-negro">{index + 1}º</td>
                  <td className="tabla-text-negro">{c.nombre}</td>
                  <td>{c.oficial}</td>
                  <td>{c.extra}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabla Caballerizas */}
          <div className="titulo-estadisticas" id="caballerizas">
            <strong>Estadísticas Caballerizas 2025 - Actualizadas 20 de Febrero de 2025</strong>
          </div>
          <table>
            <thead>
              <tr>
                <th className="titulos-tabla th-number">Nº</th>
                <th className="titulos-tabla th-nombre">Caballerizas</th>
                <th className="titulos-tabla th-ofic">Ofic</th>
                <th className="titulos-tabla th-ofic">Ext.Ofic</th>
              </tr>
            </thead>
            <tbody>
              {caballerizas.map((c, index) => (
                <tr key={index} className="filas-estadisticas">
                  <td className="tabla-text-negro">{index + 1}º</td>
                  <td className="tabla-text-negro">{c.nombre}</td>
                  <td>{c.oficial}</td>
                  <td>{c.extra}</td>
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
