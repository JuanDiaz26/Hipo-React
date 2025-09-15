// src/pages/Cartas.jsx
import React from "react";
import Navbar from "../../components/Navbar"; // Componente de navegación
import "./TablasPages.css"; // Asegurate de crear este archivo si aún no existe

const cartas = [
  { titulo: "Llamado a inscriptos - 24 de Septiembre", link: "https://drive.google.com/file/d/1FBjG8mBKgR4Lj4GYYTSqCacD9SOmsxUc/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 7 de Septiembre",  link: "https://drive.google.com/file/d/1tFF2M7c_uSdQp17lIZwaByxb5Rd-qWr0/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 24 de Agosto",     link: "https://drive.google.com/file/d/1lrP6lNi696RXXpvla1spCsWXBNy4Rh1z/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 10 de Agosto",     link: "https://drive.google.com/file/d/1iZrKNUZRSwNYqVHoUQri_eIYqMFtiZB7/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 27 de Julio",      link: "https://drive.google.com/file/d/1HCLm5401bolz8h57GcURfotOt0rIliG5/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 13 de Julio",      link: "https://drive.google.com/file/d/1AwH6LA0TGzKz7snqF_oedPGpB5wYof58/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 22 de Junio",      link: "https://drive.google.com/file/d/17y-MTsbEMg153Rn8k7uP7ZUEFPAvXkIC/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 8 de Junio",       link: "https://drive.google.com/file/d/1_zgqwu4F2y7w55LY3vYgS363-_oUiFFx/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 25 de Mayo",       link: "https://drive.google.com/file/d/1ZK6PxsTaGYK-96Fi1hV1DWdLhkiJ-sAy/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 11 de Mayo",       link: "https://drive.google.com/file/d/10ZQJxCqC8Fu96s1WS6v4UiyeCuF8Uoqv/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 26 de Abril",      link: "https://drive.google.com/file/d/1mcfTnIHyKXhrwIQ4BiwxAzIYgMb3qZLd/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 13 de Abril",      link: "https://drive.google.com/file/d/1p96g1GzzBXT6pcl7K6is_WJW1v7U4goq/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 30 de Marzo",      link: "https://drive.google.com/file/d/1o_OdcB4Le4nGdlcCOIXCLZcRQhxADaok/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 16 de Marzo",      link: "https://drive.google.com/file/d/1mirjywu6NFGOzF_ASoCeSySHOtAxiWoT/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 23 de Febrero",    link: "https://drive.google.com/file/d/15cDaROkxO00rcsCmdZc9tj-dyugFfITk/view?usp=sharing" },
  { titulo: "Llamado a inscriptos - 16 de Febrero",    link: "https://drive.google.com/file/d/1X3M9XFSbKuEXWTs4CuAM969-myyXFsmN/view?usp=sharing" },
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
