import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const tipos = [
  {
    img: "../src/assets/ganador.webp",
    alt: "imagen apuesta a ganador",
    texto: <>Si el caballo que elegís llega en <strong className="strongTiposAp">1º lugar</strong> ganás</>,
  },
  {
    img: "../src/assets/exacta.webp",
    alt: "imagen exacta",
    texto: (
      <>
        Si seleccionás <strong className="strongTiposAp">2 caballos</strong> que lleguen en{" "}
        <strong className="strongTiposAp">1º y 2º lugar</strong> en orden exacto ganás la apuesta
      </>
    ),
  },
  {
    img: "../src/assets/imperfecta.webp",
    alt: "imagen imperfecta",
    texto: (
      <>
        Debés elegir <strong className="strongTiposAp">2 caballos</strong> que lleguen en{" "}
        <strong className="strongTiposAp">1º y 2º lugar</strong> sin importar el orden
      </>
    ),
  },
  {
    img: "../src/assets/trifecta.webp",
    alt: "imagen trifecta",
    texto: (
      <>
        Ganás si escogés <strong className="strongTiposAp">3 caballos</strong> que lleguen en{" "}
        <strong className="strongTiposAp">1º, 2º y 3º lugar</strong> en orden exacto
      </>
    ),
  },
  {
    img: "../src/assets/cuatrifecta.webp",
    alt: "imagen cuatrifecta",
    texto: (
      <>
        Ganás si seleccionás <strong className="strongTiposAp">4 caballos</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º, 2º, 3º y 4º lugar</strong> en orden exacto
      </>
    ),
  },
  {
    img: "../src/assets/doble.webp",
    alt: "imagen doble",
    texto: (
      <>
        Si escogés <strong className="strongTiposAp">2 caballos</strong> de{" "}
        <strong className="strongTiposAp">2 carreras consecutivas</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º lugar</strong> ganás la apuesta doble
      </>
    ),
  },
  {
    img: "../src/assets/triplo.webp",
    alt: "imagen triplo",
    texto: (
      <>
        Si seleccionás <strong className="strongTiposAp">3 caballos</strong> de{" "}
        <strong className="strongTiposAp">3 carreras consecutivas</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º lugar</strong> ganás la apuesta triplo
      </>
    ),
  },
  {
    img: "../src/assets/cuaterna.webp",
    alt: "imagen cuaterna",
    texto: (
      <>
        Si seleccionás <strong className="strongTiposAp">4 caballos</strong> de{" "}
        <strong className="strongTiposAp">4 carreras consecutivas</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º lugar</strong> ganás la apuesta cuaterna
      </>
    ),
  },
  {
    img: "../src/assets/quintuplo.webp",
    alt: "imagen quintuplo",
    texto: (
      <>
        Si seleccionás <strong className="strongTiposAp">5 caballos</strong> de{" "}
        <strong className="strongTiposAp">5 carreras consecutivas</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º lugar</strong> ganás la apuesta quintuplo
      </>
    ),
  },
  {
    img: "../src/assets/cadena.webp",
    alt: "imagen cadena",
    texto: (
      <>
        Si seleccionás <strong className="strongTiposAp">6 caballos</strong> de{" "}
        <strong className="strongTiposAp">6 carreras consecutivas</strong> y llegan en{" "}
        <strong className="strongTiposAp">1º lugar</strong> ganás la apuesta cadena
      </>
    ),
  },
];

const TiposApuestas = () => {
  return (
    <>
      <header className="header-pages">
        <Navbar />
      </header>
    
    <main className="main-inicio main-pages">
      <a
        className="whatsapp-icon"
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
            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
          </svg>
          Tipos de apuestas
        </h3>
      </div>

      <div className="separador-pages"></div>

      <div className="container-como-apostar">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tipos.map((tipo, i) => (
            <div className="col" key={i}>
              <div className="card">
                <img
                  src={tipo.img}
                  className="card-img-top img-como-apostar"
                  alt={tipo.alt}
                  loading="lazy"
                />
                <div className="card-body card-body-como-apostar">
                  <p className="card-text">{tipo.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default TiposApuestas;
