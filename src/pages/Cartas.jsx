// src/pages/Cartas.jsx
import React from "react";
import Navbar from "../../components/Navbar"; // Componente de navegación
import "./TablasPages.css"; // Asegurate de crear este archivo si aún no existe

const cartas = [
  {
    titulo: "Llamado a inscriptos - 4 de Agosto",
    link: "https://drive.google.com/file/d/1rExKZAi2w-mXeTZFj-Qt-ThxkzZ_I0Gp/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 21 de Julio",
    link: "https://drive.google.com/file/d/1G7uwS9yGKsiyf0jU4NEcQLS5uAr0wmOn/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 7 de Julio",
    link: "https://drive.google.com/file/d/1GUMCdxsArJQW7mXE5_5O_1J_zfwpz0G7/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 23 de Junio",
    link: "https://drive.google.com/file/d/1pAoH1TS1AzsVhbrVKH-g8kDvHwIJV5E7/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 2 de Junio",
    link: "https://drive.google.com/file/d/1zISintQ-hVPDtJ9rOPoN-9ZsvszjuPO9/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 19 de Mayo",
    link: "https://drive.google.com/file/d/1UFU0d7Ph0PxqmsK0uwktCj73gf2Y1a5q/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 5 de Mayo",
    link: "https://drive.google.com/file/d/1LVfSsQDxuRqWn51ym--N8RwemEsMkbeU/view?usp=sharing",
  },
  {
    titulo: "Llamado a inscriptos - 21 de Abril",
    link: "https://drive.google.com/file/d/1OX4bsOoVeZB_lOoTIt_CRpuo-K15YYQj/view?usp=sharing",
  },
];

const Cartas = () => {
  return (
    <>
      <header className="header-pages">
        <Navbar />
      </header>

      <main className="main-inicio main-pages">
        <a
          className="whatsapp-icon whatsapp-icon-page1"
          href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          title="Hace tu consulta mediante nuestro chat de whatsapp"
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
              <path
                fillRule="evenodd"
                d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"
              />
            </svg>
            Cartas de llamadas
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-programas">
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Próxima Reunión</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {cartas.map((carta, i) => (
                <tr key={i}>
                  <td>{carta.titulo.toUpperCase()}</td>
                  <td>
                    <a href={carta.link} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-file-pdf-fill logo-pdf" title="Descargar Carta de Llamada"></i>
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

export default Cartas;
