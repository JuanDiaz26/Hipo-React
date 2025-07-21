import React from 'react';
import Navbar from '../components/Navbar';
import './TablasPages.css'; // Asegurate que este archivo contenga los estilos específicos

const resultados = [
  {
    nombre: "Resultados nº 13 - 4 de Agosto",
    link: "https://drive.google.com/file/d/1iOYriNzVDtFK6fgN7OyNmTKIK2-eZuPG/view?usp=drive_link",
  },
  {
    nombre: "Resultados nº 12 - 21 de Julio",
    link: "https://drive.google.com/file/d/1hbTdPGYttZq6tlv1BrVhV_xLEYMt_g3X/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 11 - 7 de Julio",
    link: "https://drive.google.com/file/d/1kC7cutZXp6cNl69NmDyTS6R17SW5WCOG/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 10 - 23 de Junio",
    link: "https://drive.google.com/file/d/1w9F5mEbQY8L5987H_FNrmBFdxODZMnFb/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 9 - 2 de Junio",
    link: "https://drive.google.com/file/d/1NO5-krtfPUJfCAEZLjHVKCrEFAxfoGKG/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 8 - 19 de Mayo",
    link: "https://drive.google.com/file/d/1J4QSMvyxDHZYSCes4e-CThFgyQgiu1wo/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 7 - 5 de Mayo",
    link: "https://drive.google.com/file/d/1wwX78cZtV3A36JzXnsZxleDf2RUlVqOy/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 6 - 21 de Abril",
    link: "https://drive.google.com/file/d/1C2cdHNhglCr1vXYBWPf5MPCmj9s29c8F/view?usp=sharing",
  },
];

const Resultados = () => {
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
            Resultados
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-programas">
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Reunión</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((resultado, index) => (
                <tr key={index}>
                  <td>{resultado.nombre}</td>
                  <td>
                    <a href={resultado.link} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-file-pdf-fill logo-pdf" title="Descargar Resultado Oficial"></i>
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

export default Resultados;
