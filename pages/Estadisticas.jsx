import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const Estadisticas = () => {
  // ===== Datos actualizados a la Reunión Nº 13 =====
  const jockeys = [
    { nombre: "VIZCARRA, Jose Alfredo", oficial: 21, extra: 9 },
    { nombre: "SUAREZ, Hector Ariel", oficial: 12, extra: 4 },
    { nombre: "BRITO, Francisco Martin", oficial: 8, extra: 1 },
    { nombre: "RODRIGUEZ, Matias Agustin", oficial: 7, extra: 2 },
    { nombre: "MORAN, Facundo Ricardo", oficial: 6, extra: 1 },
    { nombre: "CAMOS, Ruben Oscar", oficial: 5, extra: 2 },
    { nombre: "VAI, Angel Nazareno", oficial: 5, extra: 0 },
    { nombre: "OSSAN, Benjamin", oficial: 4, extra: 0 },
    { nombre: "CARAM, Cristian Adrian", oficial: 3, extra: 2 },
    { nombre: "ALARCON, Pablo Javier", oficial: 3, extra: 1 },
    { nombre: "MARRADES, Walter Maximiliano", oficial: 3, extra: 1 },
    { nombre: "RUIZ, Roberto Manuel", oficial: 3, extra: 0 },
    { nombre: "BETHENCOURT, Julian Enrique", oficial: 2, extra: 2 },
    { nombre: "CARRIZO, José Benito", oficial: 2, extra: 0 },
    { nombre: "VALDEZ, Raul", oficial: 2, extra: 0 },
    { nombre: "AGUIRREZ, Jorge Agustin", oficial: 1, extra: 0 },
    { nombre: "ROBLEDO, Roberto Damian", oficial: 1, extra: 0 },
    { nombre: "SALAZAR, Ramiro Exequiel", oficial: 1, extra: 0 },
    { nombre: "VILLEGAS, Angel Sebastian", oficial: 1, extra: 0 },
    { nombre: "GONZALEZ, Lucas", oficial: 0, extra: 2 },
    { nombre: "FIGUEROA, Walter Anibal", oficial: 0, extra: 1 },
    { nombre: "ROJAS, Cristian Nahuel", oficial: 0, extra: 1 },
  ];

  const cuidadores = [
    { nombre: "ASSAD, Cesar Alberto", oficial: 13, extra: 0 },
    { nombre: "SAEZ, Juan Edmundo", oficial: 9, extra: 1 },
    { nombre: "BRITO, Luis Orlando", oficial: 5, extra: 2 },
    { nombre: "GOMEZ OMIL, German", oficial: 4, extra: 2 },
    { nombre: "NIEVA, Sergio Rene", oficial: 4, extra: 1 },
    { nombre: "MEDINA, Roberto Miguel", oficial: 4, extra: 0 },
    { nombre: "RAMOS, Daniel Sebastian", oficial: 3, extra: 7 },
    { nombre: "TEJEDA, Juan Alberto", oficial: 3, extra: 2 },
    { nombre: "GALLEGO, Jose Miguel", oficial: 3, extra: 1 },
    { nombre: "JAIME, Alexis José", oficial: 3, extra: 1 },
    { nombre: "CHIRINO, Carlos Alberto", oficial: 3, extra: 0 },
    { nombre: "NOGUERA ASSAD, Lazaro", oficial: 3, extra: 0 },
    { nombre: "PALMA, Manuel Segundo", oficial: 3, extra: 0 },
    { nombre: "PIQUERA, Gaston S.", oficial: 3, extra: 0 },
    { nombre: "RODRIGUEZ, Rafael Orlando", oficial: 3, extra: 0 },
    { nombre: "SPEZIALE, Sergio Miguel", oficial: 3, extra: 0 },
    { nombre: "VALDEZ, Gustavo Josue", oficial: 2, extra: 2 },
    { nombre: "JIMENEZ, Juan Francisco", oficial: 2, extra: 1 },
    { nombre: "LEGUIZAMON, Guillermo Alberto", oficial: 2, extra: 1 },
    { nombre: "PERALTA, Hector Daniel", oficial: 2, extra: 1 },
    { nombre: "FRIAS, Jose Luis", oficial: 2, extra: 0 },
    { nombre: "MULATORE, Daniel Rosario", oficial: 2, extra: 0 },
    { nombre: "JIMENEZ, Hector Victor", oficial: 1, extra: 1 },
    { nombre: "MURATORE, Francisco Ramon", oficial: 1, extra: 1 },
    { nombre: "REY, Guillermo Omar", oficial: 1, extra: 1 },
    { nombre: "BARRIENTOS, Daniel David", oficial: 1, extra: 0 },
    { nombre: "CUELLAR, Sergio David", oficial: 1, extra: 0 },
    { nombre: "MARTIN, Jorge Luis", oficial: 1, extra: 0 },
    { nombre: "SOLORZANO, Mariela Del Valle", oficial: 1, extra: 0 },
    { nombre: "SUAREZ. Marcelo Osvaldo", oficial: 1, extra: 0 },
    { nombre: "VILDOZA, Enrique Fabian", oficial: 1, extra: 0 },
    { nombre: "ALDERETE, Enrique José", oficial: 0, extra: 1 },
    { nombre: "LAZARTE, Hugo Alberto", oficial: 0, extra: 1 },
    { nombre: "LOBO, Maria de los Angeles", oficial: 0, extra: 1 },
    { nombre: "SEME, Julio Orlando", oficial: 0, extra: 1 },
  ];

  const caballerizas = [
    { nombre: "ABUELA TETE", oficial: 8, extra: 1 },
    { nombre: "MONTERRICO", oficial: 5, extra: 0 },
    { nombre: "SEBA Y CAMI", oficial: 4, extra: 1 },
    { nombre: "RUBIO'S", oficial: 3, extra: 5 },
    { nombre: "EL PILI", oficial: 3, extra: 1 },
    { nombre: "COCO JEREZ", oficial: 3, extra: 0 },
    { nombre: "DEL VALLE A.A.", oficial: 3, extra: 0 },
    { nombre: "DON VALIENTE", oficial: 3, extra: 0 },
    { nombre: "EL PRODE", oficial: 3, extra: 0 },
    { nombre: "L.C.J.", oficial: 3, extra: 0 },
    { nombre: "LOS 4 DE CORDOBA (SDE)", oficial: 3, extra: 0 },
    { nombre: "EL PONY LEGUIZAMON", oficial: 2, extra: 1 },
    { nombre: "ESMERALDA", oficial: 2, extra: 1 },
    { nombre: "GRAND EDUARD", oficial: 2, extra: 1 },
    { nombre: "LOS MOLESTOS", oficial: 2, extra: 1 },
    { nombre: "LOS TIOS", oficial: 2, extra: 1 },
    { nombre: "MARIA ISABEL", oficial: 2, extra: 1 },
    { nombre: "C.H. - BDC", oficial: 2, extra: 0 },
    { nombre: "EST. SAN GREGORIO (SDE)", oficial: 2, extra: 0 },
    { nombre: "LOS MOLESTINES", oficial: 2, extra: 0 },
    { nombre: "OJO TURCO", oficial: 2, extra: 0 },
    { nombre: "TRAMO 20 (SDE)", oficial: 2, extra: 0 },
    { nombre: "BANDINI", oficial: 1, extra: 1 },
    { nombre: "CHANTA", oficial: 1, extra: 1 },
    { nombre: "DON PABLO", oficial: 1, extra: 1 },
    { nombre: "DON SILVERIO", oficial: 1, extra: 1 },
    { nombre: "EL BALON", oficial: 1, extra: 1 },
    { nombre: "5 DE COPAS", oficial: 1, extra: 0 },
    { nombre: "BENITO A. Y J.R.", oficial: 1, extra: 0 },
    { nombre: "BETO", oficial: 1, extra: 0 },
    { nombre: "CELE Y SABRI", oficial: 1, extra: 0 },
    { nombre: "CUATRO SOLES", oficial: 1, extra: 0 },
    { nombre: "DON ANTONIO", oficial: 1, extra: 0 },
    { nombre: "E.S.T. PIEDRA GRANDE", oficial: 1, extra: 0 },
    { nombre: "EL CALIFA", oficial: 1, extra: 0 },
    { nombre: "EL TRIANGULO", oficial: 1, extra: 0 },
    { nombre: "ESPERANZA", oficial: 1, extra: 0 },
    { nombre: "JUANJO", oficial: 1, extra: 0 },
    { nombre: "LAS 4 HERMANAS (SDE)", oficial: 1, extra: 0 },
    { nombre: "LOS CAMIONEROS", oficial: 1, extra: 0 },
    { nombre: "LUZ DE LUJAN", oficial: 1, extra: 0 },
    { nombre: "NICOLAS T.", oficial: 1, extra: 0 },
    { nombre: "NORITA", oficial: 1, extra: 0 },
    { nombre: "PAPITO JAVIER", oficial: 1, extra: 0 },
    { nombre: "PETY", oficial: 1, extra: 0 },
    { nombre: "PIEDRA GRANDE", oficial: 1, extra: 0 },
    { nombre: "PILAR DEL SOL", oficial: 1, extra: 0 },
    { nombre: "SANTA FEDERACION (SDE)", oficial: 1, extra: 0 },
    { nombre: "TIBY", oficial: 1, extra: 0 },
    { nombre: "DON JULIO", oficial: 0, extra: 2 },
    { nombre: "ANTO Y NAHUEL", oficial: 0, extra: 1 },
    { nombre: "BARCELONA", oficial: 0, extra: 1 },
    { nombre: "DON ALFREDO", oficial: 0, extra: 1 },
    { nombre: "JUAN FRIAS", oficial: 0, extra: 1 },
    { nombre: "LA VICTORIA (CBA)", oficial: 0, extra: 1 },
    { nombre: "LOS CERRILLOS DE SALTA", oficial: 0, extra: 1 },
    { nombre: "LOS EXTRADITABLES", oficial: 0, extra: 1 },
    { nombre: "STUD MANOS BRUJAS", oficial: 0, extra: 1 },
  ];

  // Helpers para totales
  const totalOficial = (arr) => arr.reduce((acc, x) => acc + x.oficial, 0);
  const totalExtra = (arr) => arr.reduce((acc, x) => acc + x.extra, 0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar variant="pages" />
      <main className="main-inicio main-pages">
        <a
          className="whatsapp-icon .whatsapp-icon-page1"
          href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta."
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp wp-icon"></i>
        </a>

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
            <strong>Estadísticas Jockeys 2025 — A la Reunión Nº 13 (10 de Agosto de 2025)</strong>
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
            <tfoot>
              <tr>
                <td></td>
                <td className="tabla-text-negro">Totales</td>
                <td>{totalOficial(jockeys)}</td>
                <td>{totalExtra(jockeys)}</td>
              </tr>
            </tfoot>
          </table>

          {/* Tabla Cuidadores */}
          <div className="titulo-estadisticas" id="cuidadores">
            <strong>Estadísticas Cuidadores 2025 — A la Reunión Nº 13 (10 de Agosto de 2025)</strong>
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
            <tfoot>
              <tr>
                <td></td>
                <td className="tabla-text-negro">Totales</td>
                <td>{totalOficial(cuidadores)}</td>
                <td>{totalExtra(cuidadores)}</td>
              </tr>
            </tfoot>
          </table>

          {/* Tabla Caballerizas */}
          <div className="titulo-estadisticas" id="caballerizas">
            <strong>Estadísticas Caballerizas 2025 — A la Reunión Nº 13 (10 de Agosto de 2025)</strong>
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
            <tfoot>
              <tr>
                <td></td>
                <td className="tabla-text-negro">Totales</td>
                <td>{totalOficial(caballerizas)}</td>
                <td>{totalExtra(caballerizas)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </>
  );
};

export default Estadisticas;
